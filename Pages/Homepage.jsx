import React from "react";
import HeroSection from "@/components/homepage/HeroSection.jsx";
import ProductShowcase from "@/components/homepage/ProductShowcase";
import ApplicationBlocks from "@/components/homepage/ApplicationBlocks";
import AboutSection from "@/components/homepage/AboutSection";
import BenefitsSection from "@/components/homepage/BenefitsSection";
import FoundersSection from "@/components/homepage/FoundersSection";
import CTASection from "@/components/homepage/CTASection"; 

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ApplicationBlocks />
      <ProductShowcase />
      <AboutSection />
      <BenefitsSection />
      <FoundersSection />
      <CTASection />
    </div>
  );
}
