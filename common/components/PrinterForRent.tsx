import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";
import React from "react";

interface itemLinks {
  item: string;
  link: string;
}

interface ItemLinkProps {
  itemLinks: itemLinks[];
  title: string;
}

const TitleDescriptionLink = ({ itemLinks, title }: ItemLinkProps) => {
  return (
    <div>
      <Typography variant="h1" fontWeight="semibold">
        {title}
      </Typography>
      <div className="border-yellow-500 w-[60px] py-2 mt-2 rounded-sm border-t-4"></div>
      {itemLinks.map((items, index) => (
        <div key={index}>
          <ul className="text-primary-800">
            <Link href={items.link}>
              <li className="hover:text-secondary-800 transition-colors duration-200 hover:cursor-pointer">
                <Typography variant='h2'>
                    {items.item}
                </Typography>
                
              </li>
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TitleDescriptionLink;