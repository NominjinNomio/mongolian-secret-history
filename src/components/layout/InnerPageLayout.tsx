import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface InnerPageLayoutProps {
  children: ReactNode;
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return (
    <>
      <Header navItems={[]} />
      <main className="flex-1">{children}</main>
      <Footer navItems={[]} />
    </>
  );
}
