import { lazy, Suspense } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Statistics } from "@/components/Statistics";

const CommunitySection = lazy(() => import("@/components/CommunitySection").then(module => ({ default: module.CommunitySection })));
const EventsSection = lazy(() => import("@/components/EventsSection").then(module => ({ default: module.EventsSection })));
const St33Section = lazy(() => import("@/components/St33Section").then(module => ({ default: module.St33Section })));
const OpportunitiesSection = lazy(() => import("@/components/OpportunitiesSection").then(module => ({ default: module.OpportunitiesSection })));
const AppShowcase = lazy(() => import("@/components/AppShowcase").then(module => ({ default: module.AppShowcase })));
const CollaborativeSpace = lazy(() => import("@/components/CollaborativeSpace").then(module => ({ default: module.CollaborativeSpace })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(module => ({ default: module.ContactForm })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000000e6] text-white overflow-hidden pt-16 relative">
      <div className="absolute inset-0 bg-[#000000e6]" />
      
      <Header />
      <div className="relative bg-[#000000e6]">
        <HeroSection />
      </div>
      <div className="relative bg-primary">
        <FeaturesGrid />
      </div>
      <div className="relative bg-[#000000e6]">
        <Statistics />
      </div>
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <div id="community" className="relative bg-primary">
          <CommunitySection />
        </div>
        <div id="events" className="relative bg-[#000000e6]">
          <EventsSection />
        </div>
        <div id="st33" className="relative bg-primary">
          <St33Section />
        </div>
        <div id="opportunities" className="relative bg-[#000000e6]">
          <OpportunitiesSection />
        </div>
        <div id="showcase" className="relative bg-primary">
          <AppShowcase />
        </div>
        <div id="collaborative" className="relative bg-[#000000e6]">
          <CollaborativeSpace />
        </div>
        <div id="contact" className="relative bg-primary">
          <ContactForm />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;