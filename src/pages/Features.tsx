import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Database,
  Monitor,
  Shield,
  Users,
  Laptop,
  BarChart3,
  Download,
  Zap,
  Lock,
  Cloud,
  Smartphone,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const mainFeatures = [
  {
    icon: Database,
    title: "Zentrale Datenbank",
    description:
      "Alle Schuldaten werden sicher in einer lokalen SQLite-Datenbank gespeichert. Volle Kontrolle über Ihre Daten, keine Cloud-Abhängigkeit.",
    highlight: true,
  },
  {
    icon: Laptop,
    title: "Inventarverwaltung",
    description:
      "Erfassen und verwalten Sie alle schulischen Geräte – von Laptops über Tablets bis hin zu Beamern. Mit Barcode-Support und Wartungshistorie.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Personen-Management",
    description:
      "Umfassende Verwaltung von Schüler:innen, Lehrkräften und weiterem Personal. Mit Klassenzuordnung, Kontaktdaten und mehr.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    description:
      "Entwickelt mit Datenschutz im Fokus. Alle Daten bleiben auf Ihrem Server, mit rollenbasierter Zugriffskontrolle.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Reports & Exporte",
    description:
      "Generieren Sie aussagekräftige Berichte und exportieren Sie Daten in verschiedene Formate wie CSV, PDF und Excel.",
    highlight: false,
  },
  {
    icon: Monitor,
    title: "Offline-First Design",
    description:
      "Funktioniert auch ohne Internetverbindung zuverlässig. Synchronisation erfolgt automatisch, sobald wieder online.",
    highlight: false,
  },
];

const additionalFeatures = [
  { icon: Zap, title: "Schnell & Performant", description: "Optimiert für große Datenmengen" },
  { icon: Lock, title: "Verschlüsselung", description: "AES-256 für sensible Daten" },
  { icon: Cloud, title: "Optional Cloud-Sync", description: "Wenn gewünscht, mit eigenem Server" },
  { icon: Smartphone, title: "Responsive", description: "Auch auf mobilen Geräten nutzbar" },
  { icon: RefreshCw, title: "Auto-Updates", description: "Immer die neueste Version" },
  { icon: Download, title: "Import-Wizard", description: "Einfache Datenmigration" },
];

const Features = () => {
  return (
    <Layout>
      <Seo
        title="Features"
        description="Entdecken Sie alle Features von Eduxel: Datenbank-Management, Inventarverwaltung, DSGVO-Konformität und mehr."
        url="https://edu-core.dev/features"
        image="https://edu-core.dev/logo.png"
        keywords="Eduxel Features, Schulverwaltung Funktionen, Inventarverwaltung, DSGVO, Datenbank"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Eduxel Features",
          description: "Alle Features und Funktionen der Eduxel Schulverwaltungssoftware",
          url: "https://edu-core.dev/features",
        }}
      />

      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Leistungsstarke <span className="text-gradient">Features</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eduxel bietet alles, was Sie für eine effiziente Schulverwaltung benötigen –
              ohne Kompromisse bei Sicherheit oder Benutzerfreundlichkeit.
            </p>
          </motion.div>

          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  feature.highlight
                    ? "bg-card border-primary/20 shadow-soft"
                    : "bg-card/50 border-border hover:border-primary/20"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    feature.highlight ? "bg-primary/15" : "bg-secondary"
                  }`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${feature.highlight ? "text-primary" : "text-foreground"}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
              Und noch viel mehr...
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/download">
                <Download className="w-5 h-5" />
                Jetzt kostenlos herunterladen
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
