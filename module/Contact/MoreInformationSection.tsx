import { Typography } from "@/common/components/ui/Typography";
import React from "react";
import fb_logo from "@/public/facebook_logo.png"
import Image from "next/image";
import Link from "next/link";

const MoreInformationSection = () => {
  return (
    <div>
      <Typography variant="h1" fontWeight="semibold">
        More Information
      </Typography>
      <div className="border-secondary-800 w-[80px] py-2 mt-2 rounded-sm border-t-4"></div>
      <code className="font-sans md:whitespace-pre-wrap">
        {`We provide high-quality service from Printer Rental to Ink Refilling and
all of our big clients love the service that we provide to them because
that’s what our company is all about, providing world-class customer
service so that our client won’t leave us. So, what are you waiting for?
connect with us now!`}
      </code>

      <Typography variant="h2" fontWeight="semibold" className="mt-6 mb-2">
        Address:
      </Typography>
      <code className="font-sans md:whitespace-pre-wrap">
        {`2nd Floor, P.B. Zapanta Bldg, Rizal Ave.
Cor Cortez St., Taytay Rizal`}
      </code>
      <Typography variant="h2" fontWeight="semibold" className="mt-6 mb-2">
        Phone:
      </Typography>
      <code className="font-sans md:whitespace-pre-wrap">
        {`+63 969-217-8824 (Smart)
+63 917-308-4312 (Globe)
+63 917-309-9173 (Globe/Viber)`}
      </code>
      <Typography variant="h2" fontWeight="semibold" className="mt-6 mb-2">
        Email:
      </Typography>
      <code className="font-sans md:whitespace-pre-wrap">
        {`nath.printerrentalsph@gmail.com`}
      </code>
      <Typography variant="h2" fontWeight="semibold" className="mt-6 mb-4">
        Social Media:
      </Typography>
      <Link href='https://www.facebook.com/printer.rentals.ph.2024'>
      <Image src={fb_logo} alt="fb logo" width={50} height={50}/>
      
      </Link>
    </div>
  );
};

export default MoreInformationSection;
