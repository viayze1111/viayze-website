'use client';

import ServiceCard from '@/components/widgets/ServiceCard';
import React from 'react';
import { TDictionary } from '@/app/[[...lang]]/dictionaries';
import aRMobileLottie from '@/lotties/AR_Mobile_lottie.json';
import dShapeLottie from '@/lotties/3D_Shape03_lottie.json';
import generateAiLottie from '@/lotties/Generate_Ai_lottie.json';
import brainCheckLottie from '@/lotties/Brain_Check_lottie.json';
import augmentedRealityHuman from '@/lotties/Augmented_reality_Human-1_lottie.json';
import generateHumanLottie from '@/lotties/Generate_human_lottie.json';
import { motion } from 'framer-motion';
import Badge from '@/components/widgets/Badge';

const FeaturesOverview = ({ data }: { data: TDictionary }) => {
  const lottieAnimations = [
    aRMobileLottie,
    dShapeLottie,
    generateAiLottie,
    brainCheckLottie,
    augmentedRealityHuman,
    generateHumanLottie,
  ];

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
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="py-8 lg:py-16 bg-transparent flex flex-col text-center gap-8 lg:gap-12 px-4 lg:px-0"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      id="solutions"
    >
      <motion.div className='flex flex-col gap-3 px-2 lg:px-0'  variants={item}>
        <div className='flex justify-center w-full'>
          <Badge text='Solutions' className='bg-gradient-to-t from-[#022c2299] to-[#022c2200] border border-[#022C22] rounded-full text-[#10B981]'/>
        </div>
        <h2 className="max-w-[44rem] mx-auto font-semibold text-[#F3F4F6] text-2xl lg:text-5xl tracking-[0.00625rem] lg:tracking-[0.015rem]" >
          <span>{data.featuresSection.heading[0]}</span>
          <span className="text-[#22D3EE]">{data.featuresSection.heading[1]}</span>
          <span>{data.featuresSection.heading[2]}</span>
        </h2>
        <p className="max-w-[35rem] mx-auto text-[#D1D5DB] text-sm lg:text-base font-medium tracking-[0.00438rem] lg:tracking-[0.005rem]" >
          {data.featuresSection.subheading}
        </p>
      </motion.div>
      <div
        className="max-w-5xl mx-auto sm:px-6 px-0 lg:px-0 grid grid-cols-1fr lg:grid-cols-3 gap-x-20 gay-y-4 lg:gap-y-6">
        {data.featuresSection.features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <ServiceCard
              key={index}
              animatedIconData={lottieAnimations[index % lottieAnimations.length]}
              title={feature.feature}
              description={feature.description}
              type="feature"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesOverview;
