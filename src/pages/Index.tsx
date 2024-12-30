import { lazy, Suspense } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

// Lazy load components that are not immediately visible
const CommunitySection = lazy(() => import("@/components/CommunitySection").then(module => ({ default: module.CommunitySection })));
const EventsSection = lazy(() => import("@/components/EventsSection").then(module => ({ default: module.EventsSection })));
const St33Section = lazy(() => import("@/components/St33Section").then(module => ({ default: module.St33Section })));
const OpportunitiesSection = lazy(() => import("@/components/OpportunitiesSection").then(module => ({ default: module.OpportunitiesSection })));
const Statistics = lazy(() => import("@/components/Statistics").then(module => ({ default: module.Statistics })));
const AppShowcase = lazy(() => import("@/components/AppShowcase").then(module => ({ default: module.AppShowcase })));
const CollaborativeSpace = lazy(() => import("@/components/CollaborativeSpace").then(module => ({ default: module.CollaborativeSpace })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(module => ({ default: module.ContactForm })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden pt-16 relative">
      {/* Main background image with loading optimization */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center bg-fixed opacity-5"
        aria-hidden="true"
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -top-1/2 left-1/3 w-1/4 h-screen rotate-45 bg-gradient-to-b from-blue-500/5 to-transparent blur-2xl transform-gpu" />
        <div className="absolute -bottom-1/2 right-1/3 w-1/4 h-screen -rotate-45 bg-gradient-to-t from-purple-500/5 to-transparent blur-2xl transform-gpu" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <Header />
      <HeroSection />
      
      {/* Lazy loaded sections with loading fallback */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <div id="community">
          <CommunitySection />
        </div>
        <div id="events">
          <EventsSection />
        </div>
        <div id="st33">
          <St33Section />
        </div>
        <div id="opportunities">
          <OpportunitiesSection />
        </div>
        <div id="stats">
          <Statistics />
        </div>
        <div id="showcase">
          <AppShowcase />
        </div>
        <div id="collaborative">
          <CollaborativeSpace />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;