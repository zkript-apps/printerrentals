"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/common/components/ui/Button';
import { Typography } from '@/common/components/ui/Typography';

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
        <Typography variant="h2" className="mt-4">
          {truncatedDescription}
        </Typography>
        <Link href={blogItem.buttonLink}>
         <Button
          size="lg"
          variant="outline"
          className="my-8"
        >
            <Typography variant='h2'>
                  {showFullDescription ? 'Show less' : 'Show more'}
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
        width={1000}
        height={1000}
        alt={blogItem.title}
        className="blog-image"
      />
      <div className="mt-4">
        <Link href={blogItem.titleLink}>
          <Typography
            variant="h2"
            fontWeight="semibold"
            className="hover:text-yellow-400 transition ease-in duration-300"
          >
            {blogItem.title}
          </Typography>
        </Link>

        <div className="text-gray-600 md:flex gap-6 items-center mt-4">
          {blogItem.iconDescription.map((iconDesc, index) => (
            <div key={index} className="flex gap-2 items-center">
              {iconDesc.icon}
              {typeof iconDesc.description === 'string' ? (
                <Typography variant="h2">{iconDesc.description}</Typography>
              ) : Array.isArray(iconDesc.description) ? (
                iconDesc.description.map((tag, idx) => (
                  <Link key={idx} href={tag.link}>
                    <Typography
                      variant="h2"
                      className="hover:text-yellow-400 transition ease-in duration-300"
                    >
                      {tag.title}
                    </Typography>
                  </Link>
                ))
              ) : (
                <Link href={iconDesc.description.link}>
                  <Typography
                    variant="h2"
                    className="hover:text-yellow-400 transition ease-in-out"
                  >
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
