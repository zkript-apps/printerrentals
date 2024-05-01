import Image from "next/image";
import ink_logo from "@/common/assets/ink-logo.png";
import repair_logo from "@/common/assets/repair-logo.png";
import printer_logo from "@/common/assets/printer-logo.png";
import { Typography } from "../../common/components/ui/Typography";
import FadeInImage from "../../common/components/FadeInImage";

const featureData = [
  {
    title: "PRINTER RENTAL",
    description:
      "We offer the best quality printer to suits your needs and it includes quality customer service.",
    image: printer_logo,
    alt: "PRINTER-LOGO",
  },
  {
    title: "PRINTER REPAIR",
    description:
      "Analyzing the problem of the printer that we provide to give your problems tailor-made solutions.",
    image: repair_logo,
    alt: "REPAIR-LOGO",
  },
  {
    title: "INK AND TONER REFILL",
    description:
      "We specialize in solving your ink problem and make sure you will not having problems with it, at all.",
    image: ink_logo,
    alt: "INK-LOGO",
  },
];

interface ImageAnimationProps {
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const FeatureSection = ({ animationVariant }: ImageAnimationProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 p-5 pt-20 pb-20">
      {featureData.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center justify-center text-center w-full sm:w-1/4"
        >
          <div className="mb-5">
            <FadeInImage
              img={item.image}
              width={120}
              height={120}
              alt={item.alt}
              variant={animationVariant}
            />
          </div>
          <Typography variant="h3" fontWeight="semibold" className="mb-5">
            {item.title}
          </Typography>
          <Typography variant="h2">{item.description}</Typography>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
