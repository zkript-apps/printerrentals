import { Typography } from "@/common/components/ui/Typography";
import { Clock, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="w-full
        h-96
        lg:h-[512px]
        relative
        block
        z-10
                    
        bg-[url('/paper-printer.jpeg')]
        bg-cover
        bg-no-repeat
        bg-center

        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-b
        before:from-[#989694]
        before:to-[#000]
        before:opacity-40
        before:z-[-5]
        "
    >
      <div className="mx-8 md:mx-14 2xl:mx-auto max-w-7xl">
        <div className="absolute bottom-11 md:bottom-12">
          <Typography className="text-3xl md:text-[40px] text-white max-w-6xl leading-[42px] md:leading-[56px]">
            What are the Benefits of Renting a Printer? | Printer Rentals PH
          </Typography>
          <div className="flex items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#ffffff80]" />
              <Typography variant="h3" className="text-[#ffffff80]">
                February 17, 2019
              </Typography>
            </div>
            <div className="flex items-center space-x-2">
              <FolderOpen className="h-5 w-5 text-[#ffffff80]" />
              <Link href="#">
                <Typography
                  variant="h3"
                  className="text-[#ffffff80] hover:text-gray-200"
                >
                  Printer
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
