"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const linksCol1 = [
  { label: "Home", href: "#hero" },
  { label: "Who We Are", href: "#approach" },
  { label: "Our Work", href: "#pet-bottle-schools" },
  { label: "CNN Portraits", href: "#cnn-portraits" },
];

const linksCol2 = [
  { label: "Acquire Artwork ($1,200)", href: "#artwork-acquisition" },
  { label: "Guinness World Records", href: "#guinness-records" },
  { label: "Track Records", href: "#track-records" },
  { label: "Contact", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#211812] text-white py-16 border-t border-white/10 font-normal">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36">
                <Image
                  src="/slumart/slum_art_logo_transparent.png"
                  alt="Slum Art Foundation"
                  fill
                  className="object-contain filter brightness-125"
                />
              </div>
            </Link>
            <p className="text-[14px] text-white/70 leading-[26px] max-w-sm mt-2">
              Empowering slum children through creative education, sustainable PET bottle schools
              across Africa, and advocacy against modern-day slavery.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.14em] text-white/50 font-medium mb-1">
              EXPLORE
            </span>
            {linksCol1.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.14em] text-white/50 font-medium mb-1">
              SUPPORT & CONNECT
            </span>
            {linksCol2.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="text-[13px] text-white/60 mt-3 pt-3 border-t border-white/10">
              Ijora Badia, Lagos, Nigeria • +234 805 999 4834 • Adetunwase@slumart.org
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Slum Art Foundation. All Rights Reserved.</p>
          <p>4x Guinness World Record Holder • My Freedom Day Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
