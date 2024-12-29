import { HeroSection } from "@/components/HeroSection";
import { CommunitySection } from "@/components/CommunitySection";
import { EventsSection } from "@/components/EventsSection";
import { St33Section } from "@/components/St33Section";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { Statistics } from "@/components/Statistics";
import { AppShowcase } from "@/components/AppShowcase";
import { CollaborativeSpace } from "@/components/CollaborativeSpace";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { lazy, Suspense } from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center bg-fixed opacity-5"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />
      <Header />
      <HeroSection />
      <div id="community">
        <Suspense fallback={<div>Loading...</div>}>
          <CommunitySection />
        </Suspense>
      </div>
      <div id="events">
        <Suspense fallback={<div>Loading...</div>}>
          <EventsSection />
        </Suspense>
      </div>
      <div id="st33">
        <Suspense fallback={<div>Loading...</div>}>
          <St33Section />
        </Suspense>
      </div>
      <div id="opportunities">
        <Suspense fallback={<div>Loading...</div>}>
          <OpportunitiesSection />
        </Suspense>
      </div>
      <div id="stats">
        <Suspense fallback={<div>Loading...</div>}>
          <Statistics />
        </Suspense>
      </div>
      <div id="showcase">
        <Suspense fallback={<div>Loading...</div>}>
          <AppShowcase />
        </Suspense>
      </div>
      <div id="collaborative">
        <Suspense fallback={<div>Loading...</div>}>
          <CollaborativeSpace />
        </Suspense>
      </div>
      <div id="contact">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Index;