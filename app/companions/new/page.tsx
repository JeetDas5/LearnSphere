import CompanionForm from "@/components/CompanionForm";
import React from "react";

const newCompanion = () => {
  return (
    <main className="min-lg:w-[40vw] min-mid:w-[70vw] items-center justify-center pt-0">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  );
};

export default newCompanion;
