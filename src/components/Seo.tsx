import { Helmet } from "react-helmet-async";

interface SeoProps {
	title?: string;
	description?: string;
	url?: string;
	image?: string;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	keywords?: string;
	twitter?: {
		card?: string;
		site?: string;
		creator?: string;
	};
	jsonLd?: object | object[];
}

const DEFAULT_TITLE = "Eduxel - Open-Source Schulverwaltungssoftware";
const DEFAULT_DESCRIPTION =
	"Moderne, sichere und benutzerfreundliche Open-Source Schulverwaltungssoftware. Kostenlos, transparent und entwickelt für Bildungseinrichtungen in Deutschland.";
const DEFAULT_URL = "https://edu-core.dev";
const DEFAULT_IMAGE = "https://edu-core.dev/logo.png";
const DEFAULT_TWITTER_SITE = "@eduxel";

export const Seo = ({
	title,
	description = DEFAULT_DESCRIPTION,
	url = DEFAULT_URL,
	image = DEFAULT_IMAGE,
	type = "website",
	publishedTime,
	modifiedTime,
	author,
	keywords,
	twitter = {},
	jsonLd,
}: SeoProps) => {
	const pageTitle = title ? `${title} - Eduxel` : DEFAULT_TITLE;
	const twitterCard = twitter.card || "summary_large_image";
	const twitterSite = twitter.site || DEFAULT_TWITTER_SITE;
	const twitterCreator = twitter.creator || DEFAULT_TWITTER_SITE;

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<link rel="canonical" href={url} />

			{/* OpenGraph Tags */}
			<meta property="og:site_name" content="Eduxel" />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:image:alt" content={title || "Eduxel"} />
			<meta property="og:locale" content="de_DE" />

			{/* Article specific tags */}
			{type === "article" && publishedTime && (
				<meta property="article:published_time" content={publishedTime} />
			)}
			{type === "article" && modifiedTime && (
				<meta property="article:modified_time" content={modifiedTime} />
			)}
			{type === "article" && author && (
				<meta property="article:author" content={author} />
			)}

			{/* Twitter Card Tags */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:site" content={twitterSite} />
			<meta name="twitter:creator" content={twitterCreator} />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:image:alt" content={title || "Eduxel"} />

			{/* JSON-LD Structured Data */}
			{jsonLd && (
				<script type="application/ld+json">
					{JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
				</script>
			)}
		</Helmet>
	);
};

export default Seo;

