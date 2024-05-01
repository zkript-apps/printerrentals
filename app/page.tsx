import Cta from "@/module/Home/Cta";
import FeatureSection from "@/module/Home/Feature";
import Hero from "@/common/components/Layout/Hero";
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
  title: `Home - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
};

const HomePage = () => {
  return  (
    <div>
      <Hero />
      <FeatureSection animationVariant='fade-up'/>
      <WhySection animationVariant="fade-right"/>
      <ReasonSection animationVariant="fade-up"/>
      <ReliableSection animationVariant="fade"/>
      <BuyingVsRenting animationVariant="fade-up"/>
      <WhoWeAreSection animationVariant="fade-right"/>
      <WhatWeOffer animationVariant="fade-up"/>
      <WhyUsSection animationVariant="fade-right"/>
      <ClientsSection/>
      <Cta/>
    </div>

  ) 
};

export default HomePage;
