import { Github, Heart, Code2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function OpenSourceCTA() {
  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                Open Source
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Von der Community,{" "}
                <span className="text-gradient">für die Community</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Eduxel ist zu 100% Open Source unter der MIT-Lizenz. 
                Schauen Sie sich den Code an, tragen Sie bei oder passen Sie es an Ihre Bedürfnisse an.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://github.com/EduCore-Development/eduxel-desktop-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    GitHub Repository
                    <Star className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/donate">
                    <Heart className="w-5 h-5" />
                    Projekt unterstützen
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  MIT Lizenz
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  TypeScript
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  Community-driven
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
