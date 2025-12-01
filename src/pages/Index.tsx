import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { OpenSourceCTA } from "@/components/home/OpenSourceCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Eduxel - Open Source Schulverwaltung | Educore Development</title>
        <meta
          name="description"
          content="Eduxel ist eine kostenlose Open-Source-Software zur Verwaltung von Schuldatenbanken und Inventar. Entwickelt von Educore Development."
        />
      </Helmet>
      <HeroSection />
      <FeaturesPreview />
      <OpenSourceCTA />
    </Layout>
  );
};

export default Index;
