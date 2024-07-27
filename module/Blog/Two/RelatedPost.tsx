import { Typography } from "@/common/components/ui/Typography";
import BlogItemComponent from "../BlogItemPhotoDescription";
import { LucideClock, LucideFolderOpen, LucideTag } from "lucide-react";

const blogItem = {
  imageKey: "/woman-question.jpeg",
  title: "Difference Between Leasing and Buying Printers | Printer Rentals PH",
  titleLink: "/difference-between-leasing-and-buying-of-printers",
  buttonLink: "/difference-between-leasing-and-buying-of-printers",
  description:
    "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers. A small business will go through a…",
  iconDescription: [
    {
      icon: <LucideClock size={20} />,
      description: "June 3, 2019",
    },
    {
      icon: <LucideFolderOpen size={20} />,
      description: {
        title: "Printer",
        link: "/category/printer",
      },
    },
    {
      icon: <LucideTag size={20} />,
      description: [
        { title: "Buying", link: "/tag/buying" },
        { title: "Leasing", link: "/tag/leasing" },
        { title: "Printer Rental", link: "/tag/printer-rental" },
      ],
    },
  ],
};

const blogItem3 = {
  imageKey: "/paper-printer.jpeg",
  title: "How much does it cost to rent a printer? | Printer Rentals PH",
  titleLink: "/benefits-of-renting-a-printer",
  buttonLink: "/benefits-of-renting-a-printer",
  description:
    "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers. So, Printer…",
  iconDescription: [
    {
      icon: <LucideClock size={20} />,
      description: "February 17, 2019",
    },
    {
      icon: <LucideFolderOpen size={20} />,
      description: {
        title: "Printer",
        link: "/category/printer",
      },
    },
    {
      icon: <LucideTag size={20} />,
      description: [
        { title: "Cost", link: "/tag/cost" },
        { title: "Printer Rental", link: "/tag/printer-rental" },
      ],
    },
  ],
};

const RelatedPost = () => {
  return (
    <div>
      <Typography className="text-[22px] md:text-2xl">Related Posts</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <BlogItemComponent blogItem={blogItem} />
        <BlogItemComponent blogItem={blogItem3} />
      </div>
    </div>
  );
};

export default RelatedPost;
