import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Méthode", path: "/methode" }]} />
      {children}
    </>
  );
}
