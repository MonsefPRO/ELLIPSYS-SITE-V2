import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";
import ScrollToTop from "../components/ScrollToTop";
import CookieBanner from "../components/CookieBanner";
import PostHogProvider from "../components/PostHogProvider";

export const metadata: Metadata = {
  title: "Entretien, Nettoyage Solaire, Thermographie et Solutions Drones et Robots | Ellipsys",
  description: "Ellipsys Solutions : ingénierie robotique pour l'entretien de vos infrastructures. Nettoyage de panneaux solaires, démoussage, façades, thermographie et destruction de nids de frelons. Drones certifiés, robots terrestres, partout en France.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5653377L');`}} />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5653377L" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        <LanguageProvider>
          <PostHogProvider />
          <Header />
          <ScrollToTop />
          <CookieBanner />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
