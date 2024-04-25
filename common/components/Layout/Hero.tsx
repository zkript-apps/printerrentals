import React from "react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { LucideCircleChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className="w-full
            h-screen
            relative
            overflow-hidden
            block
            z-10
						
            bg-[url('/hero.jpg')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-blue-900
            before:to-yellow-500
            before:opacity-75
            before:z-[-5]"
      >
        <div className="flex flex-col items-center justify-center h-screen p-5 relative z-10">
          <Typography className="text-center text-white text-5xl">
            THE #1 PRINTER RENTAL <br /> IN THE PHILIPPINES
          </Typography>

          <Typography className="text-2xl text-white pt-12">
            We are the one of the most reliable rental source of{" "}
            <span>
              <strong>EPSON</strong>
            </span>{" "}
            and <strong>brother </strong>
            printer
          </Typography>
          <Link href="https://printerrentalsph.com/">
            <Button
              size="lg"
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-yellow-500 shadow mt-20"
            >
              <div className="absolute inset-0 bg-yellow-600 transition-all duration-[250ms] ease-out opacity-0 group-hover:opacity-100"></div>
              <span className="relative text-white text-md">
                VIEW OUR PRINTERS
              </span>
            </Button>
          </Link>

          <Typography className="text-lg text-white font-semibold mt-24">
            LEARN MORE
          </Typography>
          <LucideCircleChevronDown color="white" />
        </div>
      </div>
    </>
  );
};

export default Hero;
