import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const WhyUsSection = () => {
  return (
    <div className="bg-gray-100">
      <WidthWrapper width="wide" className="">
        <HomeImageText img={"/printer-rentals-ph.png"} description={undefined}>
          <Typography variant="h1" fontWeight="semibold" className="mb-4">
            WHY PRINTER RENTALS PH?
          </Typography>
          <pre>
            {`Printing is a vital part of any business, and it’s our utmost 
pleasure to help you achieve the quality of printing that you 
want for your establishment. Why hire us? Aside from 
unmatched service quality, our packages also come with 
unlimited ink supply, which is good for your bulk printing 
needs. Plus, you also get to have free bond paper, and did we 
say free bond paper?

You sure have started to realize how printer rental is actually 
a better idea, business-wise. But for sure, you still have other 
questions, right? We’ll be more than willing to help! You may 
easily contact us through phone, email, or even via social 
media sites.

Printer Rentals PH is not just your average rental company. 
We do things differently, but the results are always what 
you’re expecting for as a client – or even more. Interested? 
Don’t hesitate to speak with us anytime. It’s high time you 
switch to printer rental, and you know what, there is no more 
perfect time than today. Let’s get printing and let’s get those 
paperwork done in no time at all.`}
          </pre>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default WhyUsSection;