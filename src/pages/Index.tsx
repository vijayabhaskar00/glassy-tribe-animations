import { lazy, Suspense } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Statistics } from "@/components/Statistics";
import { CommunitySection } from "@/components/CommunitySection";
import { EventsSection } from "@/components/EventsSection";
import { St33Section } from "@/components/St33Section";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { AppShowcase } from "@/components/AppShowcase";
import { CollaborativeSpace } from "@/components/CollaborativeSpace";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Header />
      
      <main className="relative">
        <section className="bg-secondary">
          <HeroSection />
        </section>

        <section className="bg-primary">
          <FeaturesGrid />
        </section>

        <section className="bg-secondary" id="community">
          <CommunitySection />
        </section>

        <section className="bg-primary" id="events">
          <EventsSection />
        </section>

        <section className="bg-secondary">
          <Statistics />
        </section>

        <section className="bg-primary" id="st33">
          <St33Section />
        </section>

        <section className="bg-secondary" id="opportunities">
          <OpportunitiesSection />
        </section>

        <section className="bg-primary">
          <AppShowcase />
        </section>

        <section className="bg-secondary">
          <CollaborativeSpace />
        </section>

        <section className="bg-primary" id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;