import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Prises de vues aériennes", path: "/prestations/prises-de-vues" }]} />
      {children}
    </>
  );
}
