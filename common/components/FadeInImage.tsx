"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface FadeInImageProps {
  img: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  variant?: "fade" | "fade-up" | "fade-right";
  className?: ReactNode;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  img,
  width,
  height,
  alt,
  variant = "fade",
  className
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

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, isVisible]);
  const fadeVariant: Variants = {
    hidden: { opacity: 0, x: 50 }, 
    visible: { opacity: 1, x: 0 }, 
  };
  
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
  };
  
  const fadeRightVariant: Variants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0 },
  };
  const selectedVariant =
    variant === "fade-up"
      ? fadeUpVariant
      : variant === "fade-right"
      ? fadeRightVariant
      : fadeVariant;

  return (
    <div className={`$className`}>
      <div ref={imageRef} className="w-full rounded-lg">
        <motion.div
          className="rounded-lg animate-fade"
          initial="hidden"
          animate={controls}
          variants={selectedVariant}
        >
          <Image src={img} width={width} height={height} alt={alt} />
        </motion.div>
      </div>
    </div>
  );
};

export default FadeInImage;
