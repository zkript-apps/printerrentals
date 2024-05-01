import React from "react";
import HomeImageText from "./HomeImageText";
import { Typography } from "@/common/components/ui/Typography";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { LucideSquareCheck } from "lucide-react";

const checkItems = [
  {
    icon: <LucideSquareCheck />,
    label: "Unlimited Ink Supply",
  },
  {
    icon: <LucideSquareCheck />,
    label: "On-site Maintenance",
  },
  {
    icon: <LucideSquareCheck />,
    label: "Free Bond Paper",
  },
  {
    icon: <LucideSquareCheck />,
    label: "Rent 5 Get 1 Free Printer",
  },
];

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}


const ReasonSection = ({animationVariant}: ImageAnimationProps) => {
  return (
    <div>
      <WidthWrapper width="wide" className="">
        <HomeImageText
          img={"/reasonImage.jpg"}
          isRightText={true}
          description={undefined}
          animationVariant={animationVariant}
        >
          <Typography variant="h1" fontWeight="semibold" className="pb-4 pt-4">
            A FEW REASONS WHY YOU MIGHT WANT TO DO BUSINESS WITH US
          </Typography>
          {checkItems.map((items) => (
            <>
              <div>
                <ul>
                  <li>
                    <div className="flex items-center gap-2 pb-2">
                      <LucideSquareCheck color="#FFA500" />
                      {items.label}
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ))}

          <Typography variant="h1" fontWeight="semibold" className="pb-4 pt-4">
            HOW MUCH DOES IT COST TO RENT A PRINTER?
          </Typography>
          <p>
            We can help you with your question. Avoiding hassle is one of the
            major reasons why companies rent printers. So, we choose to have a
            business that offers a very good services for renting a printer
            that’s why a lot of our clients are happy with our service.{" "}
            <span className="font-semibold underline underline-offset-2 hover:cursor-pointer">
              Read More
            </span>
          </p>
        </HomeImageText>
      </WidthWrapper>
    </div>
  );
};

export default ReasonSection;
