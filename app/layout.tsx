import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";
import ScrollToTop from "../components/ScrollToTop";
import { ClientProviders } from "../components/ClientProviders";

// Polices auto-hébergées (sous-ensemble latin, variables) : le build ne dépend
// plus de Google Fonts, dont un échec réseau a déjà fait échouer un déploiement.
const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["sans-serif"],
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["sans-serif"],
});

// ─── METADATA GLOBALE (layout racine) ──────────────────────────────────────
// IMPORTANT : canonical et og:url ne sont PAS définis ici.
// Chaque page définit son propre canonical via generateMetadata() ou export const metadata.
// metadataBase est défini ici pour que Next.js construise les URLs absolues correctement.
export const metadata: Metadata = {
  metadataBase: new URL("https://ellipsys-solutions.com"),
  title: {
    default: "Nettoyage par Drone & Robotique, France | Ellipsys Solutions",
    template: "%s | Ellipsys",
  },
  description:
    "Nettoyage de panneaux photovoltaïques, façades et toitures par drone et robot. Jusqu'à 30 % de production récupérée. Devis 24 h. Certifiés DGAC/EASA.",
  keywords: [
    "nettoyage panneaux solaires drone",
    "nettoyage panneaux photovoltaïques",
    "nettoyage centrale photovoltaïque",
    "nettoyage drone Montpellier",
    "maintenance centrale solaire",
    "démoussage toiture drone",
    "thermographie drone",
    "nettoyage façade drone",
    "robot nettoyage panneaux solaires",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Ellipsys Solutions",
    images: [
      {
        url: "/images/accueil.png",
        width: 1680,
        height: 945,
        alt: "Ellipsys Solutions, nettoyage de panneaux solaires par drone et robot",
      },
    ],
  },
  // Pas de titre ni d'image fixes : X reprend ceux de chaque page (og:title, og:image).
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ellipsys-solutions.com/#business",
      "name": "Ellipsys Solutions",
      "description":
        "Spécialiste de la maintenance extérieure par drone et robot : nettoyage de panneaux solaires et de centrales photovoltaïques, démoussage de toiture, nettoyage de façades et de bardages industriels. Sur les sites industriels, bardage et panneaux solaires en toiture sont traités en une seule intervention. Sans échafaudage, partout en France. Adhérent UN Global Compact.",
      "url": "https://ellipsys-solutions.com",
      "telephone": "+33467209709",
      // Identifiants légaux publics : renforcent la confiance accordée par Google
      // (E-E-A-T) en rattachant le site à une entité juridique vérifiable.
      "vatID": "FR74999957533",
      "taxID": "99995753300014",
      "legalName": "Ellipsys Solutions",
      "email": "contact@ellipsys-group.com",
      // Domaines d'expertise (entité) + appartenance RSE : aident Google et les
      // moteurs IA à comprendre et citer Ellipsys sur ces sujets (E-E-A-T / GSO).
      "knowsAbout": [
        "Nettoyage de panneaux solaires photovoltaïques",
        "Nettoyage de centrales solaires, ombrières et toitures industrielles",
        "Démoussage et hydrofuge de toiture",
        "Nettoyage de façades et de bardages industriels",
        "Thermographie infrarouge par drone",
        "Réglementation drone professionnelle DGAC (STS-01, STS-02, SORA)",
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "United Nations Global Compact",
        "url": "https://unglobalcompact.org",
      },
      "logo": "https://ellipsys-solutions.com/images/favicon.png",
      "image": "https://ellipsys-solutions.com/images/accueil.png",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Virement, Chèque, Carte bancaire",
      // Adresse unique = identique à la fiche Google Business (cohérence NAP)
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "159 Rue de Thor",
        "addressLocality": "Montpellier",
        "postalCode": "34000",
        "addressCountry": "FR",
        "addressRegion": "Occitanie",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6119,
        "longitude": 3.9092,
      },
      "areaServed": [
        { "@type": "State", "name": "Occitanie" },
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Béziers" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Perpignan" },
        { "@type": "City", "name": "Narbonne" },
        { "@type": "City", "name": "Alès" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "Avignon" },
        { "@type": "City", "name": "Marseille" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de maintenance par drone et robotique",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage de panneaux solaires par drone",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Démoussage et traitement de toiture",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage de façades et bardages",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thermographie infrarouge par drone",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Destruction de nids de frelons asiatiques",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Prises de vues aériennes et imagerie drone",
            },
          },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "4",
        "bestRating": "5",
      },
      // Profils officiels : permettent à Google de relier explicitement le site
      // à l'entité. À compléter au fur et à mesure des citations obtenues.
      "sameAs": [
        "https://www.linkedin.com/company/ellipsys-solutions-drones",
        "https://www.instagram.com/ellipsysolutionsdrone/",
        "https://www.tiktok.com/@ellipsyssolutions",
        "https://www.facebook.com/profile.php?id=61588550468356"
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ellipsys-solutions.com/#website",
      "url": "https://ellipsys-solutions.com",
      "name": "Ellipsys Solutions",
      "description":
        "Nettoyage, Inspection et Maintenance par Drone et Robot en Europe",
      "publisher": { "@id": "https://ellipsys-solutions.com/#business" },
      "inLanguage": ["fr-FR", "en-GB"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:['FR','EU']});gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);`,
          }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5653377L');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5653377L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LanguageProvider>
          <ClientProviders />
          <Header />
          <ScrollToTop />
          <div className="flex-grow">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
