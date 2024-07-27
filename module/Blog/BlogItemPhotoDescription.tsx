"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";

interface BlogItem {
  imageKey: string;
  title: string;
  titleLink: string;
  buttonLink: string;
  description: string;
  iconDescription: {
    icon: JSX.Element;
    description:
      | string
      | { title: string; link: string }
      | { title: string; link: string }[];
  }[];
}

interface BlogItemProps {
  blogItem: BlogItem;
}

const BlogItemComponent: React.FC<BlogItemProps> = ({ blogItem }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const renderDescription = () => {
    const maxLength = 150;
    const { description } = blogItem;

    if (description.length <= maxLength || showFullDescription) {
      return (
        <Typography variant="h2" className="mt-4">
          {description}
        </Typography>
      );
    }

    const truncatedDescription = `${description.slice(0, maxLength)}...`;

    return (
      <>
        <Typography variant="h2" className="mt-2 md:mt-4">
          {truncatedDescription}
        </Typography>
        <Link href={blogItem.buttonLink}>
          <Button size="lg" variant="outline" className="mt-6 mb-8 md:my-8">
            <Typography variant="h2">
              {showFullDescription ? "Show less" : "Show more"}
            </Typography>
          </Button>
        </Link>
      </>
    );
  };

  return (
    <div className="blog-item">
      <Image
        src={blogItem.imageKey}
        width={900}
        height={900}
        alt={blogItem.title}
        className="blog-image"
      />
      <div className="mt-4">
        <Link href={blogItem.titleLink}>
          <Typography className="hover:text-yellow-400 transition ease-in duration-300 text-[24px] font-medium">
            {blogItem.title}
          </Typography>
        </Link>

        <div className="text-gray-600 md:flex md:flex-wrap md:gap-x-6 md:gap-y-2 lg:gap-6 items-center mt-2 md:mt-4">
          {blogItem.iconDescription.map((iconDesc, index) => (
            <div key={index} className="flex gap-2 items-center">
              {iconDesc.icon}
              {typeof iconDesc.description === "string" ? (
                <Typography className="text-lg md:text-xl">
                  {iconDesc.description}
                </Typography>
              ) : Array.isArray(iconDesc.description) ? (
                iconDesc.description.map((tag, idx, arr) => (
                  <Link key={idx} href={tag.link}>
                    <Typography>
                      <span className="hover:text-yellow-400 transition ease-in duration-300 text-lg md:text-xl">
                        {tag.title}
                      </span>
                      {idx != arr.length - 1 ? "," : ""}
                    </Typography>
                  </Link>
                ))
              ) : (
                <Link href={iconDesc.description.link}>
                  <Typography className="hover:text-yellow-400 transition ease-in-out text-lg md:text-xl">
                    {iconDesc.description.title}
                  </Typography>
                </Link>
              )}
            </div>
          ))}
        </div>

        {renderDescription()}
      </div>
    </div>
  );
};

export default BlogItemComponent;
