"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 z-50 w-full h-20
        flex items-center justify-between px-10
        transition-all duration-300
        ${scrolled ? "bg-[#f0ebe2] shadow-md" : "bg-transparent"}

      `}
    >
      {/* Left menu */}
      <div
        className={`flex gap-8 items-center ${scrolled ? "text-[#c69c4f]" : "text-white"}`}
      >
        {/* Burger */}
        <div className="group flex flex-col gap-2 w-15 cursor-pointer">
          <span
            className={`h-0.5 rounded-full transition-all duration-300
        ${scrolled ? "bg-[#c69c4f]" : "bg-white"}
        w-10 group-hover:w-12`}
          />
          <span
            className={`h-0.5 rounded-full transition-all duration-300
        ${scrolled ? "bg-[#c69c4f]" : "bg-white"}
        w-15 group-hover:w-12`}
          />
        </div>

        <Link href="/room">Villas</Link>
        <Link href="https://riversidespabyulaman.com/" target="_blank">
          Spa
        </Link>
        <Link href="https://earthbyulaman.com/" target="_blank">
          Dine
        </Link>
        <Link href="/retreats">Retreats</Link>
      </div>

      {/* Logo */}
      <div className="pr-30">
        <Link href="/">
          <Image
            src="/ulaman-logo-small.svg"
            alt="Ulaman Logo"
            width={80}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* CTA */}
      <div
        className={`border-2 ${scrolled ? "border-[#c69c4f]" : "text-white"} text-[#c69c4f]
        rounded-2xl px-8 py-3 hover:bg-[#c69c4f] hover:border-[#c69c4f] hover:text-white
        transition-colors duration-300 cursor-pointer`}
      >
        Stay With Us
      </div>
    </motion.nav>
  );
}
