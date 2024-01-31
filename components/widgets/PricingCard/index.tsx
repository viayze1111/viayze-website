import React from 'react';
import checkLine from '@/public/assets/icons/check-line.svg';
import Image from 'next/image';
import Button from '../Button';

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  badge?: string;
  isActive: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  badge,
  isActive
}) => {
  return (
    <div className={`flex flex-col gap-8 p-8 rounded-2xl border-2  ${badge ? 'border-[#6B7280] relative' : 'border-[#1F2937]'} bg-[#0833441a] max-w-[20.33331rem]`}>
      {badge && (
        <div className="absolute text-xs top-[-0.875rem] right-[6.35419rem] text-[#030712] tracking-[0.00375rem] font-semibold bg-gradient-to-t from-[#9CA3AF] to-[#F3F4F6] rounded-full py-1.5 px-3 uppercase">
          {badge}
        </div>
      )}
      <div className="flex flex-col gap-3 text-left border-b border-[#1F2937] pb-8">
        <h4 className="font-semibold text-[#22D3EE] tracking-[0.005rem]">{title}</h4>
        <p className="font-semibold text-3xl text-[#CFFAFE] tracking-[0.00938rem]">{price}</p>
        <p className="font-medium text-sm text-[#9CA3AF] tracking-[0.00438rem]">{description}</p>
      </div>
      <ul className="flex flex-col gap-4">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <div className='bg-[#022C22] rounded-full p-1'>
              <Image src={checkLine} alt="check line" />
            </div>
            <p className='text-[#D1D5DB] text-sm tracking-[0.00438rem]'>{feature.text}</p>
          </li>
        ))}
      </ul>
      <a href={process.env.CTA_REDIRECT_LINK} target="_blank" rel="noopener noreferrer">
        <Button shape={isActive ? 'filled' : 'surface'} size='small' width='100%'>{buttonText}</Button>
      </a>
    </div>
  );
};

export default PricingCard;
