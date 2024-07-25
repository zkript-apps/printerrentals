import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import BlogContent from "@/module/Blog/Two";
import Header from "@/module/Blog/Two/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `What are the Benefits of Renting a Printer? | ${APP_NAME}`,
  description:
    "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a...",
  openGraph: {
    title: `What are the Benefits of Renting a Printer? | ${APP_NAME}`,
    description:
      "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a...",
    url: "https://printerrentalsph.com/2019/07/03/benefits-of-renting-a-printer/",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/hand-okay.png",
        secureUrl: "https://printerrentalsph.com/hand-okay.png",
        width: 1024,
        height: 1024,
      },
    ],
    tags: ["Benefits", "Printer Rental"],
    section: "Printer",
    publishedTime: "2019-07-03T02:04:10+00:00",
    modifiedTime: "2019-07-03T02:10:55+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: `What are the Benefits of Renting a Printer? | ${APP_NAME}`,
    description:
      "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a...",
    images: "/hand-okay.png",
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
