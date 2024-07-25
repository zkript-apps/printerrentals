import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import BlogContent from "@/module/Blog/Three";
import Header from "@/module/Blog/Three/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `How much does it cost to rent a printer? | ${APP_NAME}`,
  description:
    "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers...",
  openGraph: {
    title: `How much does it cost to rent a printer? | ${APP_NAME}`,
    description:
      "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers...",
    url: "https://printerrentalsph.com/2019/02/17/cost-rent-printer/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/paper-printer.jpeg",
        secureUrl: "https://printerrentalsph.com/paper-printer.jpeg",
        width: 1024,
        height: 1024,
      },
    ],
    tags: ["Cost", "Printer Rental"],
    section: "Printer",
    publishedTime: "2019-02-17T03:01:25+00:00",
    modifiedTime: "2019-02-17T13:25:53+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: `How much does it cost to rent a printer? | ${APP_NAME}`,
    description:
      "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers...",
    images: "/paper-printer.jpeg",
  },
};

const BlogContentPage = () => {
  return (
    <div>
      <Header />
      <WidthWrapper width="medium">
        <BlogContent />
      </WidthWrapper>
    </div>
  );
};

export default BlogContentPage;
