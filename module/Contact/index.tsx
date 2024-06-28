"use client";
import React from "react";
import ContactUsSection from "./ContactUsSection";
import GetInTouchWithUsSection from "./GetInTouchWithUsSection";
import MoreInformationSection from "./MoreInformationSection";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import MapSection from "./MapSection";

const center = { lat: 14.5622812, lng: 121.1473754 };
const markers = [
  { lat: 14.5622812, lng: 121.1473754 }, 
];


const Contact = () => {
  return (
    <div>
      <ContactUsSection />
      <WidthWrapper width="medium">
        <div className="sm:flex mt-20 justify-center w-full gap-12">
     
          <div className="sm:w-1/2 w-full">
   
            <GetInTouchWithUsSection />
          </div>
          <div>
            <MoreInformationSection />
          </div>
        </div>
      </WidthWrapper>
      <div className="sm:flex w-full mt-32 items-center justify-center bg-gray-100">
        <div className="w-full h-[300px]">
          <MapSection center={center} zoom={14} markers={markers} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
