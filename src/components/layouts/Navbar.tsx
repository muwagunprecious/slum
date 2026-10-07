"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#211812] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo - left aligned */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-40 sm:w-44">
            <Image
              src="/slumart/slumart_logo_revamp.png"
              alt="Slum Art Foundation"
              fill
              className="object-contain filter brightness-0 invert"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - right aligned */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("approach")}
            className="text-[14px] text-white/90 hover:text-white font-normal transition-colors cursor-pointer"
          >
            WHO WE ARE
          </button>
          <button
            onClick={() => scrollToSection("pet-bottle-schools")}
            className="text-[14px] text-white/90 hover:text-white font-normal transition-colors cursor-pointer"
          >
            OUR WORK
          </button>
          <button
            onClick={() => scrollToSection("cnn-portraits")}
            className="text-[14px] text-white/90 hover:text-white font-normal transition-colors cursor-pointer"
          >
            CNN PORTRAITS
          </button>
          <button
            onClick={() => scrollToSection("artwork-acquisition")}
            className="text-[14px] text-white/90 hover:text-white font-normal transition-colors cursor-pointer"
          >
            ACQUIRE ARTWORK
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[14px] text-white/90 hover:text-white font-normal transition-colors cursor-pointer"
          >
            CONTACT
          </button>

          {/* Primary Donate Button - 6px rounded, #e86e4c, 114px min width, 44px min height */}
          <button
            onClick={() => scrollToSection("artwork-acquisition")}
            className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-5 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] flex items-center justify-center transition-colors cursor-pointer border border-transparent"
          >
            Donate
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => scrollToSection("artwork-acquisition")}
            className="bg-[#e86e4c] text-[#fff9f7] text-[13px] font-medium px-4 py-2 rounded-[6px] transition-colors"
          >
            Donate
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#211812] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("approach")}
            className="text-left text-[15px] text-white/90 py-2 border-b border-white/5"
          >
            WHO WE ARE
          </button>
          <button
            onClick={() => scrollToSection("pet-bottle-schools")}
            className="text-left text-[15px] text-white/90 py-2 border-b border-white/5"
          >
            OUR WORK
          </button>
          <button
            onClick={() => scrollToSection("cnn-portraits")}
            className="text-left text-[15px] text-white/90 py-2 border-b border-white/5"
          >
            CNN PORTRAITS
          </button>
          <button
            onClick={() => scrollToSection("artwork-acquisition")}
            className="text-left text-[15px] text-white/90 py-2 border-b border-white/5"
          >
            ACQUIRE ARTWORK ($1,200)
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left text-[15px] text-white/90 py-2"
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
