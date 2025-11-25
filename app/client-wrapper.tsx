"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/footer/footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
