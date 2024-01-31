'use client';

import React from 'react';
import { TDictionary } from '@/app/[[...lang]]/dictionaries';
import PricingCard from '@/components/widgets/PricingCard';
import { motion } from 'framer-motion';
import Badge from '@/components/widgets/Badge';

const PriceBreakdown = ({data} : {data: TDictionary}) => {
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
    <div className='py-8 lg:py-16 bg-transparent'>
      <motion.div
        className='max-w-5xl mx-auto flex flex-col items-center text-center gap-8 lg:gap-12 px-4 lg:px-0'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        id="pricing"
      >
        <motion.div className='max-w-[48rem] mx-auto flex flex-col gap-3 lg:gap-4'  variants={item}>
          <motion.div className='flex justify-center w-full'>
            <Badge text='Pricing Plans' className='bg-gradient-to-t from-[#451a0300] to-[#451a0399] border border-[#451A03] rounded-full text-[#F59E0B]'/>
          </motion.div>
          <motion.h2 className="font-semibold text-[#F3F4F6] text-xl lg:text-5xl tracking-[0.00625rem] lg:tracking-[0.015rem]" >
            <span>{data.pricingSection.heading[0]}</span>
            <span className="text-[#22D3EE]"> {data.pricingSection.heading[1]} </span>
          </motion.h2>
          <motion.p className="text-[#D1D5DB] tracking-[0.00438rem] lg:tracking-[0.005rem] text-sm lg:text-base" >
            {data.pricingSection.subheading}
          </motion.p>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-6'>
          { data.pricingSection.pricingOptions.map((option, index) => (
            <motion.div key={index} variants={item}>
              <PricingCard
                key={option.title}
                title={option.title}
                price={option.price}
                description={option.description}
                features={option.features}
                buttonText={option.buttonText}
                badge={option.badge}
                isActive={index === data.pricingSection.pricingOptions.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceBreakdown;