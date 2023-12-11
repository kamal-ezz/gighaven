import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gighaven",
  description: "Freelance Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full m-0 p-0">
      <body className="h-full m-0 p-0 flex flex-col">
        <Navbar />
        <div className="mb-28 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
