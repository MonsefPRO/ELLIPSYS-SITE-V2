import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Manrope, Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";
import ScrollToTop from "../components/ScrollToTop";
import { ClientProviders } from "../components/ClientProviders";

// ─── Polices chargées au build — servies depuis le même domaine (0 CDN externe) ──
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ellipsys-solutions.netlify.app"),
  title: "Nettoyage, Inspection et Maintenance par Drone et Robot en Europe | Ellipsys",
  description: "Ellipsys Solutions : ingénierie robotique pour l'entretien de vos infrastructures. Nettoyage de panneaux solaires, démoussage, façades, thermographie et destruction de nids de frelons. Drones certifiés, robots terrestres, partout en France.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ellipsys-solutions.netlify.app",
    siteName: "Ellipsys Solutions",
    title: "Nettoyage, Inspection et Maintenance par Drone et Robot | Ellipsys",
    description: "Ellipsys Solutions : drones et robots pour la maintenance de vos infrastructures. Panneaux solaires, toitures, façades, thermographie, nids de frelons — sans échafaudage, partout en France.",
    images: [
      {
        url: "/images/accueil.png",
        width: 1200,
        height: 630,
        alt: "Ellipsys Solutions — Maintenance par drone et robotique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage, Inspection et Maintenance par Drone et Robot | Ellipsys",
    description: "Drones et robots pour la maintenance de vos infrastructures — panneaux solaires, toitures, façades, thermographie. Partout en France.",
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
      "@id": "https://ellipsys-solutions.netlify.app/#business",
      "name": "Ellipsys Solutions",
      "description": "Spécialiste de la maintenance extérieure par drone et robotique : nettoyage de panneaux solaires, démoussage toiture, façades, thermographie, destruction de nids de frelons. Intervention sans échafaudage, partout en France.",
      "url": "https://ellipsys-solutions.netlify.app",
      "telephone": "+33467209709",
      "email": "contact@ellipsys-group.com",
      "logo": "https://ellipsys-solutions.netlify.app/images/favicon.png",
      "image": "https://ellipsys-solutions.netlify.app/images/accueil.png",
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
          "addressRegion": "Occitanie"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "159 Rue de Thor",
          "addressLocality": "Montpellier",
          "postalCode": "34000",
          "addressCountry": "FR",
          "addressRegion": "Occitanie"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5944,
        "longitude": 4.1884
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Paris" },
        { "@type": "City", "name": "Lyon" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "Country", "name": "France" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de maintenance par drone et robotique",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nettoyage de panneaux solaires par drone" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Démoussage et traitement de toiture" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nettoyage de façades et bardages" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermographie infrarouge par drone" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Destruction de nids de frelons asiatiques" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prises de vues aériennes et imagerie drone" } }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "27",
        "bestRating": "5"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://ellipsys-solutions.netlify.app/#website",
      "url": "https://ellipsys-solutions.netlify.app",
      "name": "Ellipsys Solutions",
      "description": "Nettoyage, Inspection et Maintenance par Drone et Robot en Europe",
      "publisher": { "@id": "https://ellipsys-solutions.netlify.app/#business" },
      "inLanguage": ["fr-FR", "en-GB"]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`scroll-smooth ${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Préchargement de l'image LCP (hero visible au premier rendu) */}
        <link rel="preload" as="image" href="/rony.jpg" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">

        {/* GTM chargé après interaction — ne bloque plus le rendu initial */}
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
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LanguageProvider>
          {/* CookieBanner, PostHog, LeadEmailPopup — tous chargés côté client uniquement */}
          <ClientProviders />
          <Header />
          <ScrollToTop />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
