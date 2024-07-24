import { Typography } from "@/common/components/ui/Typography";
import React from "react";
import printerrentalsLogo from "@/public/printerrentalsLogo.png";
import Image from "next/image";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const FullServicePrinterRentalStoreSection = () => {
  return (
    <div className="bg-secondary-800 py-12 md:px-0">
      <WidthWrapper width="medium">
        <div className="md:flex mx-4 md:mx-10 2xl:mx-auto">
          <div className="md:w-3/4 2xl:w-[1008px] md:pr-12">
            <Typography
              variant="h1"
              fontWeight="semibold"
              className="text-primary-800 mb-8"
            >
              FULL SERVICE PRINTER RENTAL STORE
            </Typography>
            <Typography variant="h3" className="text-primary-800">
              Bringing excellent services to our client is our number one goal.
              We are offering on-site maintenance, unlimited ink supply and free
              bond paper. That is the reason why renting a printer is a very
              convenient way to minimize your company expense and that’s why we
              are here to bring you that convenience you are looking for.
            </Typography>
          </div>
          <div className="flex-none pt-4">
            <Image
              src={printerrentalsLogo}
              alt="printer-rentals-logo"
              width={130}
              height={130}
              className="mx-auto"
            />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default FullServicePrinterRentalStoreSection;
