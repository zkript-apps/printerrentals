"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import FadeInImage from "@/common/components/FadeInImage";

interface HomeImageTextProps {
  img: string;
  description: string | React.ReactNode;
  children?: React.ReactNode;
  isRightText?: boolean;
  animationVariant?: "fade" | "fade-up" | "fade-right";
}

const HomeImageText: React.FC<HomeImageTextProps> = ({
  img,
  description,
  children,
  isRightText = false,
  animationVariant,
}) => {
  const controls = useAnimation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      if (!element) return;

      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:flex p-6 ${isRightText ? "flex-row-reverse font-sans" : ""}`}
    >
      <div className="md:w-1/2 w-full md:p-14 md:pr-8">
        {children ? children : <p>{description}</p>}
      </div>
      <div className="flex justify-center md:p-14">
        <div ref={imageRef} className="w-full rounded-lg md:pt-0 pt-8">
          <div className="rounded-lg animate-fade">
            <FadeInImage
              img={img}
              width={500}
              height={500}
              alt="Page images"
              variant={animationVariant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageText;
