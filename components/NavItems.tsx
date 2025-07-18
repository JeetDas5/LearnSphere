"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Make sure this is imported if you're using Next.js

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Companions",
    href: "/companions",
  },
  {
    label: "My Journey",
    href: "/my-journey",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-2 md:gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href
              ? "text-primary font-semibold "
              : "hover:text-primary hover:scale-105 hover:opacity-105",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
