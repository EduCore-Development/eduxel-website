import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Download,
  Apple,
  Monitor,
  Github,
  CheckCircle2,
  Terminal,
  FileCode2,
} from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const downloadOptions = [
  {
    os: "Windows",
    icon: Monitor,
    version: "v1.0.0",
    filename: "eduxel-setup.exe",
    requirements: "Windows 10/11 (64-bit)",
  }
];

const steps = [
  "Laden Sie die passende Version für Ihr Betriebssystem herunter",
  "Führen Sie den Installer aus und folgen Sie den Anweisungen",
  "Starten Sie Eduxel und richten Sie Ihre Datenbank ein",
  "Beginnen Sie mit der Verwaltung Ihrer Schuldaten!",
];

const DownloadPage = () => {
  return (
    <Layout>
      <Seo
        title="Download"
        description="Laden Sie Eduxel kostenlos herunter. Verfügbar für Windows, macOS und Linux. Open Source unter MIT-Lizenz."
        url="https://edu-core.dev/download"
        image="https://edu-core.dev/logo.png"
        keywords="Eduxel Download, Schulverwaltung Download, Windows, macOS, Linux, Open Source"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Eduxel",
          operatingSystem: "Windows, macOS, Linux",
          applicationCategory: "EducationalApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          downloadUrl: "https://github.com/EduCore-Development/eduxel-desktop-application/releases",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Download className="w-4 h-4" />
              Kostenloser Download
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Eduxel <span className="text-gradient">herunterladen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie Ihr Betriebssystem und starten Sie in wenigen Minuten mit der
              Schulverwaltung der Zukunft.
            </p>
          </motion.div>

          {/* Download Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={option.os}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{option.os}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.requirements}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  {option.filename} • {option.version}
                </p>
                <Button variant="default" className="w-full" asChild>
                  <a
                    href={`https://github.com/EduCore-Development/eduxel-desktop-application/releases/latest/download/${option.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Alternative: Source Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 lg:p-8 mb-16 max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <FileCode2 className="w-7 h-7 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Lieber selbst kompilieren?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Klonen Sie das Repository und bauen Sie Eduxel aus dem Quellcode.
                </p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/EduCore-Development/eduxel-desktop-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
              Installation in 4 Schritten
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium">
                      Schritt {index + 1}
                    </span>
                    <p className="text-foreground">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadPage;
