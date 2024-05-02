"use client";
import { Typography } from "@/common/components/ui/Typography";
import { LucideMail, LucideUser, LucidePhone, LucidePencil } from "lucide-react";
import React, { useState } from "react";
import classNames from "classnames";

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
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
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
                  "pl-10 pr-4 pt-2 pb-2 rounded-lg border bg-light-700 focus:outline-none transition-colors duration-300",
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
                  "pl-10 pr-4 pt-2 pb-2 rounded-lg border bg-light-700 focus:outline-none transition-colors duration-300",
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
      </form>
    </div>
  );
};

export default GetInTouchWithUsSection;

