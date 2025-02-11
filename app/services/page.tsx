import Services from "@/components/servicesPage/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felsunny Technology | Services",
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

export default function ServicesPage() {
  return <Services />;
}
