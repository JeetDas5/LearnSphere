import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnSphere",
  description: "Your own AI Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <Navbar />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
