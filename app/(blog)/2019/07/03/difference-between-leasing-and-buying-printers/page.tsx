import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import BlogContent from "@/module/Blog/One";
import Header from "@/module/Blog/One/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Difference Between Leasing and Buying Printers | ${APP_NAME}`,
  description:
    "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers...",
  openGraph: {
    title: `Difference Between Leasing and Buying Printers | ${APP_NAME}`,
    description:
      "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers...",
    url: "https://printerrentalsph.com/2019/07/03/difference-between-leasing-and-buying-printers/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/woman-question.jpeg",
        secureUrl: "https://printerrentalsph.com/woman-question.jpeg",
        width: 1024,
        height: 1024,
      },
    ],
    tags: ["Buying", "Leasing", "Printer Rental"],
    section: "Printer",
    publishedTime: "2019-07-03T05:06:28+00:00",
    modifiedTime: "2019-07-03T05:25:02+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: `Difference Between Leasing and Buying Printers | ${APP_NAME}`,
    description:
      "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers...",
    images: "/woman-question.jpeg",
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
