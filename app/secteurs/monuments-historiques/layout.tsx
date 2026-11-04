import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Secteurs", path: "/domaines" }, { name: "Monuments historiques", path: "/secteurs/monuments-historiques" }]} />
      {children}
    </>
  );
}
