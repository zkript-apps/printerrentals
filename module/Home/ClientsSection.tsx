import FadeInImage from "@/common/components/FadeInImage";
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";
import React from "react";

const ClientsSection = () => {
  return (
    <div className="text-center mt-20 mx-6 md:mx-10 lg:mx-0">
      <Typography variant="h2" fontWeight="semibold">
        SOME OF OUR SATISFIED CLIENTS
      </Typography>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mt-8">
        <FadeInImage
          img="/ampc.png"
          className="w-48 md:w-auto"
          alt="ampc logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/fiberhome.png"
          className="w-48 md:w-auto"
          alt="fiber logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/banko.png"
          className="w-48 md:w-auto"
          alt="banko logo"
          width={300}
          height={300}
          variant="fade-up"
        />
      </div>
    </div>
  );
};

export default ClientsSection;
