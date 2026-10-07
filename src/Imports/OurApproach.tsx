"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const OurApproach: React.FC = () => {
  return (
    <section id="approach" className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow Label */}
        <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-6 font-medium">
          OUR APPROACH
        </p>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-medium text-[#211812] leading-[1.18] tracking-tight">
              Accelerating sustainable development through partnership and trust
            </h2>
          </div>

          {/* Right Column: Body Copy & Editorial Link */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <p className="text-[16px] text-[#211812] leading-[36px] font-normal">
              Slum Art&apos;s co-investment model aims to close the educational and funding gap so that
              underserved communities can grow and sustain independently. We invest directly in young
              creatives, community mentors, and eco-friendly PET bottle classrooms. This is a more
              effective, cost-efficient, and impactful approach to development that starts inside
              communities and ripples outward.
            </p>

            <Link
              href="#who-we-are"
              className="inline-flex items-center gap-1.5 text-[14px] text-[#211812] underline underline-offset-4 font-normal hover:text-[#e86e4c] transition-colors"
            >
              <span>Who We Are</span>
              <ChevronRight className="w-4 h-4 no-underline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
