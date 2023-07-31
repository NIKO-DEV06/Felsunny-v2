import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
// import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felsunny Technology",
  description:
    "A multipurpose business organization that deals with sales and distribution, government supplies, construction, consultancy services, gadgets & devices and property sales",
  keywords: [
    "felsunny",
    "felsunny technology",
    "felix sunday ayeniko",
    "ayeniko",
    "felsunny tech",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg[#F4EBD9] bg[#e0fd60] bg-[#292929] overflow-x-hidden`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
