import { Link } from "react-router-dom";
import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              {/* Ersetzt die E-Kachel durch das echte Logo */}
              <img
                src="/logo.png"
                alt="Eduxel Logo"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="font-display font-bold text-xl text-foreground">
                Eduxel
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Open-Source Schulverwaltung von Educore Development.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/installer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Server Installer
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/EduCore-Development/eduxel-desktop-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  GitHub <Github className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partner
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Spenden
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  to="/imprint"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Educore Development. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Mit{" "}
            <Heart className="w-4 h-4 text-destructive" /> für Schulen entwickelt
          </p>
        </div>
      </div>
    </footer>
  );
}
