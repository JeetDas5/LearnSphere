import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the explorer"
          topic="Neural Network of the brain"
          subject="sciene"
          duration={30}
          color="#ff4cd2"
        />
        <CompanionCard
          id="456"
          name="Verba the Vocabulary builder"
          topic="language"
          subject="English Litarature"
          duration={40}
          color="#ed0311"
        />
        <CompanionCard
          id="112"
          name="Comunty the wizerd"
          topic="Derivatives and Integrals"
          subject="sciene"
          duration={45}
          color="#e5d0ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
