import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { OpenSourceCTA } from "@/components/home/OpenSourceCTA";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <Layout>
      <Seo
        description="Moderne, sichere und benutzerfreundliche Open-Source Schulverwaltungssoftware. Kostenlos, transparent und entwickelt für Bildungseinrichtungen in Deutschland."
        url="https://edu-core.dev"
        image="https://edu-core.dev/logo.png"
        keywords="Eduxel, Schulverwaltung, Open Source, Schulsoftware, Datenbankverwaltung, Inventarverwaltung"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Eduxel",
            url: "https://edu-core.dev",
            description: "Open-Source Schulverwaltungssoftware für Bildungseinrichtungen",
            publisher: {
              "@type": "Organization",
              name: "Educore Development",
              logo: {
                "@type": "ImageObject",
                url: "https://edu-core.dev/logo.png",
              },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Eduxel",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Windows, Linux, macOS",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            description: "Open-Source Schulverwaltungssoftware",
          },
        ]}
      />
      <HeroSection />
      <FeaturesPreview />
      <OpenSourceCTA />
    </Layout>
  );
};

export default Index;
