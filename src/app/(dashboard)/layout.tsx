import { Navbar } from "@/components/Navbar";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
