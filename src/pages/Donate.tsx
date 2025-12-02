import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Coffee, Star, Rocket, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const tiers = [
  {
    icon: Coffee,
    name: "Kaffee",
    amount: "5€",
    description: "Ein kleines Dankeschön für das Team",
    benefits: ["Unser herzlicher Dank", "Name in der Spenderliste"],
  },
  {
    icon: Star,
    name: "Supporter",
    amount: "25€",
    description: "Unterstützen Sie die Weiterentwicklung",
    benefits: ["Alle vorherigen Vorteile", "Early Access zu neuen Features", "Discord-Rolle"],
    popular: true,
  },
  {
    icon: Rocket,
    name: "Champion",
    amount: "100€",
    description: "Für echte Eduxel-Enthusiasten",
    benefits: [
      "Alle vorherigen Vorteile",
      "Logo auf der Website",
      "Direkter Kontakt zum Team",
      "Feature-Requests priorisiert",
    ],
  },
];

const DonatePage = () => {
  return (
    <Layout>
      <Seo
        title="Spenden"
        description="Unterstützen Sie die Entwicklung von Eduxel mit einer Spende. 100% der Spenden fließen in die Weiterentwicklung."
        url="https://edu-core.dev/donate"
        image="https://edu-core.dev/logo.png"
        keywords="Eduxel Spenden, Open Source unterstützen, Donation, Schulverwaltung fördern"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Eduxel unterstützen",
          description: "Spenden Sie, um die Entwicklung von Eduxel zu unterstützen",
          url: "https://edu-core.dev/donate",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Open Source unterstützen
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Werden Sie Teil der{" "}
              <span className="text-gradient">Eduxel-Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eduxel ist und bleibt kostenlos. Ihre Spende hilft uns, die Software weiterzuentwickeln
              und noch mehr Schulen zu erreichen.
            </p>
          </motion.div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  tier.popular
                    ? "bg-card border-primary shadow-soft"
                    : "bg-card/50 border-border hover:border-primary/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Beliebt
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    tier.popular ? "bg-primary/15" : "bg-secondary"
                  }`}
                >
                  <tier.icon
                    className={`w-7 h-7 ${tier.popular ? "text-primary" : "text-foreground"}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-1">
                  {tier.name}
                </h3>
                <p className="text-3xl font-display font-bold text-foreground text-center mb-2">
                  {tier.amount}
                </p>
                <p className="text-sm text-muted-foreground text-center mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://github.com/sponsors/EduCore-Development"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="w-4 h-4" />
                    Spenden
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* GitHub Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 lg:p-12 text-center max-w-2xl mx-auto"
          >
            <Github className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              GitHub Sponsors
            </h2>
            <p className="text-muted-foreground mb-6">
              Sie können uns auch direkt über GitHub Sponsors unterstützen.
              Monatliche oder einmalige Spenden sind möglich.
            </p>
            <Button variant="default" size="lg" asChild>
              <a
                href="https://github.com/sponsors/educore-development"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* How funds are used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Wofür werden die Spenden verwendet?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">50%</div>
                <div className="text-sm text-muted-foreground">Entwicklung neuer Features</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Infrastruktur & Hosting</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">20%</div>
                <div className="text-sm text-muted-foreground">Dokumentation & Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
