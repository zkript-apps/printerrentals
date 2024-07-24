import React from "react";
import TitleDescriptionLink from "@/common/components/PrinterForRent";
import { LucideClock, LucideFolderOpen, LucideTag } from "lucide-react";
import BlogItemComponent from "./BlogItemPhotoDescription";

const items = [
  { item: "Brother InkJet", link: "/item1" },
  { item: "Brother LaserJet", link: "/item2" },
  { item: "Epson InkJet", link: "/item3" },
];
const pages = [
  { item: "Home", link: "/home" },
  { item: "Printers", link: "/printers" },
  { item: "About", link: "/about" },
  { item: "Blog", link: "/blog" },
  { item: "Contact", link: "/contact" },
];
const socMed = [
  { item: "Facebook", link: "/facebook.com" },
  { item: "Twitter", link: "/twitter.com" },
  { item: "Instagram", link: "/instagram.com" },
];

const blogItems = [
  {
    imageKey: "/woman-question.jpeg",
    title:
      "Difference Between Leasing and Buying Printers | Printer Rentals PH",
    titleLink: "/difference-between-leasing-and-buying-of-printers",
    buttonLink: "/difference-between-leasing-and-buying-of-printers",
    description:
      "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers. A small business will go through a…",
    iconDescription: [
      {
        icon: <LucideClock size={20} />,
        description: "June 28, 2024",
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
  },
  {
    imageKey: "/hand-okay.png",
    title: "What are the Benefits of Renting a Printer? | Printer Rentals PH",
    titleLink: "/benefits-of-renting-a-printer",
    buttonLink: "/benefits-of-renting-a-printer",
    description:
      "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a wide variety of choices. Some printers are for personal or home use which is utilized to print simple documents such as to-do lists, travel itineraries, and shopping lists. On the other hand, there are types of printers used for commercial settings. These are larger printers used to print a bigger batch of documents. Whether you need a digital press or work group laser printer, renting a unit can offer a wide variety of benefits for your business. Renting instead of investing for your own unit acts as a great method of improving cash flow and provide a device to maintain a competitive advantage over your direct competitors in the industry.",
    iconDescription: [
      {
        icon: <LucideClock size={20} />,
        description: "June 28, 2024",
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
  },
  {
    imageKey: "/paper-printer.jpeg",
    title: "How much does it cost to rent a printer? | Printer Rentals PH",
    titleLink: "/benefits-of-renting-a-printer",
    buttonLink: "/benefits-of-renting-a-printer",
    description:
      "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers. So, Printer…",
    iconDescription: [
      {
        icon: <LucideClock size={20} />,
        description: "June 28, 2024",
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
  },
];

const printerTitle = "Printer for Rent";
const pagesTitle = "Pages";
const socMedTitle = "Social Media";

const index = () => {
  return (
    <div className="max-w-[1140px] mx-4 md:mx-10 2xl:mx-auto 2xl:-translate-x-[78px] mt-10 md:mt-14 lg:mt-20">
      <div className="sm:flex w-full items-start gap-16">
        <div className="w-full md:w-2/3 lg:w-[740px]">
          {blogItems.map((index, key) => (
            <BlogItemComponent blogItem={index} key={key} />
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <TitleDescriptionLink itemLinks={items} title={printerTitle} />
          </div>
          <div>
            <TitleDescriptionLink itemLinks={pages} title={pagesTitle} />
          </div>
          <div>
            <TitleDescriptionLink itemLinks={socMed} title={socMedTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
