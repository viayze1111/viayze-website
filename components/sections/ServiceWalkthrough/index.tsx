"use client";

import React from "react";
import collectYourUser from "@/public/assets/images/collect_your_user.svg";
import Image from "next/image";
import Button from "@/components/widgets/Button";
import { motion } from "framer-motion";
import data from "@/dictionaries/en.json";

const ServiceWalkthrough = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-transparent py-8 lg:py-16">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 lg:flex-row-reverse lg:gap-16 lg:px-0 lg:py-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-1 flex-col items-center justify-center self-center"
          variants={item}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
        >
          <motion.div
            initial={{
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              transform: "translateZ(32px) translateY(-8px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={collectYourUser}
              alt="data analysis process"
              width={433.633}
              height={298.041}
              className="h-[12.23569rem] w-[18.37606rem] lg:h-[298.041px] lg:w-[433.633px]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-[0.8_1_0%] flex-col gap-8 text-center lg:text-left"
          variants={item}
        >
          <div className="flex flex-col gap-4">
            <motion.span className="text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text font-medium tracking-[0.00438rem] text-transparent">
              {data.howItWorksSection.highlight}
            </motion.span>
            <motion.h2 className="text-xl font-bold tracking-[0.00625rem] text-[#F3F4F6] lg:text-4xl lg:tracking-[0.015rem] lg:leading-[2.723rem]">
            <span>{data.howItWorksSection.heading[0]}</span>
            <span className="text-[#22D3EE]">
              {" "}
              {data.howItWorksSection.heading[1]}{" "}
            </span>
          </motion.h2>
            <motion.p className="text-sm font-medium tracking-[0.00438rem] text-[#D1D5DB] lg:text-lg lg:tracking-[0.007rem] lg:leading-[1.75rem]">
              {data.howItWorksSection.description}
            </motion.p>
          </div>
          <motion.div variants={item}>
            <a
              href={process.env.NEXT_PUBLIC_CTA_REDIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button shape="filled" size="default" width={192}>
                {data.clientReviewsSection.buttonText}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceWalkthrough;
