"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <section id="who-we-are" className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            WHO WE ARE
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Empowering slum communities through art and education
          </h2>
          <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
            Founded in 2017 in Ijora Badia, Lagos, Slum Art Foundation supports vulnerable children
            through free creative workshops, literacy programs, and eco-friendly school building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 text-[16px] text-[#211812] leading-[34px]">
            <p>
              In many informal settlements across Nigeria and Africa, children face severe poverty,
              lack of school infrastructure, and the risk of child labor and exploitation. Slum Art
              provides a safe, structured space where children discover their creativity, learn
              critical skills, and build self-confidence.
            </p>
            <p>
              Led by four-time Guinness World Record holder and educator Adetunwase Adenle, the
              foundation connects artistic excellence with practical community development — from
              nutritional school meals to building entire schools out of discarded plastic bottles.
            </p>

            <div className="pt-2">
              <Link
                href="#pet-bottle-schools"
                className="inline-flex items-center gap-1.5 text-[14px] text-[#211812] underline underline-offset-4 hover:text-[#e86e4c] transition-colors"
              >
                <span>Explore Our PET Bottle Schools</span>
                <ChevronRight className="w-4 h-4 no-underline" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-[#f9fafb]">
            <Image
              src="/slumart/kids_painting.jpg"
              alt="Slum Art children participating in art workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
