import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Serey Sunteang",
  description:
    "I am a developer with experience in various technologies including React, Next.js, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-gray-100 w-screen h-screen flex flex-col justify-between ${poppins.className}`}
      >
        <NavBar />
        <main className=" md:container  mx-auto py-12 mb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
