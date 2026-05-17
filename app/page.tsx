"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RhymesWith from "@/components/RhymesWith";
import Philosophy from "@/components/Philosophy";
import PassportCallout from "@/components/PassportCallout";
import Footer from "@/components/Footer";
import AccessModal from "@/components/AccessModal";
import AppScreenshots from "@/components/AppScreenshots";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={open} />
      <main>
        <Hero onOpenModal={open} />
        <RhymesWith />
        <AppScreenshots />
        <Philosophy />
        <PassportCallout onOpenModal={open} />
      </main>
      <Footer />
      <AccessModal open={modalOpen} onClose={close} />
    </>
  );
}
