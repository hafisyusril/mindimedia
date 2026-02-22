type CarouselControlsProps = {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function CarouselControls({
  total,
  current,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center  gap-6">
      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="w-12 h-12 border rounded-lg border-[#c69c4f] cursor-pointer flex items-center justify-center bg-[#c69c4f]/50 text-white transition"
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Indicators */}
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all
              ${i === current ? "bg-white/90" : "bg-white/40"}
            `}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-12 h-12 border rounded-lg border-[#c69c4f]  cursor-pointer flex items-center justify-center bg-[#c69c4f]/50 text-white transition"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
