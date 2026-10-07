"use client";

import React from "react";
import Image from "next/image";

interface Milestone {
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "2019",
    title: "196 Presidential Portrait Paintings — CNN My Freedom Day",
    location: "Ijora Badia, Lagos & CNN Global",
    description:
      "Children in the slum hand-painted 196 portraits of world presidents to spotlight modern slavery. The project was featured live on CNN Worldwide, BBC News, ThisDay, and The Guardian.",
    image: "/slumart/freedom_day/cnn_presidents_collage.jpg",
  },
  {
    year: "2019",
    title: "CNN Freedom Project Media Showcase",
    location: "Lagos, Nigeria",
    description:
      "Slum Art Foundation collaborated with CNN's Freedom Project — children's portraits were exhibited at sponsor events with Ford, FCMB, Nestlé, Sterling Bank, and Olam funding the campaign.",
    image: "/slumart/freedom_day/cnn_freedom_project.jpg",
  },
  {
    year: "2019",
    title: "My Freedom Day Live Events & Community Painting Sessions",
    location: "Ijora Badia, Lagos",
    description:
      "Children and mentors held live community painting sessions and freedom pledges. T-shirts were printed for the children and a runway showcase was organized as part of the awareness campaign.",
    image: "/slumart/freedom_day/tshirt_and_painting.jpg",
  },
  {
    year: "2017",
    title: "First CNN Freedom Project Tweet Campaign",
    location: "Lagos, Nigeria",
    description:
      "Slum Art launched its first CNN-linked social media campaign on modern slavery — children's artwork went viral globally and the project earned international media coverage for the first time.",
    image: "/slumart/freedom_day/freedom_day_2017.jpg",
  },
];

// Gliding strip images from CNN Freedom Day folder
const glideImages = [
  "/slumart/freedom_day/02c51e85-3631-4028-aefe-5313464342e8.jpg",
  "/slumart/freedom_day/040a99c5-e389-48bc-a48e-869ca7a18481.jpg",
  "/slumart/freedom_day/08095292-4748-4fc7-8dfa-7ac495c61a15.jpg",
  "/slumart/freedom_day/12132d21-72aa-4ef5-a32b-acce2116f6d7.jpg",
  "/slumart/freedom_day/339e8d74-e120-4e8b-ae2d-336f948106dd.jpg",
  "/slumart/freedom_day/45efa2a8-6a03-4191-8a15-e8ac050c12dd.jpg",
  "/slumart/freedom_day/63f1596e-7f0e-4fe3-944e-022c66c8efd8.jpg",
  "/slumart/freedom_day/73190dfc-af99-4b68-8aa0-bc5c0a3886ba.jpg",
  "/slumart/freedom_day/7772814b-fe23-462d-b0de-3895f5d918db.jpg",
  "/slumart/freedom_day/e1b4d64a-22ff-481e-b80a-bdfca258d311.jpg",
  "/slumart/freedom_day/cnn.jpg",
  "/slumart/freedom_day/painting_session.jpg",
  "/slumart/freedom_day/cho03_community.jpg",
];

const TrackRecords: React.FC = () => {
  const doubled = [...glideImages, ...glideImages, ...glideImages];

  return (
    <section id="track-records" className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            MILESTONES
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Track records of community change
          </h2>
          <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
            Since 2017, Slum Art Foundation has consistently organized exhibitions, humanitarian
            relief campaigns, and creative education in Nigeria and internationally.
          </p>
        </div>
      </div>

      {/* Gliding image strip */}
      <div className="w-full overflow-hidden mb-16">
        <div
          className="flex gap-3"
          style={{
            animation: "glideContinuous 55s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="relative flex-none w-[320px] h-[200px] rounded-[6px] overflow-hidden bg-[#f4f4f4]"
            >
              <Image
                src={src}
                alt="CNN Freedom Day community moment"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-[#f9fafb]">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[13px] text-[#211812]/60">
                  <span className="font-semibold text-[#e86e4c]">{m.year}</span>
                  <span>{m.location}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#211812]">
                  {m.title}
                </h3>
                <p className="text-[14px] text-[#211812]/75 leading-[26px]">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecords;
