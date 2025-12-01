import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            100% Open Source & Kostenlos
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Schulverwaltung,{" "}
            <span className="text-gradient">neu gedacht</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Eduxel macht die Verwaltung von Schüler-, Lehrer- und Inventardaten 
            einfach, sicher und effizient. Für moderne Schulen entwickelt.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/download">
                <Download className="w-5 h-5" />
                Kostenlos herunterladen
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a
                href="https://github.com/EduCore-Development/eduxel-desktop-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Auf GitHub ansehen
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            Von Educore Development • MIT Lizenz • Keine versteckten Kosten
          </motion.p>
        </div>

        {/* Hero Image/Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="glass rounded-2xl p-2 shadow-elevated max-w-5xl mx-auto">
            <div className="bg-card rounded-xl overflow-hidden">
              {/* Mock App Header */}
              <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">Eduxel Dashboard</span>
                </div>
              </div>
              {/* Mock App Content */}
              <div className="p-6 lg:p-8 bg-gradient-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="text-2xl font-bold text-foreground">1,247</div>
                    <div className="text-sm text-muted-foreground">Schüler:innen</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="text-2xl font-bold text-foreground">89</div>
                    <div className="text-sm text-muted-foreground">Lehrkräfte</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="text-2xl font-bold text-foreground">342</div>
                    <div className="text-sm text-muted-foreground">Geräte erfasst</div>
                  </div>
                </div>
                <div className="mt-4 h-32 bg-secondary/30 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Dashboard Übersicht</span>
                </div>
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
