'use client';

import React from 'react';
// import Link from 'next/link';
import { TDictionary } from '@/app/[[...lang]]/dictionaries';
import ContactUs from '../ContactUs';
import { motion } from 'framer-motion';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Footer = ({ data }: { data: TDictionary }) => {
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
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.footer
      className="w-full py-16 bg-transparent flex flex-col justify-center gap-8 lg:gap-20 max-w-5xl mx-auto px-4 lg:px-0"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={item}>
        <ContactUs data={data} />
      </motion.div>
      <motion.div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:justify-between border-t border-[#083344] pt-8" variants={item}>
        <p className="text-[#9CA3AF] font-Urbanist text-xs lg:text-sm tracking-[0.00438rem]">
          {data.footerSection.copyRight}
        </p>
        <div className="flex gap-6 justify-center items-center">
          {data.footerSection.links.map((item) =>

          (


            < a key={item.name} href={item.href}
              //  className = {
              // classNames(
              //   item.name ? 'text-[#9CA3AF]' : 'text-slate-300 py-2',
              // 'text-xs lg:text-sm font-medium tracking-[0.00438rem]'
              // )}
              className='text-xs lg:text-sm font-medium tracking-[0.00438rem]'
              // aria-current={item.name ? 'page' : undefined}
              >
              {item.name}
              {/* </p> */}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.footer >
  );
};

export default Footer;
