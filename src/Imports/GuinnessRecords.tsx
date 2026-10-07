"use client";

import React from "react";
import Image from "next/image";

interface RecordItem {
  id: number;
  date: string;
  title: string;
  metric: string;
  description: string;
}

const records: RecordItem[] = [
  {
    id: 1,
    date: "October 2010",
    title: "Largest Painting by Numbers",
    metric: "Nigeria at 50",
    description:
      "A five-day collaborative project by professional painters, school children, and volunteers.",
  },
  {
    id: 2,
    date: "October 2011",
    title: "Largest Children Handwashing Campaign",
    metric: "37,809 Children",
    description:
      "Achieved with UNICEF and Unilever Nigeria to promote sanitation and hygiene across schools.",
  },
  {
    id: 3,
    date: "September 2011",
    title: "Most Children Reading with an Adult",
    metric: "4,222 Children",
    description:
      "Held in commemoration of World Literacy Day with the Deputy Governor of Lagos State.",
  },
  {
    id: 4,
    date: "November 2017",
    title: "World's Largest Postal Stamp",
    metric: "GWR Day Feat",
    description:
      "A commemorative postal stamp canvas breaking the global record on Guinness World Records Day.",
  },
];

const GuinnessRecords: React.FC = () => {
  return (
    <section id="guinness-records" className="w-full bg-[#fff9f7] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            GLOBAL RECORDS
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Four certified Guinness World Records
          </h2>
          <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
            Founder Adetunwase Adenle has led large-scale community mobilization efforts to achieve
            four certified world records in art, literacy, and health education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-white">
            <Image
              src="/slumart/page_27.jpg"
              alt="Our Four Guinness World Records"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {records.map(rec => (
              <div
                key={rec.id}
                className="p-5 rounded-[8px] bg-white border border-[#e5e7eb] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[12px] text-[#211812]/60 uppercase font-medium">
                    {rec.date}
                  </span>
                  <h4 className="text-[16px] font-bold text-[#211812] mt-1 mb-1">
                    {rec.title}
                  </h4>
                  <p className="text-[13px] text-[#e86e4c] font-medium mb-2">
                    {rec.metric}
                  </p>
                  <p className="text-[13px] text-[#211812]/70 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuinnessRecords;
