import React from "react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-4  md:place-items-center bg-sky-900 flex flex-col h-52 p-4 ">
        <div className="text-center mx-auto">
          <Typography
            fontWeight="semibold"
            variant="h3"
            className="text-white md:pb-0 md:pt-0 pt-4 pb-4 text-sm md:pl-8"
          >
            CALL US NOW! <br/> <br/>
            <span className="text-xl align-items-center"> (02) 7354 1271</span>
          </Typography>
        </div>

        <div className="text-center md:mt-0 md:pr-8">
          <Link href="https://printerrentalsph.com/">
            <Button size="lg" className="bg-yellow-400">
              {" "}
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cta;
