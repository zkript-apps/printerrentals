import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const BuyingVsRenting = () => {
  return (
    <div className="bg-gray-100">
      <WidthWrapper width="wide" className="">
        <HomeImageText
          img={"/buying-and-renting.png"}
          isRightText={true}
          description={undefined}
        >
          <Typography variant="h1" fontWeight="semibold" className="mb-4">
            BUYING VS. RENTING
          </Typography>
          <pre>
            {`At first glance, you might think that buying printers would be
more practical for your company. Well, this is a common 
misconception among startup businesses. In the hope of 
saving more, they think that it’s more economical to also 
shell out more for their operations. But what if this is not the 
case when it comes to printers? Do you know that it would 
be more cost-efficient to just rent our printers instead?


The first reason to consider renting is the maintenance of all 
the units. Upon rental, you will be offered with packages and 
these packages also come with free maintenance. This 
means that the unit you are renting, as well as the broken 
parts and toners, will be supplied since all of these are 
already included in your chosen package. The convenience is 
obviously unmatched since you no longer have to think 
about your cartridges, toners, and inks.`}
          </pre>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default BuyingVsRenting;