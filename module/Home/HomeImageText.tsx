import React, { Children, ReactNode } from "react";
import { Typography } from "../../common/components/ui/Typography";
import { ReactLoadableManifest } from "next/dist/server/load-components";

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
    <div>
      <div
        className={`md:flex  gap-4 p-6 ${isRightText ? "flex-row-reverse" : ""}`}
      >
        <>
          <div className="md:w-1/2 md:p-14 md:pr-8">
            {children ? children : <p>{description}</p>}
          </div>
          <div className="flex justify-center md:w-1/2 md:p-14">
            <div className="w-100 h-100 rounded-lg md:pt-0 pt-8">
              <img src={img} alt="Test" className="w-100 h-100 rounded-lg animate-fade" />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default HomeImageText;
