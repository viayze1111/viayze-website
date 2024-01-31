import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BenefitCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  layout?: 'row' | 'column';
  cardSize?: string;
  iconSize?: string;
  textAlignment?: string;
  iconCont?: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  layout,
  cardSize,
  iconCont,
  iconSize,
  textAlignment,
  className
}) => {
  const flexDirection = layout === 'column' ? 'flex-col' : 'flex-col lg:flex-row';
  return (
    <div className={`flex ${flexDirection} text-center items-center ${cardSize} bg-gradient-to-t from-[#06b6d400] to-[#06b6d40f] border border-[#083344] rounded-2xl p-8 gap-6`}>
      <div className={`flex ${iconCont}`}>
        <Image src={icon} alt={title} className={`object-center object-contain ${iconSize}`} />
      </div>
      <div className={`flex flex-col flex-1 gap-2 ${textAlignment}`}>
        <h4 className="text-[#F3F4F6] text-base lg:text-xl font-bold tracking-[0.005rem] lg:tracking-[0.00625rem]">{title}</h4>
        <p className="text-[#D1D5DB] text-sm lg:text-base tracking-[0.00438rem] lg:tracking-[0.005rem]">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;

