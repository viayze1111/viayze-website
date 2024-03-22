"use client";

import React from "react";
import TestimonialCard from "@/components/widgets/TestimonialCard";
import InfiniteCarousel from "@/components/widgets/InfiniteCarousel";
import Button from "@/components/widgets/Button";
import { motion } from "framer-motion";
import data from "@/dictionaries/en.json";

const ClientReviews = () => {
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
    <div className="overflow-hidden bg-transparent py-8 lg:py-16">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center lg:gap-12 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="mx-auto flex max-w-[48rem] flex-col gap-3 lg:gap-4"
          variants={item}
        >
          <h2 className="text-xl font-bold tracking-[0.015rem] text-[#F3F4F6] lg:text-4xl lg:leading-[2.723rem]">
            <span>{data.clientReviewsSection.heading[0]}</span>
            <span className="text-[#22D3EE]">
              {" "}
              {data.clientReviewsSection.heading[1]}{" "}
            </span>
          </h2>
          <p className="text-sm font-medium tracking-[0.005rem] text-[#D1D5DB] lg:text-base">
            {data.clientReviewsSection.subheading}
          </p>
        </motion.div>
        <InfiniteCarousel speed={95} direction="left">
          {data.clientReviewsSection.reviews.map((review, index) => (
            <div key={index} className="mx-4">
              <TestimonialCard
                key={index}
                imageSrc={review.image}
                name={review.name}
                role={review.role}
                testimony={review.testimony}
              />
            </div>
          ))}
        </InfiniteCarousel>
        <motion.div variants={item}>
          <a
            href={process.env.NEXT_PUBLIC_CTA_REDIRECT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className="text-sm font-medium tracking-[0.005rem] text-[#D1D5DB] lg:text-base max-w-screen-sm mb-6 mt-8">
            {data.clientReviewsSection.endingtext}
          </p>
            <Button shape="filled" size="default" width={192}>
              Schedule a Demo
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientReviews;
