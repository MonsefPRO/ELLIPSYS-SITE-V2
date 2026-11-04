import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Réalisations", path: "/realisations" }]} />
      {children}
    </>
  );
}
