import { Inter } from "next/font/google";
import "./globals.css";
import NavbarNew from "../components/NavbarNew";
import TopHeroNew from "@/components/TopHeroNew";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarNew />
        <TopHeroNew />
        {children}
        <Footer />
      </body>
    </html>
  );
}
