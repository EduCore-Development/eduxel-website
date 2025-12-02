import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const ImprintPage = () => {
	return (
		<Layout>
			<Seo
				title="Impressum"
				description="Impressum und rechtliche Angaben zu Eduxel und Nebuliton."
				url="https://edu-core.dev/imprint"
				image="https://edu-core.dev/logo.png"
				keywords="Impressum, Kontakt, Rechtliches, Eduxel"
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "WebPage",
					name: "Impressum",
					description: "Rechtliche Angaben und Impressum",
					url: "https://edu-core.dev/imprint",
				}}
			/>

			<section className="py-16 lg:py-24">
				<div className="container max-w-3xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
							Impressum
						</h1>

						<div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Angaben gemäß § 5 DDG
								</h2>
								<p className="text-muted-foreground">
									Nebuliton<br />
									Inhaber: Christian Hagenacker<br />
									Rutkamp 4<br />
									24111 Kiel<br />
									Deutschland
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Kontakt
								</h2>
								<p className="text-muted-foreground">
									E-Mail: <a href="mailto:admin@nebuliton.de" className="text-primary hover:underline">admin@nebuliton.de</a><br />
									Telefon: <a href="tel:+491756225187" className="text-primary hover:underline">+49 175 6225187</a>
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Umsatzsteuer-ID
								</h2>
								<p className="text-muted-foreground">
									Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
									<strong>DE455508340</strong>
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Hinweis zu Supportanfragen
								</h2>
								<p className="text-muted-foreground">
									Die obenstehenden Kontaktdaten dienen ausschließlich den gesetzlich vorgeschriebenen Impressumsangaben. Support-, Technik- oder Produktanfragen werden über diese Adresse nicht bearbeitet. Bitte nutze hierfür unsere offiziellen Kontaktwege auf der Website.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
								</h2>
								<p className="text-muted-foreground">
									Christian Hagenacker<br />
									Rutkamp 4<br />
									24111 Kiel
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									Haftungsausschluss
								</h2>
								<p className="text-muted-foreground">
									Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
								</p>
							</section>

							<section className="pt-4 border-t border-border">
								<p className="text-sm text-muted-foreground">
									Stand dieses Impressums: August 2025
								</p>
							</section>
						</div>
					</motion.div>
				</div>
			</section>
		</Layout>
	);
};

export default ImprintPage;
