import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Nettoyage de façades et bardages", path: "/prestations/nettoyage-facade" }]} />
      {children}
    </>
  );
}
