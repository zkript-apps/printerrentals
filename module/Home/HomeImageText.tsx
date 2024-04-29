import React from "react";
import Image from "next/image";

interface HomeImageTextProps {
  img: string;
  description: string | React.ReactNode;
  children?: React.ReactNode;
  isRightText?: boolean;
}

const HomeImageText: React.FC<HomeImageTextProps> = ({
  img,
  description,
  children,
  isRightText = false,
}) => {
  return (
    <div className={`md:flex p-6 ${isRightText ? "flex-row-reverse font-sans" : ""}`}>
      <div className="md:w-1/2 w-full md:p-14 md:pr-8">
        {children ? children : <p>{description}</p>}
      </div>
      <div className="flex justify-center md:p-14">
        <div className="w-full rounded-lg md:pt-0 pt-8">
          <div className="rounded-lg animate-fade">
            <Image
              src={img}
              width={500}
              height={500}
              alt="Page images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageText;
