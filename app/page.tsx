import HeroText from "@/components/HeroText";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <video src="/videos/ulaman-hero-video.mp4" autoPlay muted loop playsInline></video>
    <HeroText />
    </>
  );
}
