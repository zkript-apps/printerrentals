import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const WhatWeOffer = () => {
  return (
    <div className="">
      <WidthWrapper width="wide" className="">
        <HomeImageText img={"/what-we-offer-now.png"} isRightText={true} description={undefined}>
          <Typography variant="h1" fontWeight="semibold" className="mb-4">
            WHAT WE OFFER
          </Typography>
          <pre>
            {`We carry several brands and models of printers that you can 
select from, depending on your preference and business 
needs. You’ll be surprised to see how affordable each unit 
can actually be, knowing that it will already include the ink, 
toner, and other necessary accessories.

We offer Brother Inkjet, Brother Laserjet, and Epson Inkjet – 
all with a variety of models to choose from. Whether it is for 
your office receipts, manuals, business contracts, calling 
cards or anything else, these printers can surely 
accommodate your unique requirements.

Our printer repair services are tailored according to the 
specifications of the problems that the printer may entail. 
As long as the unit comes from us, trust us to provide excellent 
repair services, making sure that there will be no further 
delays in terms of your business operations. We aim to 
provide solutions and that is exactly what we will give you.

We also deliver ink and toner refill. Our people are highly 
knowledgeable when it comes to knowing which ink and 
toner to use for the unit, as well as the process of refilling 
that it entails. No more ink? No worries, because we are just 
a call away. Our inks and toners can accommodate a variety 
of printer models and we will also do the pleasure of refilling 
them for you. Literally, all you have to do is sit back and 
maybe have a cup of coffee or tea while we get on with what 
we do best.`}
          </pre>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default WhatWeOffer;