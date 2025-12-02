import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface TeamMember {
	name: string;
	role: string;
	image: string;
	bio: string;
	socials: {
		github?: string;
		linkedin?: string;
		twitter?: string;
		email?: string;
		website?: string;
	};
	isHiring?: boolean;
}

const teamMembers: TeamMember[] = [
	{
		name: "Ruben S.",
		role: "Gründer & Lead Developer",
		image: "/ruben.png",
		bio: "Leidenschaftlicher Entwickler mit Fokus auf Open-Source-Lösungen für den Bildungssektor.",
		socials: {
			github: "https://github.com/Ruben54213",
			email: "ruben@nebuliton.io",
			website: "https://rubendev.de",
		},
	},
	{
		name: "Emin B.",
		role: "Gründer & Lead Developer",
		image: "/emin.png",
		bio: "Leidenschaftlicher Entwickler mit Fokus auf Open-Source-Lösungen für den Bildungssektor.",
		socials: {
			github: "https://github.com/Eministar",
			email: "hello@star-dev.xyz",
			website: "https://star-dev.xyz",
		},
	},
	{
		name: "Entwickler gesucht",
		role: "Open Source Contributor",
		image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Contributor",
		bio: "Werde Teil unseres Teams! Wir suchen motivierte Entwickler:innen, die uns bei Eduxel unterstützen.",
		socials: {
			github: "https://github.com/EduCore-Development",
		},
		isHiring: true,
	},
];

const TeamPage = () => {
	return (
		<Layout>
			<Helmet>
				<title>Unser Team - Educore Development</title>
				<meta
					name="description"
					content="Lernen Sie das Team hinter Eduxel kennen - leidenschaftliche Entwickler für Open-Source-Schulverwaltung."
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
							Unser <span className="text-gradient">Team</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Die Menschen hinter Eduxel – vereint durch die Vision, Schulverwaltung 
							einfacher und zugänglicher zu machen.
						</p>
					</motion.div>

					{/* Team Grid */}
					<div className="max-w-5xl mx-auto mb-16">
						{/* Zwei Gründungsmitglieder nebeneinander, zentriert */}
						<div className="flex flex-col sm:flex-row gap-8 justify-center items-start mb-8">
							{teamMembers.slice(0, 2).map((member, index) => (
								<motion.div
									key={member.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className={`w-full sm:w-80 p-6 rounded-2xl bg-card border ${
										member.isHiring ? "border-primary border-dashed" : "border-border"
									} text-center`}
								>
									<img
										src={member.image}
										alt={member.name}
										className="w-24 h-24 rounded-full mx-auto mb-4 bg-muted"
									/>
									{member.isHiring && (
										<span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3">
											Wir suchen dich!
										</span>
									)}
									<h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
									<p className="text-sm text-primary mb-3">{member.role}</p>
									<p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
									{/* Socials */}
									<div className="flex justify-center gap-2">
										{member.socials.github && (
											<Button variant="ghost" size="icon" asChild>
												<a
													href={member.socials.github}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="GitHub"
												>
													<Github className="w-4 h-4" />
												</a>
											</Button>
										)}
										{member.socials.linkedin && (
											<Button variant="ghost" size="icon" asChild>
												<a
													href={member.socials.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="LinkedIn"
												>
													<Linkedin className="w-4 h-4" />
												</a>
											</Button>
										)}
										{member.socials.twitter && (
											<Button variant="ghost" size="icon" asChild>
												<a
													href={member.socials.twitter}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Twitter"
												>
													<Twitter className="w-4 h-4" />
												</a>
											</Button>
										)}
										{member.socials.email && (
											<Button variant="ghost" size="icon" asChild>
												<a href={`mailto:${member.socials.email}`} aria-label="E-Mail">
													<Mail className="w-4 h-4" />
												</a>
											</Button>
										)}
										{member.socials.website && (
											<Button variant="ghost" size="icon" asChild>
												<a
													href={member.socials.website}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Website"
												>
													<Globe className="w-4 h-4" />
												</a>
											</Button>
										)}
									</div>
								</motion.div>
							))}
						</div>

						{/* Entwickler gesucht darunter, zentriert */}
						<div className="flex justify-center">
							{teamMembers.slice(2).map((member, index) => (
								<motion.div
									key={member.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className={`w-full sm:w-96 p-6 rounded-2xl bg-card border ${
										member.isHiring ? "border-primary border-dashed" : "border-border"
									} text-center`}
								>
									<img
										src={member.image}
										alt={member.name}
										className="w-24 h-24 rounded-full mx-auto mb-4 bg-muted"
									/>
									{member.isHiring && (
										<span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3">
											Wir suchen dich!
										</span>
									)}
									<h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
									<p className="text-sm text-primary mb-3">{member.role}</p>
									<p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
									{/* Socials (falls vorhanden) */}
									<div className="flex justify-center gap-2">
										{member.socials.github && (
											<Button variant="ghost" size="icon" asChild>
												<a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
													<Github className="w-4 h-4" />
												</a>
											</Button>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Join CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="glass rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
					>
						<h2 className="text-2xl font-display font-bold text-foreground mb-4">
							Werde Teil des Teams
						</h2>
						<p className="text-muted-foreground mb-6">
							Eduxel ist ein Open-Source-Projekt und lebt von der Community. 
							Ob als Entwickler:in, Designer:in oder Tester:in – jeder Beitrag zählt!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button variant="hero" asChild>
								<a
									href="https://github.com/EduCore-Development/eduxel-desktop-application"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="w-5 h-5" />
									Auf GitHub beitragen
								</a>
							</Button>
							<Button variant="outline" asChild>
								<a href="https://discord.gg/mQM6CVQHEG">
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

export default TeamPage;
