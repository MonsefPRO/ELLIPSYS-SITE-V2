import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Secteurs", path: "/domaines" }, { name: "Particuliers", path: "/secteurs/particuliers" }]} />
      {children}
    </>
  );
}
