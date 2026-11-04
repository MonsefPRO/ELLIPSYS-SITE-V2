import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Secteurs", path: "/domaines" }, { name: "Immobilier et syndics", path: "/secteurs/immobilier-syndics" }]} />
      {children}
    </>
  );
}
