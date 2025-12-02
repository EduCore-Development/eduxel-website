import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, Mail, Heart, Code2, Users, Target, Puzzle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const values = [
	{
		icon: Code2,
		title: "Open Source",
		description:
			"Wir glauben an die Kraft der Community. Eduxel ist zu 100% Open Source und wird es immer bleiben.",
	},
	{
		icon: Users,
		title: "Für Schulen",
		description:
			"Entwickelt in enger Zusammenarbeit mit Lehrkräften und Schulverwaltungen, um echte Probleme zu lösen.",
	},
	{
		icon: Target,
		title: "Einfachheit",
		description:
			"Komplexe Aufgaben einfach machen. Eine intuitive Oberfläche, die jeder bedienen kann.",
	},
];

const AboutPage = () => {
	return (
		<Layout>
			<Seo
				title="Über uns"
				description="Erfahren Sie mehr über Educore Development, das Team hinter Eduxel, und unsere Mission, Schulverwaltung zu revolutionieren."
				url="https://edu-core.dev/about"
				image="https://edu-core.dev/logo.png"
				keywords="Educore Development, Eduxel Team, Open Source, Schulverwaltung Mission"
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "AboutPage",
					name: "Über Eduxel",
					description: "Die Mission und Vision hinter der Eduxel Schulverwaltungssoftware",
					url: "https://edu-core.dev/about",
				}}
			/>

			<section className="py-16 lg:py-24">
				<div className="container">
					{/* Hero */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
							Hinter{" "}
							<span className="text-gradient">
								Eduxel
							</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Ein Team mit einer Mission: Schulverwaltung einfacher, sicherer und
							zugänglicher machen – für alle.
						</p>
					</motion.div>

					{/* About Educore */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="glass rounded-2xl p-8 lg:p-12 mb-16 max-w-4xl mx-auto"
					>
						<div className="flex flex-col lg:flex-row gap-8 items-center">
							{/* Ersetzt die E-Kachel durch das echte Logo */}
							<img
								src="/logo.png"
								alt="Eduxel Logo"
								className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-contain shrink-0"
							/>
							<div className="text-center lg:text-left">
								<h2 className="text-2xl font-display font-bold text-foreground mb-2">
									Educore Development
								</h2>
								<p className="text-muted-foreground mb-4">
									Educore Development ist ein Team von Entwickler:innen und
									Designer:innen, die sich der Verbesserung des Bildungssektors
									verschrieben haben. Wir entwickeln Open-Source-Tools, die Schulen
									dabei helfen, effizienter zu arbeiten und sich auf das
									Wesentliche zu konzentrieren: Bildung.
								</p>
								<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
									<Button variant="outline" size="sm" asChild>
										<a
											href="https://github.com/educore-development"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4" />
											GitHub
										</a>
									</Button>
									<Button variant="outline" size="sm" asChild>
										<a href="mailto:contact@edu-core.dev">
											<Mail className="w-4 h-4" />
											Kontakt
										</a>
									</Button>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Values */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-16"
					>
						<h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
							Unsere Werte
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
							{values.map((value, index) => (
								<motion.div
									key={value.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="p-6 rounded-2xl bg-card border border-border text-center"
								>
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
										<value.icon className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{value.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{value.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Mission Statement */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-card/50 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
					>
						<h2 className="text-2xl font-display font-bold text-foreground mb-4">
							Unsere Mission
						</h2>
						<blockquote className="text-xl text-muted-foreground italic mb-6">
							"Wir glauben, dass großartige Software für Schulen nicht teuer sein
							muss. Mit Eduxel geben wir Schulen ein Werkzeug an die Hand, das ihnen
							hilft, sich auf das zu konzentrieren, was wirklich zählt: die Bildung
							der nächsten Generation."
						</blockquote>
						<p className="text-foreground font-medium">— Das Educore Team</p>
					</motion.div>

					{/* Products Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-16"
					>
						<h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
							Unsere Produkte
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							{/* Eduxel */}
							<Link
								to="/features"
								className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<Code2 className="w-6 h-6 text-primary" />
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											<h3 className="text-lg font-semibold text-foreground">
												Eduxel
											</h3>
											<span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
												Verfügbar
											</span>
										</div>
										<p className="text-sm text-muted-foreground mb-3">
											Open-Source Schulverwaltung für Datenbanken und Inventar.
										</p>
										<span className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
											Mehr erfahren <ArrowRight className="w-4 h-4" />
										</span>
									</div>
								</div>
							</Link>

							{/* WHMCS Addons */}
							<Link
								to="/whmcs-addons"
								className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
										<Puzzle className="w-6 h-6 text-muted-foreground" />
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											<h3 className="text-lg font-semibold text-foreground">
												WHMCS Addons
											</h3>
											<span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
												In Arbeit
											</span>
										</div>
										<p className="text-sm text-muted-foreground mb-3">
											Hochwertige Erweiterungen für WHMCS – bald verfügbar.
										</p>
										<span className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
											Mehr erfahren <ArrowRight className="w-4 h-4" />
										</span>
									</div>
								</div>
							</Link>
						</div>
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mt-16"
					>
						<p className="text-muted-foreground mb-4">
							Möchten Sie das Projekt unterstützen?
						</p>
						<Button variant="hero" size="lg" asChild>
							<Link to="/donate">
								<Heart className="w-5 h-5" />
								Jetzt unterstützen
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</Layout>
	);
};

export default AboutPage;
