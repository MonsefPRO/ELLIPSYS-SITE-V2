import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Nettoyage de centrales photovoltaïques", path: "/nettoyage-panneaux-photovoltaiques" }]} />
      {children}
    </>
  );
}
