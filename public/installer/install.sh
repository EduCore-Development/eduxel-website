#!/usr/bin/env bash
set -euo pipefail

REPO="EduCore-Development/eduxel-server-application-installer"
ASSET_NAME="install.sh"

TMP="/tmp/eduxel-install.sh"

fail() { echo "[Eduxel] $*" >&2; exit 1; }

need() { command -v "$1" >/dev/null 2>&1 || fail "Fehlt: $1"; }

need curl
need jq

api="https://api.github.com/repos/${REPO}/releases/latest"

url="$(curl -fsSL "$api" | jq -r --arg n "$ASSET_NAME" '.assets[] | select(.name==$n) | .browser_download_url' | head -n 1)"

if [[ -z "${url}" || "${url}" == "null" ]]; then
  echo "[Eduxel] Kein Release-Asset '${ASSET_NAME}' gefunden. Fallback auf raw..."
  url="https://raw.githubusercontent.com/${REPO}/main/install.sh"
fi

curl -fsSL "$url" -o "$TMP"
chmod +x "$TMP"
exec bash "$TMP" "$@"