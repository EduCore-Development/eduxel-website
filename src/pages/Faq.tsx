import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Github } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqs = [
	{
		question: "Was ist Eduxel?",
		answer:
			"Eduxel ist eine Open-Source-Software zur Verwaltung von Schuldatenbanken und Inventar. Sie ermöglicht es Schulen, Geräte wie Laptops, Tablets und andere Ausstattung effizient zu verwalten.",
	},
	{
		question: "Ist Eduxel wirklich kostenlos?",
		answer:
			"Ja, Eduxel ist zu 100% kostenlos und Open Source. Sie können die Software frei herunterladen, nutzen und auch den Quellcode einsehen und anpassen.",
	},
	{
		question: "Auf welchen Betriebssystemen läuft Eduxel?",
		answer:
			"Eduxel ist als Desktop-Anwendung für Windows, macOS und Linux verfügbar. Die Anwendung basiert auf Electron und bietet auf allen Plattformen die gleiche Funktionalität.",
	},
	{
		question: "Wie sicher sind meine Daten?",
		answer:
			"Ihre Daten bleiben bei Ihnen. Eduxel speichert alle Daten lokal auf Ihrem Server bzw. Computer. Es werden keine Daten an externe Server übertragen. Sie haben die volle Kontrolle über Ihre Daten.",
	},
	{
		question: "Kann ich Eduxel an meine Schule anpassen?",
		answer:
			"Ja, als Open-Source-Software können Sie Eduxel vollständig an Ihre Bedürfnisse anpassen. Der Quellcode ist auf GitHub verfügbar und Sie können eigene Features hinzufügen oder bestehende anpassen.",
	},
	{
		question: "Wie kann ich zum Projekt beitragen?",
		answer:
			"Es gibt viele Möglichkeiten: Sie können Code beisteuern, Bugs melden, Dokumentation verbessern, Übersetzungen hinzufügen oder das Projekt finanziell durch Spenden unterstützen.",
	},
	{
		question: "Gibt es Support für Eduxel?",
		answer:
			"Community-Support ist über GitHub Issues und Discussions verfügbar. Für kommerziellen Support oder individuelle Anpassungen kontaktieren Sie uns bitte direkt.",
	},
	{
		question: "Wie oft wird Eduxel aktualisiert?",
		answer:
			"Wir veröffentlichen regelmäßig Updates mit neuen Features und Bugfixes. Als Open-Source-Projekt hängt die Entwicklungsgeschwindigkeit auch von Community-Beiträgen ab.",
	},
];

const FaqPage = () => {
	return (
		<Layout>
			<Seo
				title="FAQ - Häufige Fragen"
				description="Häufig gestellte Fragen zu Eduxel - der Open-Source Schulverwaltungssoftware. Erfahren Sie mehr über Installation, Sicherheit und Funktionen."
				url="https://edu-core.dev/faq"
				image="https://edu-core.dev/logo.png"
				keywords="Eduxel FAQ, Häufige Fragen, Schulverwaltung Hilfe, Support"
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: faqs.map((faq) => ({
						"@type": "Question",
						name: faq.question,
						acceptedAnswer: {
							"@type": "Answer",
							text: faq.answer,
						},
					})),
				}}
			/>

			<section className="py-16 lg:py-24">
				<div className="container max-w-3xl">
					{/* Hero */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
							Häufige <span className="text-gradient">Fragen</span>
						</h1>
						<p className="text-lg text-muted-foreground">
							Antworten auf die wichtigsten Fragen rund um Eduxel.
						</p>
					</motion.div>

					{/* FAQ Accordion */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<Accordion type="single" collapsible className="space-y-4">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="bg-card border border-border rounded-xl px-6"
								>
									<AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>

					{/* Contact CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mt-12 text-center"
					>
						<p className="text-muted-foreground mb-4">
							Ihre Frage war nicht dabei?
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button variant="outline" asChild>
								<a
									href="https://github.com/EduCore-Development/eduxel-desktop-application/discussions"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="w-5 h-5" />
									GitHub Discussions
								</a>
							</Button>
							<Button variant="outline" asChild>
								<a href="mailto:contact@edu-core.dev">
									<Mail className="w-5 h-5" />
									Kontakt aufnehmen
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</Layout>
	);
};

export default FaqPage;
