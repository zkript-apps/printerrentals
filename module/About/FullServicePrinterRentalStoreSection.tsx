import { Typography } from "@/common/components/ui/Typography";
import React from "react";
import printerrentalsLogo from "@/public/printerrentalsLogo.png";
import Image from "next/image";
import { WidthWrapper } from "@/common/components/WidthWrapper";

const FullServicePrinterRentalStoreSection = () => {
  return (
    <div className="bg-secondary-800 py-4 md:py-12 md:px-0">
      <WidthWrapper width="medium">
        <div className="md:flex md:gap-12">
          <div className="md:flex-1">
            <Typography
              variant="h1"
              fontWeight="semibold"
              className="text-primary-800 mb-8"
            >
              FULL SERVICE PRINTER RENTAL STORE
            </Typography>
            <Typography variant="h3" className="text-primary-800">
              Bringing excellent services to our client is our number one goal. We
              are offering on-site maintenance, unlimited ink supply and free bond
              paper. That is the reason why renting a printer is a very convenient
              way to minimize your company expense and that’s why we are here to
              bring you that convenience you are looking for.
            </Typography>
          </div>
          <div className="flex-none md:px-28">
            <Image
              src={printerrentalsLogo}
              alt="printer-rentals-logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        </div>
      </WidthWrapper>

    </div>

  );
};

export default FullServicePrinterRentalStoreSection;
