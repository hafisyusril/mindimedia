import IntroSection from "@/components/IntroSection";
import RoomSection from "@/components/RoomSection";

export default function Home() {
  return (
    <>
    <video src="/videos/ulaman-hero-video.mp4" autoPlay muted loop playsInline></video>
    <IntroSection />
    <RoomSection />
    </>
  );
}
