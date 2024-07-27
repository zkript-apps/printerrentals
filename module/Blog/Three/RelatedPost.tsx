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
      description: "July 3, 2019",
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

const blogItem2 = {
  imageKey: "/hand-okay.png",
  title: "What are the Benefits of Renting a Printer? | Printer Rentals PH",
  titleLink: "/benefits-of-renting-a-printer",
  buttonLink: "/benefits-of-renting-a-printer",
  description:
    "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a wide variety of choices. Some printers are for personal or home use which is utilized to print simple documents such as to-do lists, travel itineraries, and shopping lists. On the other hand, there are types of printers used for commercial settings. These are larger printers used to print a bigger batch of documents. Whether you need a digital press or work group laser printer, renting a unit can offer a wide variety of benefits for your business. Renting instead of investing for your own unit acts as a great method of improving cash flow and provide a device to maintain a competitive advantage over your direct competitors in the industry.",
  iconDescription: [
    {
      icon: <LucideClock size={20} />,
      description: "July 3, 2019",
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
        { title: "Benefits", link: "/tag/benefits" },
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
        <BlogItemComponent blogItem={blogItem2} />
      </div>
    </div>
  );
};

export default RelatedPost;
