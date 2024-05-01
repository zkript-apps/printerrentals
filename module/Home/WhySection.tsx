import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const WhySection = ({ animationVariant }: ImageAnimationProps) => {
  return (
    <div id="whyRentPrinter" className="bg-light-700">
      <WidthWrapper width="wide" className="">
        <HomeImageText
          animationVariant={animationVariant}
          img={"/whyrentimage.png"}
          description={undefined}
        >
          <Typography variant="h1" fontWeight="semibold" className="mb-4">
            WHY RENT PRINTER?
          </Typography>
          <p className="font-sans md:whitespace-pre-wrap">
            {`Do you want to know why printer rental saves you a lot of money?
Because the maintenance of all the printers that you rent, the toner
and broken parts will be supplied to you, because it is included to
the package that you will pick. When you think something is not
right in the printer, you can call us and we will immediately
response with your concern.
    Yes, we will go to your place to fix it so you do not need to bring
the printers in our office. Therefore, you can relax and let us do
the work. However, if the printer does not fix immediately, we will
provide you a temporary replacement so your day-to-day operations will not be interrupted. Sound good right? Contact us now!`}
          </p>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default WhySection;
