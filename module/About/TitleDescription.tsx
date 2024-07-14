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
      <div className="flex"></div>
      <div>
        <Typography variant="h2" fontWeight="semibold">
          {title}
        </Typography>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default TitleDescription;
