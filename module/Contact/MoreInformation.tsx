import { Typography } from "@/common/components/ui/Typography";
import { Facebook } from "lucide-react";
import Link from "next/link";

const MoreInformation = () => {
  return (
    <div>
      <Typography variant="h1" fontWeight="bold">
        More Information
      </Typography>
      <div className="border-yellow-500 w-[80px] pt-2 rounded-sm border-t-4 mt-1"></div>
      <Typography variant="h2" className="mt-4 text-[#333] mb-6">
        We provide high-quality service from Printer Rental to Ink Refilling and
        all of our big clients love the service that we provide to them because
        that’s what our company is all about, providing world-class customer
        service so that our client won’t leave us. So, what are you waiting for?
        connect with us now!
      </Typography>
      <Typography variant="h2" fontWeight="bold" className="text-[#333]">
        Address:
      </Typography>
      <Typography variant="h2" className="text-[#333] mb-6 max-w-96">
        2nd Floor, P.B. Zapanta Bldg, Rizal Ave. Cor Cortez St., Taytay Rizal
      </Typography>
      <Typography variant="h2" fontWeight="bold" className="text-[#333]">
        Phone:
      </Typography>
      <Typography variant="h2" className="text-[#333] mb-6 max-w-96">
        +63 969-217-8824 (Smart)
        <br />
        +63 917-308-4312 (Globe)
        <br />
        +63 917-309-9173 (Globe/Viber)
      </Typography>
      <Typography variant="h2" fontWeight="bold" className="text-[#333]">
        Email:
      </Typography>
      <Typography variant="h2" className="text-[#333] mb-6 max-w-96">
        nath.printerrentalsph@gmail.com
      </Typography>
      <Typography variant="h2" fontWeight="bold" className="text-[#333]">
        Social Media:
      </Typography>
      <Link
        href="https://www.facebook.com/printer.rentals.ph.2024"
        target="_blank"
      >
        <Facebook
          className="h-12 w-12 mt-2 p-2 bg-[#3b5998] rounded-full"
          fill="#fff"
          strokeWidth={0}
        />
      </Link>
    </div>
  );
};

export default MoreInformation;
