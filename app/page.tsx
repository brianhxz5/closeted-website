import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RhymesWith from "@/components/RhymesWith";
import Philosophy from "@/components/Philosophy";
import PassportCallout from "@/components/PassportCallout";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RhymesWith />
        <Philosophy />
        <PassportCallout />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
