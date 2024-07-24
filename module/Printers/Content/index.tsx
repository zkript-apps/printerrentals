"use client";
import Image from "next/image";
import j100 from "@/common/assets/brother-j100.jpeg";
import { Typography } from "@/common/components/ui/Typography";
import { Button } from "@/common/components/ui/Button";
import { cn } from "@/common/helpers/cn";
import ItemContainer from "../ItemContainer";
import { useState } from "react";
import EnquiryModal from "./Modal/EnquiryModal";
import { printers } from "../printersData";
import { useParams } from "next/navigation";
import List from "./List";

const PrinterContent = () => {
  const [currentTab, setCurrentTab] = useState("description");

  const tabs = [
    {
      tab: "description",
      name: "Description",
      current: currentTab === "description",
    },
    {
      tab: "specification",
      name: "Specification",
      current: currentTab === "specification",
    },
    { tab: "reviews", name: "Reviews (0)", current: currentTab === "reviews" },
  ];

  const [openModal, setOpenModal] = useState(false);

  const params = useParams();
  const { printer: printerId } = params;

  const filterPrinter = printers.filter((printer) => printer.id === printerId);

  const relatedPrinters = printers.filter((printer) =>
    filterPrinter[0]?.related.includes(printer.id)
  );

  return (
    <>
      <div className="max-w-[1140px] mx-0 md:mx-10 2xl:mx-auto md:mt-20">
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="relative h-96 w-full md:h-[300px] md:w-[300px] lg:h-[430px] lg:w-[430px] xl:h-[535px] xl:w-[535px] mb-8 md:mb-0">
            <Image src={filterPrinter[0]?.image} fill alt="" />
          </div>
          <div className="mx-7 md:mx-0">
            <Typography className="text-3xl md:text-[40px] mb-3 md:mb-5 leading-normal">
              {filterPrinter[0]?.model}
            </Typography>
            <Typography className="text-[28px] md:text-3xl font-semibold mb-6">
              &#8369;{filterPrinter[0]?.pricePerMonth}
            </Typography>
            <Typography className="text-xl mb-10">
              {filterPrinter[0]?.description}
            </Typography>
            <Button
              size="lg"
              className="h-24 w-48 bg-secondary-800 hover:bg-secondary-900 text-white text-base uppercase font-bold mb-12 md:mb-2.5 lg:mb-0 xl:mb-12"
              onClick={() => setOpenModal(true)}
            >
              Ask Question
              <br />
              About This
              <br />
              Product
            </Button>
            <div className="block md:hidden xl:block">
              <nav
                aria-label="Tabs"
                className="isolate flex flex-col md:flex-row"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    aria-current={tab.current ? "page" : undefined}
                    className={cn(
                      tab.current
                        ? "text-secondary-800 bg-white"
                        : "text-gray-500 bg-neutral-100 hover:bg-neutral-200 ",
                      "group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-xl focus:z-10"
                    )}
                    onClick={() => setCurrentTab(tab.tab)}
                  >
                    <span>{tab.name}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        tab.current ? "bg-secondary-800" : "bg-transparent",
                        "absolute inset-x-0 top-0 h-0.5"
                      )}
                    />
                  </button>
                ))}
              </nav>
              <div className="py-5">
                <div
                  className={currentTab === "description" ? "block" : "hidden"}
                >
                  {
                    // @ts-ignore
                    filterPrinter[0]?.descriptions()
                  }
                </div>
                <div
                  className={
                    currentTab === "specification" ? "block" : "hidden"
                  }
                >
                  {
                    // @ts-ignore
                    filterPrinter[0]?.specifications()
                  }
                </div>
                <div className={currentTab === "reviews" ? "block" : "hidden"}>
                  <Typography className="text-2xl">Reviews</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block xl:hidden col-span-2">
            <nav
              aria-label="Tabs"
              className="isolate flex flex-col md:flex-row"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  aria-current={tab.current ? "page" : undefined}
                  className={cn(
                    tab.current
                      ? "text-secondary-800 bg-white"
                      : "text-gray-500 bg-neutral-100 hover:bg-neutral-200 ",
                    "group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-xl focus:z-10"
                  )}
                  onClick={() => setCurrentTab(tab.tab)}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      tab.current ? "bg-secondary-800" : "bg-transparent",
                      "absolute inset-x-0 top-0 h-0.5"
                    )}
                  />
                </button>
              ))}
            </nav>
            <div className="py-5">
              <div
                className={currentTab === "description" ? "block" : "hidden"}
              >
                {
                  // @ts-ignore
                  filterPrinter[0]?.descriptions()
                }
              </div>
              <div
                className={currentTab === "specification" ? "block" : "hidden"}
              >
                {
                  // @ts-ignore
                  filterPrinter[0]?.specifications()
                }
              </div>
              <div className={currentTab === "reviews" ? "block" : "hidden"}>
                <Typography className="text-2xl">Reviews</Typography>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-14" />
        <Typography className="text-2xl mx-7 md:mx-0 mb-8">
          Related products
        </Typography>
        <div className="mx-7 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-32">
          {relatedPrinters.map((printer) => (
            <ItemContainer
              id={printer.id}
              image={printer.image}
              model={printer.model}
              pricePerMonth={printer.pricePerMonth}
              key={printer.model}
            />
          ))}
        </div>
      </div>
      <EnquiryModal isOpen={openModal} setClose={() => setOpenModal(false)} />
    </>
  );
};

export default PrinterContent;
