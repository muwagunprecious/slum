"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cnnReporters, CnnReporter } from "@/constants/cnnReporters";
import { X, Search } from "lucide-react";

const CnnCollection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedReporter, setSelectedReporter] = useState<CnnReporter | null>(null);

  const filteredReporters = cnnReporters.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAcquire = (reporter: CnnReporter) => {
    setSelectedReporter(null);
    const section = document.getElementById("artwork-acquisition");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cnn-portraits" className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
              MY FREEDOM DAY 2026
            </p>
            <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
              “Thank You, CNN” — 147 Portrait Collages
            </h2>
            <p className="text-[16px] text-[#211812] leading-[32px] font-normal mt-3">
              Collages created by children and volunteer artists at Slum Art using recycled materials,
              honoring CNN journalists in appreciation of their fight against modern-day slavery.
            </p>
          </div>

          {/* Minimal Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#211812]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reporter..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#e5e7eb] rounded-[6px] pl-9 pr-3 py-2 text-[14px] text-[#211812] placeholder-[#211812]/40 outline-none focus:border-[#e86e4c]"
            />
          </div>
        </div>

        {/* Master Collage Card */}
        <div className="mb-14 border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8 bg-[#fff9f7] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative h-64 sm:h-72 w-full rounded-[6px] overflow-hidden bg-white border border-[#e5e7eb]">
            <Image
              src="/slumart/page_1.jpg"
              alt="147 CNN Reporter Portraits Master Collage"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 flex flex-col items-start gap-4">
            <h3 className="text-[24px] font-bold text-[#211812]">
              The 147 Portrait Exhibition
            </h3>
            <p className="text-[15px] text-[#211812] leading-[28px] font-normal">
              Each portrait was created by hand using recycled paper and canvas in Ijora Badia, Lagos.
              The collection will be exhibited at CNN headquarters in Atlanta, Georgia. Acquiring an
              artwork funds classroom construction across Africa.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("artwork-acquisition");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-5 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] transition-colors cursor-pointer"
            >
              Acquire An Artwork ($1,200)
            </button>
          </div>
        </div>

        {/* Clean Editorial Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReporters.map(reporter => (
            <div
              key={reporter.id}
              onClick={() => setSelectedReporter(reporter)}
              className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-[#211812]/40 transition-colors cursor-pointer group p-4"
            >
              <div>
                <div className="relative w-full aspect-[4/5] rounded-[6px] overflow-hidden bg-[#f9fafb] border border-[#e5e7eb] mb-4">
                  <Image
                    src={reporter.portraitImage}
                    alt={`${reporter.name} portrait`}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <h4 className="text-[16px] font-bold text-[#211812]">
                  {reporter.name}
                </h4>
                <p className="text-[13px] text-[#211812]/70 line-clamp-1 mb-3">
                  {reporter.role}
                </p>

                <p className="text-[13px] text-[#211812]/80 italic line-clamp-3 leading-relaxed mb-4">
                  &ldquo;{reporter.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between text-[13px]">
                <span className="font-semibold text-[#211812]">$1,200</span>
                <span className="text-[#e86e4c] font-medium underline underline-offset-2">
                  View Letter &gt;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Reporter */}
        {selectedReporter && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedReporter(null)}
          >
            <div
              className="bg-white rounded-[8px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative border border-[#e5e7eb]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedReporter(null)}
                className="absolute top-4 right-4 p-2 text-[#211812]/70 hover:text-[#211812] cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-2">
                <div className="relative h-72 sm:h-96 w-full rounded-[6px] overflow-hidden border border-[#e5e7eb] bg-black">
                  <Image
                    src={selectedReporter.slideImage}
                    alt={selectedReporter.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4 text-left">
                  <div>
                    <h3 className="text-[24px] font-bold text-[#211812]">
                      {selectedReporter.name}
                    </h3>
                    <p className="text-[14px] text-[#211812]/70">
                      {selectedReporter.role}
                    </p>
                  </div>

                  <div className="p-4 bg-[#fff9f7] border border-[#e5e7eb] rounded-[6px]">
                    <p className="text-[12px] uppercase text-[#211812]/60 font-medium mb-1">
                      Letter of Gratitude from the Children:
                    </p>
                    <p className="text-[14px] text-[#211812] italic leading-relaxed">
                      &ldquo;{selectedReporter.quote}&rdquo;
                    </p>
                    <p className="text-[12px] text-[#211812]/60 mt-3">
                      — Slum Art Pet Bottle School, Ijora Badia, Lagos, Nigeria
                    </p>
                  </div>

                  <div className="text-[14px] text-[#211812]">
                    Valuation: <strong>$1,200</strong> (Available in installments of $50, $100, $200, $400 / month, or immediate payment)
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => handleAcquire(selectedReporter)}
                      className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-5 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] transition-colors cursor-pointer"
                    >
                      Get your own artwork
                    </button>
                    <button
                      onClick={() => setSelectedReporter(null)}
                      className="border border-[#211812] text-[#211812] text-[14px] font-normal px-4 py-2.5 rounded-[4px] min-w-[114px] min-h-[44px] hover:bg-black/5 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CnnCollection;
