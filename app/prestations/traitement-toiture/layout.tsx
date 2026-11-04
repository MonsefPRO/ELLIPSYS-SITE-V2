import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd name="Démoussage et traitement de toiture par drone" serviceType="Démoussage et hydrofuge de toiture" path="/prestations/traitement-toiture" description="Démoussage et traitement hydrofuge de toiture par drone, sans échafaudage et sans monter sur le toit." />
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Démoussage et hydrofuge de toiture", path: "/prestations/traitement-toiture" }]} />
      {children}
    </>
  );
}
