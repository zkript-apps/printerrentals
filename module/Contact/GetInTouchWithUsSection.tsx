"use client";
import { Typography } from "@/common/components/ui/Typography";
import { LucideMail, LucideUser, LucidePhone, LucidePencil } from "lucide-react";
import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "@/common/components/ui/Button";

const GetInTouchWithUsSection: React.FC = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (id: string) => {
    setFocusedInput(id);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div>
      <Typography variant="h1" fontWeight="semibold">
        Get In Touch With Us
      </Typography>
      <div className="border-secondary-800 w-[80px] py-2 mt-2 rounded-sm border-t-4"></div>

      <form className="">
        {[
          { id: "name", placeholder: "Name*", icon: LucideUser },
          { id: "email", placeholder: "Email*", icon: LucideMail },
          { id: "phone", placeholder: "Phone Number*", icon: LucidePhone },
          { id: "message", placeholder: "Message*", icon: LucidePencil },
        ].map(({ id, placeholder, icon }) => (
          <div className="relative mt-4" key={id}>
            <div className="absolute top-2 left-3.5 flex items-center pointer-events-none">
              {React.createElement(icon, {
                className: classNames("text-gray-400", {
                  "text-yellow-500 duration-300": focusedInput === id,
                }),
              })}
            </div>
            {id === "message" ? (
              <textarea
                id={id}
                className={classNames(
                  "w-full h-[200px] pl-10 pr-4 pt-2 pb-2 rounded-lg border bg-light-700 focus:outline-none transition-colors duration-300",
                  {
                    "border-yellow-500": focusedInput === id,
                    "border-gray-300": focusedInput !== id,
                  }
                )}
                placeholder={placeholder}
                onFocus={() => handleFocus(id)}
                onBlur={handleBlur}
              />
            ) : (
              <input
                type="text"
                id={id}
                className={classNames(
                  "w-full pl-10 pr-4 pt-2 pb-2 rounded-lg border bg-light-700 focus:outline-none transition-colors duration-300",
                  {
                    "border-yellow-500 duration": focusedInput === id,
                    "border-gray-300 duration": focusedInput !== id,
                  }
                )}
                placeholder={placeholder}
                onFocus={() => handleFocus(id)}
                onBlur={handleBlur}
              />
            )}
          </div>
          
        ))}
        <Button
              size="lg"
              className="group relative h-12 w-40 overflow-hidden rounded-lg bg-secondary-800 shadow mt-8 mb-8"
            >
              <div className="absolute inset-0 bg-secondary-900 transition-all duration-[250ms] ease-out opacity-0 group-hover:opacity-100"></div>
              <span className="relative text-white text-md">Send Message</span>
            </Button>
      </form>
    </div>
  );
};

export default GetInTouchWithUsSection;
