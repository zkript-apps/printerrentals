import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import Contact from "@/module/Contact";
import Banner from "@/module/Contact/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `Contact - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/contact/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
    images: "/facebook.png",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    images: "/facebook.png",
  },
};

const ContactPage = () => {
  return (
    <>
      <Banner />
      <WidthWrapper width="medium">
        <Contact />
      </WidthWrapper>
      <Cta />
    </>
  );
};

export default ContactPage;
