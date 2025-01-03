import { lazy, Suspense } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Statistics } from "@/components/Statistics";
import { CommunitySection } from "@/components/CommunitySection";
import { EventsSection } from "@/components/EventsSection";
import { St33Section } from "@/components/St33Section";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { FeaturedTribes } from "@/components/FeaturedTribes";
import { InternshipsSection } from "@/components/InternshipsSection";
import { Testimonials } from "@/components/Testimonials";
import { MentorsSection } from "@/components/MentorsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Header />
      
      <main className="relative">
        <section className="bg-secondary">
          <HeroSection />
        </section>

        <section className="bg-primary">
          <Statistics />
        </section>

        <section className="bg-secondary" id="community">
          <CommunitySection />
        </section>

        <section className="bg-primary" id="events">
          <EventsSection />
        </section>

        <section className="bg-secondary">
          <FeaturedTribes />
        </section>

        <section className="bg-primary" id="st33">
          <St33Section />
        </section>

        <section className="bg-secondary" id="opportunities">
          <OpportunitiesSection />
        </section>

        <section className="bg-primary">
          <InternshipsSection />
        </section>

        <section className="bg-secondary">
          <Testimonials />
        </section>

        <section className="bg-primary">
          <MentorsSection />
        </section>
      </main>
    </div>
  );
};

export default Index;