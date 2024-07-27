import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const WhyUsSection = ({ animationVariant }: ImageAnimationProps) => {
  return (
    <div className="bg-light-700">
      <WidthWrapper width="wide">
        <div className="max-w-[1216px] mx-4 2xl:mx-auto">
          <HomeImageText
            img={"/printer-rentals-ph.png"}
            animationVariant={animationVariant}
            description={undefined}
          >
            <Typography variant="h1" fontWeight="semibold" className="mb-4">
              WHY PRINTER RENTALS PH?
            </Typography>
            <code className="font-sans lg:whitespace-pre-wrap">
              {`Printing is a vital part of any business, and it’s our utmost pleasure to help you achieve the quality of printing that you want for your establishment. Why hire us? Aside from unmatched service quality, our packages also come with unlimited ink supply, which is good for your bulk printing needs. Plus, you also get to have free bond paper, and did we say free bond paper?

You sure have started to realize how printer rental is actually a better idea, business-wise. But for sure, you still have other questions, right? We’ll be more than willing to help! You may easily contact us through phone, email, or even via social media sites.

Printer Rentals PH is not just your average rental company. We do things differently, but the results are always what you’re expecting for as a client – or even more. Interested? Don’t hesitate to speak with us anytime. It’s high time you switch to printer rental, and you know what, there is no more perfect time than today. Let’s get printing and let’s get those paperwork done in no time at all.`}
            </code>
          </HomeImageText>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default WhyUsSection;
