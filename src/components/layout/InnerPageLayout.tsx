import { ReactNode } from "react";

interface InnerPageLayoutProps {
  children: ReactNode;
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return <main className="flex-1">{children}</main>;
}
