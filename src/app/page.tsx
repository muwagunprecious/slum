import Hero from "@/Imports/Hero";
import OurApproach from "@/Imports/OurApproach";
import CommunityBanner from "@/Imports/CommunityBanner";
import StoriesOfChange from "@/Imports/StoriesOfChange";
import PetBottleSchools from "@/Imports/PetBottleSchools";
import CnnCollection from "@/Imports/CnnCollection";
import ArtworkInstallments from "@/Imports/ArtworkInstallments";
import CommunityImpact from "@/Imports/CommunityImpact";
import GuinnessRecords from "@/Imports/GuinnessRecords";
import TrackRecords from "@/Imports/TrackRecords";
import Media from "@/Imports/Media";
import AboutMe from "@/Imports/AboutMe";
import Contact from "@/Imports/Contact";
import Footer from "@/Imports/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#ffffff] text-[#211812] pt-[72px]">
      {/* 1. Full-Bleed Hero (Image 1 reference) */}
      <Hero />

      {/* 2. Editorial Our Approach (Image 2 reference) */}
      <OurApproach />

      {/* 3. Community Photography Banner (Image 3 reference) */}
      <CommunityBanner />

      {/* 4. Stories of Change 4-Column Photo Grid (Image 4 reference) */}
      <StoriesOfChange />

      {/* 5. Flagship: PET Bottle Schools Across Africa */}
      <PetBottleSchools />

      {/* 6. CNN My Freedom Day: 147 Portrait Collages */}
      <CnnCollection />

      {/* 7. Acquire Artwork: $1,200 with 2yr, 1yr, 6mo, 3mo & Immediate Installments */}
      <ArtworkInstallments />

      {/* 8. On-the-Ground Supplies & Food Relief (Page 35) */}
      <CommunityImpact />

      {/* 9. Four Certified Guinness World Records */}
      <GuinnessRecords />

      {/* 10. Milestone Track Records (2017 - 2026) */}
      <TrackRecords />

      {/* 11. Global Media Features & Recognition */}
      <Media />

      {/* 12. Mission & Leadership Background */}
      <AboutMe />

      {/* 13. Contact & Partnership */}
      <Contact />

      {/* 14. World Connect Style Dark Footer */}
      <Footer />
    </main>
  );
}
