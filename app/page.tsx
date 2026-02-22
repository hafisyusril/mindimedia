import AnimatedHeadline from "@/components/IntroSection";
import IntroSection from "@/components/IntroSection";
import HeroText from "@/components/IntroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <video src="/videos/ulaman-hero-video.mp4" autoPlay muted loop playsInline></video>
    <IntroSection />
    </>
  );
}
