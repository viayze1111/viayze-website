import React from "react";
import WelcomeBanner from "@/components/sections/WelcomeBanner";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import DataAnalysis from "@/components/sections/DataAnalysis";
import BenefitsShowcase from "@/components/sections/BenefitsShowcase";
import PriceBreakdown from "@/components/sections/PriceBreakdown";
import ServiceWalkthrough from "@/components/sections/ServiceWalkthrough";
import OnBoardingProcess from "@/components/sections/OnBoardingProcess";
import ClientReviews from "@/components/sections/ClientReviews";

const HomePage = async () => {
  return (
    <>
      <WelcomeBanner />
      <FeaturesOverview />
      <DataAnalysis />
      <BenefitsShowcase />
      <PriceBreakdown />
      <ServiceWalkthrough />
      <OnBoardingProcess />
      <ClientReviews />
    </>
  );
};

export default HomePage;
