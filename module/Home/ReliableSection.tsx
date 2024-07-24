import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const ReliableSection = ({ animationVariant }: ImageAnimationProps) => {
  return (
    <div className="bg-light-700 ">
      <WidthWrapper width="wide">
        <div className="max-w-[1216px] mx-4 2xl:mx-auto">
          <HomeImageText
            img={"/reliable-printer-rental.png"}
            description={undefined}
            animationVariant={animationVariant}
          >
            <Typography variant="h1" fontWeight="semibold" className="mb-4">
              RELIABLE PRINTER RENTAL - AND MORE
            </Typography>
            <code className="font-sans md:whitespace-pre-wrap">
              {`Ah, printing. At one point or another, every business comes across the necessity to print something – whether its contracts, flyers, and minutes of the meeting or just about anything that has to be in paper. Have you been looking for a reliable and cost-efficient way of printing all your office needs? If that’s a resounding yes that you’re answering, well then, you have come to the right place. 
            
Here in the Philippines, practicality is among the top priorities of all companies. This is why printer rental is a good idea, although it’s not a very common one, truth be told. But do you know that printer rental has its own fair share of benefits and advantages? And if you are able to pick a dependable company to rent your printers from, you’ll never even consider buying your own printers again.`}
            </code>
          </HomeImageText>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default ReliableSection;
