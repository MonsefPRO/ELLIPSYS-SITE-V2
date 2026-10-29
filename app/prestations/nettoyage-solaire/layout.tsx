import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Nettoyage de panneaux solaires", path: "/prestations/nettoyage-solaire" }]} />
      {children}
    </>
  );
}
