import { Typography } from "@/common/components/ui/Typography";
import React from "react";

const ClientsSection = () => {
  return (
    <div className="text-center align-items-center space-y-12 md:mx-20">
      <Typography variant="h2" fontWeight="semibold">
        SOME OF OUR SATISFIED CLIENTS
      </Typography>
      <div className="md:flex justify-center gap-6 space-y-4 mx-auto">
        <img src="/ampc.png" className="md:w-1/3 max-w-xs h-28 mx-auto my-auto" alt="ampc logo" />
        <img
          src="/fiberhome.png"
          className="md:w-1/3 max-w-xs h-30 mx-auto pb-6"
          alt="fiber logo"
        />
        <img src="/banko.png" className="md:w-1/3 max-w-xs h-28 mx-auto pt-2" alt="banko logo" />
      </div>
    </div>
  );
};

export default ClientsSection;
