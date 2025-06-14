import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <main className="flex items-center justify-center w-full">
      <SignIn />
    </main>
  );
}
