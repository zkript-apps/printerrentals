import React from "react";
import l120 from "@/common/assets/L120-150x150.png";
import l1300 from "@/common/assets/L1300-150x150.png";
import l3110 from "@/common/assets/L3110-150x150.png";
import l3150 from "@/common/assets/L3150-150x150.png";
import l5190 from "@/common/assets/L5190-150x150.png";
import l6170 from "@/common/assets/L6170-150x150.png";
import wf7711 from "@/common/assets/WF711-150x150.png";
import l1455 from "@/common/assets/L1455-150x150.png";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import Image from "next/image";
import { Typography } from "@/common/components/ui/Typography";
import Banner from "./Banner";
import Cta from "@/common/components/Layout/Cta";
import { printers } from "./printersData";
import Link from "next/link";
import ItemContainer from "./ItemContainer";

const Printers = () => {
  const brotherInkjet = printers.filter(
    (printer) => printer.type === "Brother Inkjet"
  );

  const brotherLaserjet = printers.filter(
    (printer) => printer.type === "Brother Laserjet"
  );

  const epsonInkjet = printers.filter(
    (printer) => printer.type === "Epson Inkjet"
  );

  return (
    <div className="flex flex-col max-w-[1140px] mx-4 md:mx-10 2xl:mx-auto mt-20">
      <Typography variant="h1" className="text-[28px] font-bold mb-1 uppercase">
        Brother Inkjet
      </Typography>
      <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {brotherInkjet.map((printer) => (
          <ItemContainer
            id={printer.id}
            image={printer.image}
            model={printer.model}
            pricePerMonth={printer.pricePerMonth}
            key={printer.model}
          />
        ))}
      </div>
      <Typography
        variant="h1"
        className="text-[28px] font-bold mb-1 uppercase mt-28"
      >
        Brother Laserjet
      </Typography>
      <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {brotherLaserjet.map((printer) => (
          <ItemContainer
            id={printer.id}
            image={printer.image}
            model={printer.model}
            pricePerMonth={printer.pricePerMonth}
            key={printer.model}
          />
        ))}
      </div>
      <Typography
        variant="h1"
        className="text-[28px] font-bold mb-1 uppercase mt-28"
      >
        Epson Inkjet
      </Typography>
      <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {epsonInkjet.map((printer) => (
          <ItemContainer
            id={printer.id}
            image={printer.image}
            model={printer.model}
            pricePerMonth={printer.pricePerMonth}
            key={printer.model}
          />
        ))}
      </div>
    </div>
  );
};

export default Printers;
