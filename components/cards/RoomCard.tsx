"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageUrl: string;
};

export default function RoomCard({ imageUrl }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-105 h-130 rounded-xl overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt=""
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
