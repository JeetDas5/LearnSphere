import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/LearnSphereLogo.png"
            alt="logo"
            width={50}
            height={50}
          />
          <p className="text-2xl max-sm:hidden font-bold">LearnSphere</p>
        </div>
      </Link>
      <div className="flex items-center gap-0 md:gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
