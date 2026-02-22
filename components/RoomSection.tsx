"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import data from "../data/siteData.json";
import { Room } from "@/types/room";
import RoomCard from "./cards/RoomCard";

export default function RoomSection() {
  const rooms: Room[] = data.rooms;

  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = listRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () => {
    listRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  return (
    <section className="bg-[#f0ebe2] pl-30 py-28">
      {/* Headline (CENTERED) */}
      <div className="flex justify-center mb-24">
        <h2 className="text-3xl text-[#c69c4f] max-w-xl text-center leading-tight">
          Discover cozy elegance, where tranquility meets Bali’s serene beauty.
        </h2>
      </div>

      <div className="grid grid-cols-[80px_1fr] gap-14">
        {/* Vertical Controls */}
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-20 h-20 border rounded-md text-2xl transition
              ${
                canScrollLeft
                  ? "cursor-pointer border-[#c69c4f] text-[#c69c4f] hover:bg-[#c69c4f]/10"
                  : "opacity-30 cursor-not-allowed border-gray-300 text-gray-400"
              }`}
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-20 h-20 border rounded-md text-2xl transition
              ${
                canScrollRight
                  ? "cursor-pointer border-[#c69c4f] text-[#c69c4f] hover:bg-[#c69c4f]/10"
                  : "opacity-30 cursor-not-allowed border-gray-300 text-gray-400"
              }`}
          >
            →
          </button>
        </div>

        {/* Horizontal Room List */}
        <div
          ref={listRef}
          onScroll={updateScrollState}
          className="flex gap-12 overflow-x-hidden scroll-smooth"
        >
          {rooms.map((room) => (
            <Link key={room.id} href={room.detailsHref} className="group block">
              <RoomCard imageUrl={room.imageUrl} />

              <div className="mt-6 max-w-[420px]">
                <h3 className="text-xl text-[#c69c4f] mb-2">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {room.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
