"use client";

import React from "react";
import dataUsing from "@/public/assets/images/data_using.svg";
import Image from "next/image";
import Button from "@/components/widgets/Button";
import { motion } from "framer-motion";
import data from "@/dictionaries/en.json";

const DataAnalysis = () => {
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
        className="mx-auto flex max-w-5xl flex-col gap-8 px-4 lg:flex-row lg:gap-16 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-1 flex-col justify-center self-center"
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
              src= {dataUsing}
              alt="data analysis process"
              width={443.633}
              height={298.041}
              className="w-[21.43rem] p-[1.43rem] lg:w-[443.633px]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-[0.8_1_0%] flex-col items-center gap-4 text-center lg:items-start lg:gap-8 lg:text-left"
          variants={item}
        >
          <span className="text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text font-medium tracking-[0.00438rem] leading-[1.059rem] text-transparent">
            {data.analysisSection.highlight}
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-[0.01125rem] text-[#F3F4F6] lg:text-4xl lg:leading-[2.723rem]">
              <span>{data.analysisSection.heading[0]}</span>
              <span className="text-[#22D3EE]">
                {data.analysisSection.heading[1]}
              </span>
              <span>{data.analysisSection.heading[2]}</span>
            </h2>
          </div>
          <p className="text-sm font-medium tracking-[0.007rem] text-[#D1D5DB] lg:text-lg lg:leading-[1.75rem]">
            {data.analysisSection.description}
          </p>
          <motion.div variants={item} className="mt-4 lg:mt-0">
            <a
              href={process.env.NEXT_PUBLIC_CTA_REDIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button shape="filled" size="default" width={192}>
                Get Started
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DataAnalysis;
