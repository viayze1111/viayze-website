import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';


interface TestimonialCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  role: string;
  testimony: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageSrc, name, role, testimony }) => {
  return (
    <div className="w-[28rem] flex flex-col gap-6 bg-gradient-to-t from-[#06b6d400] to-[#06b6d40f] rounded-2xl border border-[#164E63] p-6 min-h-48">
      <div className="flex gap-3 ">
        <Image src={imageSrc} alt={name} width={44} height={44} className="rounded-full" />
        <div className='text-left'>
          <h5 className="text-[#F3F4F6] font-medium">{name}</h5>
          <p className="text-[#9CA3AF] text-sm tracking-[0.00438rem]">{role}</p>
        </div>
      </div>
      <blockquote className="text-slate-300 text-sm text-left tracking-[0.005rem]">
        “{testimony}”
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
