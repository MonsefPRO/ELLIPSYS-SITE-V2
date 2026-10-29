import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prestations", path: "/prestations" }, { name: "Destruction de nids de frelons", path: "/prestations/nuisibles" }]} />
      {children}
    </>
  );
}
