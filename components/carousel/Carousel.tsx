"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CarouselControls from "./CarouselControl";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-200 overflow-hidden bg-transparent">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`Carousel image ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <CarouselControls
        total={images.length}
        current={current}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  );
}
