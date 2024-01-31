'use client';

import React from 'react';
import BenefitCard from '@/components/widgets/BenefitCard';
import partnerShipIcon from '@/public/assets/icons/partnership.svg';
import unionIcon from '@/public/assets/icons/union.svg';
import handClockIcon from '@/public/assets/icons/hand-clock.svg';
import automationIcon from '@/public/assets/icons/automation.svg';

import { TDictionary } from '@/app/[[...lang]]/dictionaries';
import { motion } from 'framer-motion';

const BenefitsShowcase = ({data} : {data: TDictionary}) => {

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
      >
        <motion.div className='max-w-[48rem] mx-auto flex flex-col gap-3 lg:gap-4'  variants={item}>
          <h2 className="font-semibold text-[#F3F4F6] text-xl lg:text-5xl tracking-[0.015rem]" >
            <span>{data.benefitsSection.heading[0]}</span>
            <span className="text-[#22D3EE]"> {data.benefitsSection.heading[1]} </span>
            <span>{data.benefitsSection.heading[2]}</span>
          </h2>
          <p className="text-[#D1D5DB] tracking-[0.005rem] text-sm lg:text-base" >
            {data.benefitsSection.subheading}
          </p>
        </motion.div>
        <motion.div className='flex gap-6 flex-col lg:flex-row' variants={item}>
          <div className='flex flex-col gap-6 flex-[1.5_1_0%]'>
            <BenefitCard
              icon={partnerShipIcon}
              title={data.benefitsSection.cards[0].title}
              description={data.benefitsSection.cards[0].description}
              layout="row"
              cardSize="w-full"
              iconCont='w-[17.368rem] lg:w-[13.09531rem] h-[12.22488rem] lg:h-[9.21744rem]'
              iconSize="w-full h-full"
              textAlignment="text-center lg:text-left"
            />
            <div className='flex flex-col lg:flex-row gap-6'>
              <BenefitCard
                icon={unionIcon}
                title={data.benefitsSection.cards[1].title}
                description={data.benefitsSection.cards[1].description}
                layout="column"
                cardSize='w-full lg:max-w-[18.5rem]'
                iconSize="w-full h-full"
                textAlignment="text-center"
              />
              <BenefitCard
                icon={handClockIcon}
                title={data.benefitsSection.cards[2].title}
                description={data.benefitsSection.cards[2].description}
                layout="column"
                cardSize='w-full lg:max-w-[18.5rem]'
                iconSize="w-full h-full"
                textAlignment="text-center"
              />
            </div>
          </div>
          <BenefitCard
            icon={automationIcon}
            title={data.benefitsSection.cards[3].title}
            description={data.benefitsSection.cards[3].description}
            layout="column"
            cardSize="w-full flex-[0.8_1_0%]"
            iconCont='w-[14.745rem] h-[14.92538rem]'
            iconSize="w-[14.745rem] h-[14.92538rem] lg:w-full lg:h-full"
            textAlignment="text-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BenefitsShowcase;