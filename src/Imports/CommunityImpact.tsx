"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CommunityImpact: React.FC = () => {
  return (
    <section id="community-impact" className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            COMMUNITY RELIEF
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Funds raised from artworks sold provide supplies
          </h2>
          <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
            Creative education works hand-in-hand with basic survival. Revenue from artwork sales and
            donor support directly funds daily nutrition, uniforms, and learning kits for children in
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-[#f9fafb]">
            <Image
              src="/slumart/supplies_distribution.jpg"
              alt="Funds Raised from Artworks sold are also used to provide Supplies"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="border border-[#e5e7eb] rounded-[8px] p-6 bg-white">
              <h3 className="text-[16px] font-bold text-[#211812] mb-1">
                School Meals & Nutrition
              </h3>
              <p className="text-[14px] text-[#211812]/80 leading-[24px]">
                Hot meals provided during art training and schooling sessions to ensure no child attends
                class hungry.
              </p>
            </div>

            <div className="border border-[#e5e7eb] rounded-[8px] p-6 bg-white">
              <h3 className="text-[16px] font-bold text-[#211812] mb-1">
                Educational & Art Kits
              </h3>
              <p className="text-[14px] text-[#211812]/80 leading-[24px]">
                Books, notebooks, backpacks, and art materials distributed to keep children engaged in
                learning and away from hazardous child labor.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#artwork-acquisition"
                className="inline-flex items-center gap-1.5 text-[14px] text-[#211812] underline underline-offset-4 hover:text-[#e86e4c] transition-colors"
              >
                <span>Sponsor Supplies Through Artwork</span>
                <ChevronRight className="w-4 h-4 no-underline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
