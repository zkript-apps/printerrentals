import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import Printers from "@/module/Printers";
import Banner from "@/module/Printers/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Printers - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `Printers - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/printers/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Printers - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  },
};

const PrintersPage = () => {
  return (
    <>
      <Banner />
      <WidthWrapper width="medium">
        <Printers />
      </WidthWrapper>
      <Cta />
    </>
  );
};

export default PrintersPage;
