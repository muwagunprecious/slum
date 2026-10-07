"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mediaList } from "@/constants/media";
import { ChevronRight } from "lucide-react";

const Media: React.FC = () => {
  return (
    <section id="media-and-press" className="w-full bg-[#fff9f7] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
              PRESS & GLOBAL MEDIA
            </p>
            <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
              Selected reporting and global recognition
            </h2>
            <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
              Features by CNN Worldwide, BBC News, United Nations Information Centre (UNIC Lagos), and
              The Guardian highlighting Slum Art&apos;s educational impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaList.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-[#211812]/40 transition-colors p-5 group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-[6px] overflow-hidden bg-[#f9fafb] border border-[#e5e7eb] mb-4">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-[#211812] group-hover:text-[#e86e4c] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#211812]/75 leading-[24px]">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e5e7eb] flex items-center gap-1 text-[13px] text-[#211812] underline underline-offset-2">
                <span>Read Coverage</span>
                <ChevronRight className="w-3.5 h-3.5 no-underline" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
