import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import Blog from "@/module/Blog";
import Banner from "@/module/Blog/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `Blog - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/blog/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  },
};

const BlogPage = () => {
  return (
    <div>
      <Banner />
      <WidthWrapper width="medium">
        <Blog />
      </WidthWrapper>
      <Cta />
    </div>
  );
};

export default BlogPage;
