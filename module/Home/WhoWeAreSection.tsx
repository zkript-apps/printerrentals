import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const WhoWeAreSection = ({ animationVariant }: ImageAnimationProps) => {
  return (
    <div className="bg-light-700">
      <WidthWrapper width="wide" className="">
        <HomeImageText
          img={"/who-we-are.png"}
          animationVariant={animationVariant}
          description={undefined}
        >
          <Typography variant="h1" fontWeight="semibold" className="mb-4">
            WHO WE ARE
          </Typography>
          <code className="font-sans md:whitespace-pre-wrap">
            {`Printer Rentals PH is a full servicer printer rental store that 
started back in 2004. Through the years of consistent hard 
work and the goal of providing excellent service to our 
customers, we have serviced more than 500 clients and 
counting. When it comes to quality printing and affordability, 
we remain to be one of the best choices, as trusted by major 
corporations and companies nationwide.

Here at Printer Rentals PH, we make sure that the demands 
of our clients are satisfactorily met while also committing to 
become the country’s leading printing solution company and 
provider. Our consultants are not only efficient, but also 
resourceful, creative, and highly focused on customer 
satisfaction and welfare. We know exactly what you need 
even before you ask for it – and we most certainly know how 
to make it happen. Above all, being a Christian company, we 
truly acknowledge that God is the true owner of the company 
and we are all on a mission to provide business solutions 
that are in accordance with the teachings of the Lord.`}
          </code>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default WhoWeAreSection;
