import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import CoreValuesSection from "@/module/About/CoreValuesSection";
import FullServicePrinterRentalStoreSection from "@/module/About/FullServicePrinterRentalStoreSection";
import MissionSection from "@/module/About/MissionSection";
import OurHistorySection from "@/module/About/OurHistorySection";
import PagesSection from "@/module/About/PagesSection";
import PrinterForRentSection from "@/module/About/PrinterForRentSection";
import SocialMediaSection from "@/module/About/SocialMediaSection";
import Vision from "@/module/About/VisionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `About - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/about/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `About - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  },
};

const AboutPage = () => {
  return (
    <>
      <FullServicePrinterRentalStoreSection />

      <WidthWrapper width="medium">
        <div className="md:flex pt-12 md:mx-6 max-w-[1174px] 2xl:mx-auto">
          <div className="md:max-w-[65%] lg:max-w-[75%]">
            <OurHistorySection />
            <Vision />
            <MissionSection />
            <CoreValuesSection />
          </div>
          <div className="pt-4 space-y-4 mx-12">
            <PrinterForRentSection />
            <PagesSection />
            <SocialMediaSection />
          </div>
        </div>
      </WidthWrapper>
    </>
  );
};

export default AboutPage;
