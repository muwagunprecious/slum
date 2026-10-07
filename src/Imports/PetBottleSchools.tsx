"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PetBottleSchools: React.FC = () => {
  return (
    <section
      id="pet-bottle-schools"
      className="w-full py-20 sm:py-28 text-[#211812] border-t border-[#caa12c]"
      style={{
        backgroundColor: "#e5a024", // Golden Yellow
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/75 mb-3 font-semibold">
            PET BOTTLE SCHOOLS ACROSS AFRICA
          </p>
          <h2
            className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight"
            style={{ color: "#211812" }}
          >
            Transforming plastic waste into classrooms
          </h2>
          <p className="text-[16px] text-[#211812]/85 leading-[36px] font-normal mt-3">
            In informal settlements where children lack access to school buildings, Slum Art compacts
            discarded plastic bottles with sand to build durable, thermal-efficient classrooms.
          </p>
        </div>

        {/* 2-Column Visual & Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-[8px] overflow-hidden border border-[#211812]/15 bg-black/10">
            <Image
              src="/slumart/pet_bottle_school_hero.jpg"
              alt="Slum Art PET Bottle School in Ijora Badia, Lagos"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-[#211812]/10 rounded-[8px] p-6 bg-white text-[#211812] shadow-sm">
              <h3 className="text-[18px] font-bold text-[#211812] mb-2">
                Ijora Badia Prototype
              </h3>
              <p className="text-[14px] text-[#211812]/80 leading-[26px]">
                Built using over 15,000 recycled plastic bottles collected from street gutters and
                drainages, this structure provides free daily education, art workshops, and safe
                shelter.
              </p>
            </div>

            <div className="border border-[#211812]/10 rounded-[8px] p-6 bg-white text-[#211812] shadow-sm">
              <h3 className="text-[18px] font-bold text-[#211812] mb-2">
                Pan-African Scaling
              </h3>
              <p className="text-[14px] text-[#211812]/80 leading-[26px]">
                We are preparing to take this circular architectural model beyond Nigeria to informal
                settlements across Africa, funded directly through artwork acquisitions and global
                partners.
              </p>
            </div>

            <div>
              <Link
                href="#artwork-acquisition"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#211812] underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                <span>Sponsor a Classroom ($1,200)</span>
                <ChevronRight className="w-4 h-4 no-underline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetBottleSchools;
