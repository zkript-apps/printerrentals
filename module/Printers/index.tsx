import React from "react";
import j100 from "@/common/assets/brother-j100.jpeg";
import j105 from "@/common/assets/brother-j105-600x600.jpeg";
import j200 from "@/common/assets/brother-j200-600x600.jpeg";
import j2330 from "@/common/assets/brother-j2330-600x600.jpeg";
import j2730 from "@/common/assets/brother-j2730-600x600.jpeg";
import j3530 from "@/common/assets/brother-j3530.jpeg";
import j3930 from "@/common/assets/brother-j3930-600x600.jpeg";
import l2365 from "@/common/assets/HLL2365DW-350x350.jpeg";
import l2540 from "@/common/assets/DCPL2540DW-600x600.jpeg";
import l2740 from "@/common/assets/DCPL2540DW-600x600.jpeg";
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

const brotherInkjet = [
  {
    image: j100,
    model: "DCP J100",
    pricePerMonth: "P 2,500.00 / Month",
  },
  {
    image: j105,
    model: "DCP J105w",
    pricePerMonth: "P 3,000.00 / Month",
  },
  {
    image: j200,
    model: "MFC J200",
    pricePerMonth: "P 3,500.00 / Month",
  },
  {
    image: j2330,
    model: "MFC J2330DW",
    pricePerMonth: "P 4,000.00 / Month",
  },
  {
    image: j2730,
    model: "MFC J2730DW",
    pricePerMonth: "P 5,000.00 / Month",
  },
  {
    image: j3530,
    model: "MFC J3530DW",
    pricePerMonth: "P 6,000.00 / Month",
  },
  {
    image: j3930,
    model: "MFC J3930DW",
    pricePerMonth: "P 7,000.00 / Month",
  },
];

const brotherLaserJet = [
  {
    image: l2365,
    model: "DCP L2540DW",
    pricePerMonth: "P 3,500.00 / Month",
  },
  {
    image: l2540,
    model: "HL L2365DW",
    pricePerMonth: "P 3,000 / Month",
  },
  {
    image: l2740,
    model: "MFC L2740DW",
    pricePerMonth: "P 4,500.00 / Month",
  },
];

const epsonInkJet = [
  {
    image: l120,
    model: "Epson L120 Ink Tank Printer",
    pricePerMonth: "P 1,500.00 / Month",
  },
  {
    image: l1300,
    model: "Epson L1300 A3 Ink Tank Printer",
    pricePerMonth: "P 5,000.00 / Month",
  },
  {
    image: l3110,
    model: "Epson EcoTank L3110 All-in-One Ink Tank Printer",
    pricePerMonth: "P 2,000.00 / Month",
  },
  {
    image: l3150,
    model: "Epson EcoTank L3150 Wi-Fi All-in-One Ink Tank Printer",
    pricePerMonth: "P 2,500.00 / Month",
  },
  {
    image: l5190,
    model: "Epson L5190 Wi-Fi All-in-One Ink Tank Printer with ADF",
    pricePerMonth: "P 3,500.00 / Month",
  },
  {
    image: l6170,
    model: "Epson L6170 Wi-Fi Duplex All-in-One Ink Tank Printer with ADF",
    pricePerMonth: "P 4,000.00 / Month",
  },
  {
    image: wf7711,
    model: "Epson WorkForce WF-7711 A3 Wi-Fi Duplex All-in-One Inkjet Printer",
    pricePerMonth: "P 4,000.00 / Month",
  },
  {
    image: l1455,
    model: "Epson L1455 A3 Wi-Fi Duplex All-in-One Ink Tank Printer",
    pricePerMonth: "P 10,000.00 / Month",
  },
];

const Printers = () => {
  return (
    <WidthWrapper width="full">
      <div className="w-full h-64 relative overflow-hidden block z-10 bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-blue-900 before:to-yellow-500 before:opacity-75 before:z-[-5]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Typography className="text-white text-4xl">PRINTERS</Typography>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 mb-5">
          <Typography variant="h1" className="text-3xl font-bold mb-1">
            BROTHER INKJET
          </Typography>
          <div className="bg-secondary-600 w-36 pt-1.5 rounded-lg mb-5"></div>
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brotherInkjet.map((printer) => (
              <div
                key={printer.model}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  alt={printer.model}
                  src={printer.image}
                  width={350}
                  height={350}
                />
                <div className="text-left w-full max-w-[350px]">
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    className="text-secondary-800 mb-2"
                  >
                    {printer.model}
                  </Typography>
                  <Typography variant="h2" fontWeight="bold" className="mb-2">
                    {printer.pricePerMonth}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 mb-5">
          <Typography variant="h1" className="text-3xl font-bold mb-1">
            BROTHER LASERJET
          </Typography>
          <div className="bg-secondary-600 w-36 pt-1.5 rounded-lg mb-5"></div>
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brotherLaserJet.map((printer) => (
              <div
                key={printer.model}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  alt={printer.model}
                  src={printer.image}
                  width={350}
                  height={350}
                />
                <div className="text-left w-full max-w-[350px]">
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    className="text-secondary-800 mb-2"
                  >
                    {printer.model}
                  </Typography>
                  <Typography variant="h2" fontWeight="bold" className="mb-2">
                    {printer.pricePerMonth}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 mb-5">
          <Typography variant="h1" className="text-3xl font-bold mb-1">
            EPSON INKJET
          </Typography>
          <div className="bg-secondary-600 w-36 pt-1.5 rounded-lg mb-5"></div>
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {epsonInkJet.map((printer) => (
              <div
                key={printer.model}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  alt={printer.model}
                  src={printer.image}
                  width={350}
                  height={350}
                />
                <div className="text-left w-full max-w-[350px]">
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    className="text-secondary-800 mb-2"
                  >
                    {printer.model}
                  </Typography>
                  <Typography variant="h2" fontWeight="bold" className="mb-2">
                    {printer.pricePerMonth}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Printers;
