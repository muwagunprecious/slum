"use client";

import React from "react";
import Image from "next/image";

const glideImages = [
  { src: "/slumart/community.jpg", alt: "Slum Art Community" },
  { src: "/slumart/pet_bottle_school_hero.jpg", alt: "Pet Bottle School" },
  { src: "/slumart/kids_painting.jpg", alt: "Children Painting Workshop" },
  { src: "/slumart/supplies_distribution.jpg", alt: "Supplies Distribution" },
  { src: "/slumart/page_24.jpg", alt: "Ijora Badia Art Wall" },
  { src: "/slumart/page_33.jpg", alt: "Slum Art Exhibition" },
];

const CommunityBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] flex items-end bg-[#211812] overflow-hidden">
      {/* Gliding Background Strip */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none select-none">
        <div className="glide-track-container flex h-full">
          {/* Repeat images 3 times for completely seamless infinite loop */}
          {[...glideImages, ...glideImages, ...glideImages].map((img, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[500px] lg:w-[640px] h-full shrink-0 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 340px, (max-width: 1200px) 500px, 640px"
                priority={idx < 4}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Darkening overlay for high contrast readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 z-[1]" />

      {/* Overlaid Editorial Text in Pure Crisp White */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h3
              className="text-[28px] sm:text-[34px] font-medium !text-white mb-3 leading-tight"
              style={{ color: "#ffffff" }}
            >
              Driving sustainable progress.
            </h3>
            <p
              className="text-[15px] sm:text-[16px] !text-white leading-[28px] font-normal max-w-lg"
              style={{ color: "#ffffff" }}
            >
              Slum Art&apos;s community co-investment model turns recycled plastic bottles into classrooms
              and empowers over 1,000 children across African settlements.
            </p>
          </div>

          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8">
            <h4
              className="text-[22px] sm:text-[26px] font-medium !text-white mb-2"
              style={{ color: "#ffffff" }}
            >
              It starts inside.
            </h4>
            <p
              className="text-[14px] !text-white/90 leading-[24px] font-normal"
              style={{ color: "rgba(255, 255, 255, 0.95)" }}
            >
              People closest to the challenges lead the solutions. 100% of artwork proceeds and
              donations go directly to on-the-ground schools, food programs, and learning materials.
            </p>
          </div>
        </div>
      </div>

      {/* Standard CSS animation injected via regular HTML style tag */}
      <style>{`
        @keyframes glideContinuous {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .glide-track-container {
          width: max-content;
          animation: glideContinuous 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default CommunityBanner;
