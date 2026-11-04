import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "À propos", path: "/a-propos" }]} />
      {children}
    </>
  );
}
