import React from "react";
import CoreValuesSection from "@/module/About/CoreValuesSection";
import FullServicePrinterRentalStoreSection from "@/module/About/FullServicePrinterRentalStoreSection";
import MissionSection from "@/module/About/MissionSection";
import OurHistorySection from "@/module/About/OurHistorySection";
import PagesSection from "@/module/About/PagesSection";
import PrinterForRentSection from "@/module/About/PrinterForRentSection";
import SocialMediaSection from "@/module/About/SocialMediaSection";
import Vision from "@/module/About/VisionSection";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const About = () => {
  return (
    <div>
      <FullServicePrinterRentalStoreSection />
      <WidthWrapper width="medium" className="my-16">
        <div className="md:flex">
          <div className="flex-1">
            <OurHistorySection />
            <Vision />
            <MissionSection />
            <CoreValuesSection />
          </div>
          <div className="pt-4 space-y-4 mx-4 w-80">
            <PrinterForRentSection />
            <PagesSection />
            <SocialMediaSection />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default About;
