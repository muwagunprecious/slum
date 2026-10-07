"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const stories: StoryItem[] = [
  {
    id: "pet-bottle-school",
    title: "Ijora Badia Pet Bottle School",
    subtitle: "Built from 15,000+ upcycled plastic bottles",
    image: "/slumart/pet_bottle_school_hero.jpg",
    link: "#pet-bottle-schools",
  },
  {
    id: "cnn-portraits",
    title: "147 CNN Reporter Collages",
    subtitle: "Appreciation of anti-slavery journalism",
    image: "/slumart/page_1.jpg",
    link: "#cnn-portraits",
  },
  {
    id: "kids-painting",
    title: "Art Workshops & Mentorship",
    subtitle: "Empowering kids through creative education",
    image: "/slumart/kids_painting.jpg",
    link: "#approach",
  },
  {
    id: "supplies-relief",
    title: "Community Meals & Supplies",
    subtitle: "Essential nourishment from artwork proceeds",
    image: "/slumart/supplies_distribution.jpg",
    link: "#community-impact",
  },
];

const StoriesOfChange: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-20 sm:py-28 text-[#211812]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header matching Image 4 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
              OUR INITIATIVES
            </p>
            <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
              Making change
            </h2>
          </div>

          <Link
            href="#pet-bottle-schools"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#211812] underline underline-offset-4 hover:text-[#e86e4c] transition-colors"
          >
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4 no-underline" />
          </Link>
        </div>

        {/* 4-column clean photo grid matching Image 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stories.map(story => (
            <Link
              key={story.id}
              href={story.link}
              className="group flex flex-col cursor-pointer"
            >
              {/* Photo box: 8px radius, no shadow, 1px neutral border */}
              <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-[#f9fafb] mb-4">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Title & subtitle below the photo */}
              <h3 className="text-[16px] font-medium text-[#211812] group-hover:text-[#e86e4c] transition-colors">
                {story.title}
              </h3>
              <p className="text-[14px] text-[#211812]/70 leading-normal mt-1">
                {story.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesOfChange;
