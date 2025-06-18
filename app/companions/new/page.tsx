import CompanionForm from "@/components/CompanionForm";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermission } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const newCompanion = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const canCreateCompanion = await newCompanionPermission();

  return (
    <main className="min-lg:w-[40vw] min-mid:w-[70vw] items-center justify-center pt-0">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="companion limit reached"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade Your Plan</div>
          <h1>You&apos;ve Reached Your Limit</h1>
          <p>
            You&apos;ve reached our companion limit. Upgrade to create more
            companions and premium features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default newCompanion;
