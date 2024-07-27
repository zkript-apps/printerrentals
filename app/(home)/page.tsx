import Cta from "@/common/components/Layout/Cta";
import FeatureSection from "@/module/Home/Feature";
import Hero from "@/module/Home/Hero";
import { APP_NAME } from "@/common/constants";
import BuyingVsRenting from "@/module/Home/BuyingVsRenting";
import ClientsSection from "@/module/Home/ClientsSection";
import ReasonSection from "@/module/Home/ReasonSection";
import ReliableSection from "@/module/Home/ReliableSection";
import WhatWeOffer from "@/module/Home/WhatWeOffer";
import WhoWeAreSection from "@/module/Home/WhoWeAreSection";
import WhySection from "@/module/Home/WhySection";
import WhyUsSection from "@/module/Home/WhyUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  description:
    "We are the one of the most reliable rental source of printer in the Philippines. We offer Printer Rental, Printer Repair and Ink and Toner Refill...",
  openGraph: {
    title: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    description:
      "We are the one of the most reliable rental source of printer in the Philippines. We offer Printer Rental, Printer Repair and Ink and Toner Refill...",
    url: "https://printerrentalsph.com/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    description:
      "We are the one of the most reliable rental source of printer in the Philippines. We offer Printer Rental, Printer Repair and Ink and Toner Refill...",
    images: "/epson-300x66.png",
  },
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureSection animationVariant="fade-up" />
      <WhySection animationVariant="fade-right" />
      <ReasonSection animationVariant="fade-up" />
      <ReliableSection animationVariant="fade" />
      <BuyingVsRenting animationVariant="fade-up" />
      <WhoWeAreSection animationVariant="fade-right" />
      <WhatWeOffer animationVariant="fade-up" />
      <WhyUsSection animationVariant="fade-right" />
      <ClientsSection />
      <Cta />
    </div>
  );
};

export default HomePage;
