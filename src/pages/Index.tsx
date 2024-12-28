import { HeroSection } from "@/components/HeroSection";
import { FeaturedTribes } from "@/components/FeaturedTribes";
import { Statistics } from "@/components/Statistics";
import { EventsSection } from "@/components/EventsSection";
import { MentorsSection } from "@/components/MentorsSection";
import { InternshipsSection } from "@/components/InternshipsSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center bg-fixed opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />
      <Header />
      <HeroSection />
      <FeaturedTribes />
      <Statistics />
      <EventsSection />
      <MentorsSection />
      <InternshipsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;