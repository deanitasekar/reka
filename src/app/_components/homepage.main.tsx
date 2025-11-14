"use client";

import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import HeroSection from "../_components/hero.component";
import KenaliDiriSection from "./kenali-diri.component";
import BantuanSection from "./bantuan.section";
import PanduanResiliensiSection from "./panduan-resiliensi.component";
import MotionTreesBackground from "@/components/ui/motion-tree";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #C6E5F7 20%, #E5F2FF 58%, #C6E5F7 95%)",
        }}
      />

      <div
        className="
          pointer-events-none fixed inset-x-0 -top-44 h-[532px] -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle_at_center,#E8EBD6_0,#E8EBD6_40%,transparent_75%)]
          blur-3xl opacity-90 -z-10
        "
        aria-hidden="true"
      />

      <div className="absolute inset-0 w-full pointer-events-none z-0">
        <MotionTreesBackground />
      </div>

      <div className="relative z-10 flex-grow w-full flex flex-col">
        <Navbar />

        <HeroSection />

        <div className="pt-0 pb-8">
          <KenaliDiriSection />
        </div>

        <div className="py-8">
          <BantuanSection />
        </div>

        <div className="py-8">
          <PanduanResiliensiSection />
        </div>
      </div>

      <div className="relative z-20 mt-auto">
        <Footer />
      </div>
    </main>
  );
}
