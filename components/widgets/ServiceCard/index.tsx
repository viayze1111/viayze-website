import React, { useState } from 'react';
import Lottie from 'lottie-react';
import styles from './serviceCard.module.css';

interface ServiceCardProps {
  animatedIconData: object;
  title: string;
  description: string;
  type: 'feature' | 'onboarding';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ animatedIconData, title, description, type }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={`bg-transparent text-white flex flex-col items-start gap-3  ${type === 'feature' ? 'py-6 px-[1.95rem] max-w-fit text-left' : 'px--0 lg:py-6 lg:px-0 max-w-[13rem] text-center'}`}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`${styles.lottie_container} ${type === 'feature' ? 'self-start' : 'self-center border border-[#083344] rounded-2xl p-[0.8235rem] w-16 h-16 flex items-center justify-center'}`}

      >
        <Lottie
          animationData={animatedIconData}
          style={{ width: '100%', height: '100%' }}
          loop={isHovering}
          autoplay={isHovering}
        />
      </div>
      <h1 className={`cursor-default text-xl lg:text-2xl text-[#F3F4F6] font-semibold tracking-[0.00625rem] lg:tracking-[0.0075rem] lg:leading-[1.513rem] ${type === 'feature' ? 'self-start': 'self-center'}`}>{title}</h1>
      <p className="cursor-default text-sm font-normal text-[#D1D5DB] tracking-[0.00438rem] lg:text-[15px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
