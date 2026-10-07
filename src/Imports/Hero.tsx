"use client";

import React from "react";

const Hero: React.FC = () => {
  const scrollToAcquire = () => {
    const el = document.getElementById("artwork-acquisition");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center bg-[#211812] overflow-hidden">
      {/* Edge-to-edge photography with restrained darkening layer for readability */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slumart/pet_bottle_school_hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content positioned in a clear, readable left column */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-24 sm:py-32">
        <div className="max-w-xl text-left">
          <h1
            className="text-[34px] sm:text-[44px] md:text-[50px] font-normal !text-white leading-[1.18] tracking-normal mb-8"
            style={{ color: "#ffffff" }}
          >
            Activating power inside communities
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToAcquire}
              className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-6 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] flex items-center justify-center transition-colors cursor-pointer border border-transparent"
            >
              Donate
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("cnn-portraits");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-white/80 underline text-[14px] font-normal transition-colors cursor-pointer px-2 py-2"
            >
              Explore Artworks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
