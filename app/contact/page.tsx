import Contact from "@/components/contactPage/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felsunny Technology | Contact Us",
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

export default function ContactPage() {
  return <Contact />;
}
