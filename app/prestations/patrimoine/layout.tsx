import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Entretien du patrimoine bâti", path: "/prestations/patrimoine" }]} />
      {children}
    </>
  );
}
