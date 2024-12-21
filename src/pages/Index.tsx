import { HeroSection } from "@/components/HeroSection";
import { FeaturedTribes } from "@/components/FeaturedTribes";
import { Testimonials } from "@/components/Testimonials";
import { Statistics } from "@/components/Statistics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedTribes />
      <Statistics />
      <Testimonials />
    </div>
  );
};

export default Index;