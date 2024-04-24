"use client";
import Link from "next/link";
import { WidthWrapper } from "../../WidthWrapper";
import { Typography } from "../../ui/Typography";
import { APP_NAME } from "@/common/constants";
import { OPTIONS } from "./links";
import Tabs from "./Tabs";

const Footer = ({
  contentWidth = "wide",
}: {
  readonly contentWidth?: "medium" | "small" | "wide" | "full";
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed w-full pb-6 pt-6 2xl:pt-10 bottom-0 border-t border-gray-200 mt-12">
      <WidthWrapper width={contentWidth}>
        <div className="md:flex pb-4">
          <div className="md:flex-1 pb-4 md:text-center md:pb-0 md:mr-4 border-b md:border-b-0">
            <Typography variant="h2">
              WHAT ARE YOU WAITING FOR? <br />
              BE ONE OF OUR SATISFIED CLIENTS.
            </Typography>

            <div className="flex flex-col md:items-center md:mt-18 mt-12">
              <div className="border-yellow-500 w-[80px] pt-2 rounded-sm border-t-4"></div>
              <Tabs tabs={OPTIONS} className="text-blue-700" />
            </div>

            <div className="text-xs mt-8">
              &copy; {currentYear} {APP_NAME} | Made by{" "}
              <span className="text-blue-700 font-semibold">
                Zkript Solutions
              </span>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </footer>
  );
};

export default Footer;
