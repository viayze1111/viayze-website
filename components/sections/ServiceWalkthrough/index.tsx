'use client';

import React from 'react';
import { TDictionary } from '@/app/[[...lang]]/dictionaries';
import workingProcess from '@/public/assets/icons/working-process.svg';
import Image from 'next/image';
import Button from '@/components/widgets/Button';
import { motion } from 'framer-motion';

const ServiceWalkthrough = ({data} : {data: TDictionary}) => {
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
    <div className="py-8 lg:py-16 bg-transparent">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 lg:py-8 items-center px-4 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='flex flex-col self-center flex-1 items-center justify-center'
          variants={item}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-30deg) rotateX(15deg)',
          }}
        >
          <motion.div
            initial={{
              transform: 'translateZ(8px) translateY(-2px)',
            }}
            animate={{
              transform: 'translateZ(32px) translateY(-8px)',
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <Image src={workingProcess} alt='data analysis process' width={433.633} height={298.041} className='w-[18.37606rem] lg:w-[433.633px] h-[12.23569rem] lg:h-[298.041px]'/>
          </motion.div>
        </motion.div>
        <motion.div className='flex flex-col text-center lg:text-left gap-8 flex-[0.8_1_0%]' variants={item}>
          <div className='flex flex-col gap-4'>
            <motion.span className='bg-gradient-to-r from-cyan-500 to-cyan-600 text-md text-transparent bg-clip-text font-semibold tracking-[0.00438rem]'>{data.howItWorksSection.highlight}</motion.span>
            <motion.h2 className='text-[#F3F4F6] text-xl lg:text-4xl font-bold tracking-[0.01125rem]'>{data.howItWorksSection.heading}</motion.h2>
            <motion.p className='text-[#D1D5DB] text-sm lg:text-base tracking-[0.00438rem] font-medium lg:tracking-[0.007rem]'>{data.howItWorksSection.description}</motion.p>
          </div>
          <motion.div variants={item}>
          <a href={process.env.CTA_REDIRECT_LINK} target="_blank" rel="noopener noreferrer" >
            <Button shape='filled' size='default' width={192}>{data.clientReviewsSection.buttonText}</Button>
          </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceWalkthrough;

