import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const PrivacyPage = () => {
	return (
		<Layout>
			<Seo
				title="Datenschutzerklärung"
				description="Datenschutzerklärung und Informationen zum Umgang mit Ihren Daten bei Eduxel."
				url="https://edu-core.dev/privacy"
				image="https://edu-core.dev/logo.png"
				keywords="Datenschutz, Privacy, DSGVO, Eduxel Datenschutzerklärung"
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "WebPage",
					name: "Datenschutzerklärung",
					description: "Datenschutzerklärung für Eduxel",
					url: "https://edu-core.dev/privacy",
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
							Datenschutzerklärung
						</h1>

						<div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									1. Datenschutz auf einen Blick
								</h2>
								<h3 className="text-xl font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
								<p className="text-muted-foreground">
									Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									2. Verantwortlicher
								</h2>
								<p className="text-muted-foreground">
									Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
									Nebuliton<br />
									Christian Hagenacker<br />
									Rutkamp 4<br />
									24111 Kiel<br />
									Deutschland<br /><br />
									E-Mail: <a href="mailto:admin@nebuliton.de" className="text-primary hover:underline">admin@nebuliton.de</a>
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									3. Datenerfassung auf dieser Website
								</h2>
								<h3 className="text-xl font-semibold text-foreground mb-2">Hosting</h3>
								<p className="text-muted-foreground mb-4">
									Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
								</p>
								<h3 className="text-xl font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
								<p className="text-muted-foreground">
									Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
								</p>
								<ul className="list-disc list-inside text-muted-foreground mt-2">
									<li>Browsertyp und Browserversion</li>
									<li>Verwendetes Betriebssystem</li>
									<li>Referrer URL</li>
									<li>Hostname des zugreifenden Rechners</li>
									<li>Uhrzeit der Serveranfrage</li>
									<li>IP-Adresse</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									4. Ihre Rechte
								</h2>
								<p className="text-muted-foreground">
									Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									5. Cookies
								</h2>
								<p className="text-muted-foreground">
									Diese Website verwendet keine Tracking-Cookies. Wir setzen lediglich technisch notwendige Cookies ein, die für den Betrieb der Website erforderlich sind.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									6. Kontakt
								</h2>
								<p className="text-muted-foreground">
									Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-display font-semibold text-foreground mb-4">
									7. Open Source Software
								</h2>
								<p className="text-muted-foreground">
									Eduxel ist eine Open-Source-Software. Der Quellcode ist öffentlich auf GitHub einsehbar. Bei der Nutzung der Software auf Ihrem eigenen Server sind Sie selbst für die Einhaltung der Datenschutzbestimmungen verantwortlich.
								</p>
							</section>

							<section className="pt-4 border-t border-border">
								<p className="text-sm text-muted-foreground">
									Stand: August 2025
								</p>
							</section>
						</div>
					</motion.div>
				</div>
			</section>
		</Layout>
	);
};

export default PrivacyPage;
