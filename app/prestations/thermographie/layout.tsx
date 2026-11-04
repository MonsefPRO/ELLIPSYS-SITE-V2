import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd name="Thermographie infrarouge par drone" serviceType="Thermographie de bâtiments et de panneaux solaires par drone" path="/prestations/thermographie" description="Inspection thermographique par drone des toitures, des façades et des panneaux solaires." />
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Thermographie par drone", path: "/prestations/thermographie" }]} />
      {children}
    </>
  );
}
