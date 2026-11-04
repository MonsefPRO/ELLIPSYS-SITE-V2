import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd name="Nettoyage de façades, vitrages et bardages par drone" serviceType="Nettoyage de façades et de bardages par drone" path="/prestations/nettoyage-facade" description="Nettoyage de façades, de vitrages et de bardages par drone, sans échafaudage ni nacelle." />
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Nettoyage de façades et bardages", path: "/prestations/nettoyage-facade" }]} />
      {children}
    </>
  );
}
