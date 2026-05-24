import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ShopByIntention from "@/components/ShopByIntention";
import FeaturedCrystals from "@/components/FeaturedCrystals";
import CrystalOfTheWeek from "@/components/CrystalOfTheWeek";
import BeginnersGuide from "@/components/BeginnersGuide";
import RitualBundles from "@/components/RitualBundles";
import CrystalLibraryPreview from "@/components/CrystalLibraryPreview";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <Hero />
        <TrustStrip />
        <ShopByIntention />
        <FeaturedCrystals />
        <CrystalOfTheWeek />
        <BeginnersGuide />
        <RitualBundles />
        <CrystalLibraryPreview />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
