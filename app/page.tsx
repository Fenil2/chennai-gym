import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/sections/Hero";
import WhyUs from "@/sections/WhyUs";
import Transformation from "@/sections/Transformation";
import GymGallery from "@/sections/GymGallery";
import Trainers from "@/sections/Trainers";
import Offers from "@/sections/Offers";
import InstagramVideos from "@/sections/InstagramVideos";
import FinalCTA from "@/sections/FinalCTA";
import LeadPopup from "@/components/ui/LeadPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Transformation />
        <GymGallery />
        <Trainers />
        <Offers />
        <InstagramVideos />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </>
  );
}
