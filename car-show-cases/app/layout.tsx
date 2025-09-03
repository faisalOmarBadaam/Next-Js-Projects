import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "@/Components";

export const metadata: Metadata = {
  title: "Car Hup",
  description: "find the best car for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
