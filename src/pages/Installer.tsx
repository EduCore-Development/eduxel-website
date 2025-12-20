import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Github,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const features = [
  {
    title: "Automatisches Datenbank-Setup",
    description: "Installiert und konfiguriert MariaDB automatisch mit sicheren Zufallspasswörtern.",
    icon: Database,
  },
  {
    title: "Credential Server",
    description: "Ein sicherer Python-basierter Dienst verwaltet den Zugriff auf Ihre Datenbank-Anmeldedaten.",
    icon: Server,
  },
  {
    title: "Systemd Integration",
    description: "Der Dienst wird automatisch als Hintergrundprozess eingerichtet und startet bei jedem Systemstart.",
    icon: ShieldCheck,
  },
  {
    title: "Eduxel CLI",
    description: "Einfache Verwaltung und Statusabfrage über das integrierte Kommandozeilen-Tool.",
    icon: Code2,
  },
];

const steps = [
  {
    title: "Vorbereitung",
    description: "Stellen Sie sicher, dass Sie über Root-Rechte (sudo) auf Ihrem Linux-Server verfügen.",
  },
  {
    title: "Installation",
    description: "Führen Sie den Curl-Befehl aus. Der Installer lädt alle Abhängigkeiten (MariaDB, Python, jq) automatisch herunter.",
  },
  {
    title: "Konfiguration",
    description: "Wählen Sie zwischen automatischem Setup (empfohlen) oder manueller Datenbank-Konfiguration.",
  },
  {
    title: "Abschluss",
    description: "Nach der Installation erhalten Sie Ihr API-Secret und können den Status mit 'eduxel info' prüfen.",
  },
];

const InstallerPage = () => {
  return (
    <Layout>
      <Seo
        title="Server Installer"
        description="Erfahren Sie, wie Sie den Eduxel Server Installer auf Ihrem Linux-System nutzen. Einfache Installation mit nur einem Befehl."
        url="https://edu-core.dev/installer"
        keywords="Eduxel Installer, Linux Server Setup, Schulverwaltung Server, MariaDB Automatisierung"
      />

      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              Linux Server Installer
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Server-Installation <span className="text-gradient">vereinfacht</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mit unserem Open-Source Installer richten Sie Ihre Eduxel-Infrastruktur 
              in wenigen Minuten auf einem Debian-basierten System ein.
            </p>
          </motion.div>

          {/* Main Installation Command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Terminal className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Installationsbefehl
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Kopieren Sie diesen Befehl und führen Sie ihn in Ihrem Terminal aus:
              </p>
              <div className="bg-background rounded-xl p-4 font-mono text-sm md:text-base text-primary border border-border overflow-x-auto mb-6">
                <code>curl -sSL https://edu-core.dev/installer/install.sh | sudo bash</code>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" asChild>
                  <a
                    href="https://github.com/EduCore-Development/eduxel-server-application-installer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository ansehen
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://raw.githubusercontent.com/EduCore-Development/eduxel-server-application-installer/main/install.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Script-Inhalt prüfen
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Installation Steps */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Der Installationsprozess
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-2xl bg-secondary/30 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstallerPage;
