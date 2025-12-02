import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Server, Shield, Zap, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const partners = [
	{
		name: "Nebuliton Hosting",
		logo: "/nebuliton.png",
		description:
			"Professionelles Webhosting und Server-Infrastruktur. Nebuliton bietet zuverlässige Hosting-Lösungen für Unternehmen jeder Größe.",
		features: ["99.9% Uptime", "DDoS-Schutz", "24/7 Support", "Deutsche Server"],
		website: "https://nebuliton.io",
		featured: true,
	},
];

const partnerBenefits = [
	{
		icon: Server,
		title: "Infrastruktur",
		description: "Zuverlässige Server-Infrastruktur für Eduxel-Installationen.",
	},
	{
		icon: Shield,
		title: "Sicherheit",
		description: "Höchste Sicherheitsstandards zum Schutz sensibler Schuldaten.",
	},
	{
		icon: Zap,
		title: "Performance",
		description: "Schnelle und stabile Verbindungen für reibungslosen Betrieb.",
	},
];

const PartnersPage = () => {
	return (
		<Layout>
			<Helmet>
				<title>Partner - Eduxel</title>
				<meta
					name="description"
					content="Unsere Partner unterstützen Eduxel mit Infrastruktur und Services. Entdecken Sie Nebuliton Hosting und mehr."
				/>
			</Helmet>

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
							Unsere <span className="text-gradient">Partner</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Starke Partnerschaften ermöglichen es uns, Eduxel kontinuierlich 
							weiterzuentwickeln und Schulen bestmöglich zu unterstützen.
						</p>
					</motion.div>

					{/* Featured Partner */}
					{partners
						.filter((p) => p.featured)
						.map((partner, index) => (
							<motion.div
								key={partner.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="glass rounded-2xl p-8 lg:p-12 mb-12 max-w-4xl mx-auto"
							>
								<div className="flex flex-col lg:flex-row gap-8 items-center">
									<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 overflow-hidden">
										<img src={partner.logo} alt={`${partner.name} Logo`} className="w-24 h-24 object-contain" />
									</div>
									<div className="flex-1 text-center lg:text-left">
										<div className="flex items-center gap-3 justify-center lg:justify-start mb-2">
											<h2 className="text-2xl font-display font-bold text-foreground">
												{partner.name}
											</h2>
											<span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
												Featured Partner
											</span>
										</div>
										<p className="text-muted-foreground mb-4">
											{partner.description}
										</p>
										<div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
											{partner.features.map((feature) => (
												<span
													key={feature}
													className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
												>
													{feature}
												</span>
											))}
										</div>
										<Button variant="hero" asChild>
											<a
												href={partner.website}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="w-5 h-5" />
												Website besuchen
											</a>
										</Button>
									</div>
								</div>
							</motion.div>
						))}

					{/* Benefits */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-16"
					>
						<h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
							Was unsere Partner bieten
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
							{partnerBenefits.map((benefit, index) => (
								<motion.div
									key={benefit.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="p-6 rounded-2xl bg-card border border-border text-center"
								>
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
										<benefit.icon className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{benefit.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{benefit.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Become Partner CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-card/50 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
					>
						<Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
						<h2 className="text-2xl font-display font-bold text-foreground mb-4">
							Partner werden
						</h2>
						<p className="text-muted-foreground mb-6">
							Sie möchten Eduxel als Partner unterstützen? Wir freuen uns über 
							Unternehmen, die unsere Vision einer besseren Schulverwaltung teilen.
						</p>
						<Button variant="outline" asChild>
							<a href="mailto:partners@edu-core.dev">
								Partnerschaft anfragen
							</a>
						</Button>
					</motion.div>
				</div>
			</section>
		</Layout>
	);
};

export default PartnersPage;
