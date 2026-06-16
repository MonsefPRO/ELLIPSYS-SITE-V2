import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Manrope, Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";
import ScrollToTop from "../components/ScrollToTop";
import { ClientProviders } from "../components/ClientProviders";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// ─── METADATA GLOBALE (layout racine) ──────────────────────────────────────
// IMPORTANT : canonical et og:url ne sont PAS définis ici.
// Chaque page définit son propre canonical via generateMetadata() ou export const metadata.
// metadataBase est défini ici pour que Next.js construise les URLs absolues correctement.
export const metadata: Metadata = {
  metadataBase: new URL("https://ellipsys-solutions.com"),
  title: {
    default: "Nettoyage par Drone & Robotique — France | Ellipsys Solutions",
    template: "%s | Ellipsys Solutions",
  },
  description:
    "Nettoyage de panneaux photovoltaïques, façades et toitures par drone et robot. Récupérez jusqu'à 30% de production. Devis 24h. France entière. Certifiés DGAC/EASA.",
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
    "eau osmosée panneaux solaires",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Ellipsys Solutions",
    title: {
      default: "Nettoyage par Drone & Robotique — France | Ellipsys Solutions",
      template: "%s | Ellipsys Solutions",
    },
    description:
      "Drone + robot + eau osmosée pure. Récupération de rendement jusqu'à +30%. Panneaux solaires, toitures, façades, thermographie. Toute France. Certifiés DGAC/EASA.",
    images: [
      {
        url: "/images/accueil.png",
        width: 1200,
        height: 630,
        alt: "Ellipsys Solutions — Nettoyage panneaux solaires par drone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage, Inspection et Maintenance par Drone et Robot | Ellipsys",
    description:
      "Drones et robots pour la maintenance de vos infrastructures — panneaux solaires, toitures, façades, thermographie. Partout en France.",
    images: ["/images/accueil.png"],
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
        "Spécialiste de la maintenance extérieure par drone et robotique : nettoyage de panneaux solaires, démoussage toiture, façades, thermographie, destruction de nids de frelons. Intervention sans échafaudage, partout en France.",
      "url": "https://ellipsys-solutions.com",
      "telephone": "+33467209709",
      "email": "contact@ellipsys-group.com",
      "logo": "https://ellipsys-solutions.com/images/favicon.png",
      "image": "https://ellipsys-solutions.com/images/accueil.png",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Virement, Chèque, Carte bancaire",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "42, place de la Lucque",
          "addressLocality": "Aimargues",
          "postalCode": "30470",
          "addressCountry": "FR",
          "addressRegion": "Occitanie",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "159 Rue de Thor",
          "addressLocality": "Montpellier",
          "postalCode": "34000",
          "addressCountry": "FR",
          "addressRegion": "Occitanie",
        },
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5944,
        "longitude": 4.1884,
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Paris" },
        { "@type": "City", "name": "Lyon" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "Country", "name": "France" },
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
      "sameAs": [],
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
        <link rel="preload" as="image" href="/rony.jpg" />
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
