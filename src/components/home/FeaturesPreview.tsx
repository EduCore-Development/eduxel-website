import { Database, Monitor, Shield, Users, Laptop, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "Datenbank-Management",
    description: "Verwalten Sie alle schulinternen Daten zentral und sicher an einem Ort.",
  },
  {
    icon: Laptop,
    title: "Inventarverwaltung",
    description: "Laptops, Tablets und andere Geräte effizient tracken und verwalten.",
  },
  {
    icon: Users,
    title: "Schüler & Lehrer",
    description: "Umfassende Profile für Schüler:innen und Lehrkräfte anlegen.",
  },
  {
    icon: Shield,
    title: "Datenschutz",
    description: "DSGVO-konform und mit modernsten Sicherheitsstandards.",
  },
  {
    icon: BarChart3,
    title: "Berichte & Analysen",
    description: "Aussagekräftige Reports und Statistiken auf Knopfdruck.",
  },
  {
    icon: Monitor,
    title: "Offline-First",
    description: "Funktioniert auch ohne Internetverbindung zuverlässig.",
  },
];

export function FeaturesPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Alles, was Ihre Schule braucht
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eduxel vereint alle wichtigen Funktionen für die moderne Schulverwaltung
            in einer intuitiven Oberfläche.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/features">Alle Features entdecken</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
