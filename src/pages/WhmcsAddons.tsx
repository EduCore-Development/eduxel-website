import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WhmcsAddonsPage = () => {
	return (
		<Layout>
			<Helmet>
				<title>WHMCS Addons - Educore Development</title>
				<meta name="description" content="WHMCS Addons von Educore Development - Bald verfügbar." />
			</Helmet>

			<section className="py-16 lg:py-24 min-h-[60vh] flex items-center">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center max-w-2xl mx-auto"
					>
						<div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
							<Construction className="w-12 h-12 text-primary" />
						</div>
						
						<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
							WHMCS Addons
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							Diese Seite befindet sich noch in Arbeit.
						</p>
						<p className="text-muted-foreground mb-8">
							Wir entwickeln derzeit hochwertige WHMCS-Addons, die bald verfügbar sein werden. 
							Trage dich für Updates ein oder kontaktiere uns für weitere Informationen.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button variant="hero" asChild>
								<Link to="/about">
									<ArrowLeft className="w-5 h-5" />
									Zurück zu Über uns
								</Link>
							</Button>
							<Button variant="outline" asChild>
								<a href="mailto:contact@edu-core.dev">
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

export default WhmcsAddonsPage;
