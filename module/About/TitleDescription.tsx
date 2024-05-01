import { Typography } from "@/common/components/ui/Typography";
import React, { ReactNode } from "react";

interface TitleDescriptionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TitleDescription = ({
  title,
  children,
  className,
}: TitleDescriptionProps) => {
  return (
    <div className={className}>
      <div className="flex mt-4"></div>
      <div className="md:mb-0 mb-4 mx-4">
        <Typography variant="h2" fontWeight="semibold">
          {title}
        </Typography>
      </div>
      <div className="mb-4 mx-4">
      {children}
      </div>

    </div>
  );
};

export default TitleDescription;
