"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Carousel from "./carousel/Carousel";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";

const images = [
  "/intro/intro-1.avif",
  "/intro/intro-2.avif",
  "/intro/intro-3.avif",
];

const text =
  "Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant town of Canggu.";

export default function IntroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 100%"],
  });

  const letters = text.split("");

  return (
    <section >
      {/* Headline */}
      <div
        ref={ref}
        className="bg-[#f0ebe2] py-24 md:py-32 lg:py-40 flex items-center justify-center px-10"
      >
        <p className="text-4xl leading-tight max-w-xl text-center">
          {letters.map((char, i) => {
            const start = i / letters.length;
            const end = start + 0.15;

            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["rgba(198,156,79,0.25)", "rgba(198,156,79,1)"],
            );

            return (
              <motion.span key={i} style={{ color }}>
                {char}
              </motion.span>
            );
          })}
        </p>
      </div>

      {/* ABOUT US */}
      <div className="bg-[#f0ebe2] px-20 grid grid-cols-2 min-h-screen">
        <div className=" border-2 px-15 py-10">
          <Carousel images={images} />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center gap-y-5 px-15">
          <h1 className="text-3xl text-[#c69c4f] mb-6">
            An award-winning eco-luxury resort offering a unique hideaway
            experience. Embrace authenticity, balance, and harmony with nature
            in a healing, luxurious environment.
          </h1>

          <p className="text-lg leading-relaxed text-gray-600">
            We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
            offers{" "}
            <i>
              a secluded, lush haven with luxurious amenities and impeccable
              service.{" "}
            </i>{" "}
            Immerse yourself in traditional Balinese culture and leave feeling
            renewed, all while minimizing your ecological footprint. Recharge
            your mind, body, and soul in this unique holistic retreat.
          </p>

          <div>
            <AnimatedLink
              href="/about"
              className="mt-8 text-[#c69c4f] tracking-widest"
            >
              ABOUT US
            </AnimatedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
