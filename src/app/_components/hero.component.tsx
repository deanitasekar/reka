"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";
import RotatingText from "@/components/ui/rotating-text";

const bubbleTransition: Transition = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut",
  times: [0, 0.2, 0.8, 1],
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateShadow = () => {
    if (!characterRef.current) return "0px 0px 30px rgba(255, 255, 255, 1)";

    const rect = characterRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const sensitivity = 3.5;

    const deltaX = (mousePosition.x - centerX) / sensitivity;
    const deltaY = (mousePosition.y - centerY) / sensitivity;

    return `
      ${deltaX}px ${deltaY}px 3px rgba(255, 255, 255, 1.0),
      
      ${deltaX * 1.2}px ${deltaY * 1.2}px 12px rgba(255, 255, 255, 1.0),
      
      ${deltaX * 1.5}px ${deltaY * 1.5}px 28px rgba(255, 255, 255, 0.95),
      
      ${deltaX * 0.8}px ${deltaY * 0.8}px 40px rgba(200, 240, 255, 0.8),
      
      ${deltaX * 1.8}px ${deltaY * 1.8}px 50px rgba(230, 240, 250, 0.7),
      
      ${deltaX * 2.2}px ${deltaY * 2.2}px 70px rgba(255, 255, 255, 0.85)
    `;
  };

  const handleScrollToKenaliDiri = () => {
    const kenaliDiriSection = document.getElementById('kenali-diri-section');
    if (kenaliDiriSection) {
      kenaliDiriSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-5 md:pb-5">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-8%] w-[180px] sm:w-60 md:w-[300px] lg:w-[340px] opacity-80"
        >
          <Image src="/cloud.svg" alt="cloud" width={400} height={250} />
        </motion.div>
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[4%] w-[150px] sm:w-[200px] md:w-60 lg:w-[280px] opacity-70"
        >
          <Image src="/cloud.svg" alt="cloud" width={320} height={200} />
        </motion.div>
        <motion.div
          animate={{ y: [-18, 18, -18], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[2%] w-[120px] sm:w-40 md:w-[200px] lg:w-[220px] opacity-60"
        >
          <Image src="/cloud.svg" alt="cloud" width={260} height={170} />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-[-10%] w-[180px] sm:w-60 md:w-[300px] lg:w-[340px] opacity-80"
        >
          <Image src="/cloud.svg" alt="cloud" width={400} height={250} />
        </motion.div>
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[4%] w-[150px] sm:w-[200px] md:w-60 lg:w-[280px] opacity-70"
        >
          <Image src="/cloud.svg" alt="cloud" width={320} height={200} />
        </motion.div>
        <motion.div
          animate={{ y: [-18, 18, -18], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32%] right-[2%] w-[120px] sm:w-40 md:w-[200px] lg:w-[220px] opacity-60"
        >
          <Image src="/cloud.svg" alt="cloud" width={260} height={170} />
        </motion.div>
      </div>

      {/* Bubbles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 0 }}
        className="hidden lg:flex absolute top-[35%] sm:top-[38%] md:top-[40%] left-[3%] sm:left-[5%] md:left-[7%] lg:left-[10%] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-20 sm:h-[90px] md:h-[100px] lg:h-[110px] items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-2 sm:px-3 leading-tight">
          Tidak apa-apa untuk <br /> merasa tidak baik-baik saja.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 3 }}
        className="hidden lg:flex absolute bottom-[30%] sm:bottom-[32%] md:bottom-[33%] left-[3%] sm:left-[5%] md:left-[7%] lg:left-[10%] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-20 sm:h-[90px] md:h-[100px] lg:h-[110px] items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-2 sm:px-3 leading-tight">
          Ambil napas perlahan, <br /> satu langkah dulu.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 6 }}
        className="hidden lg:flex absolute top-[35%] sm:top-[38%] md:top-[40%] right-[3%] sm:right-[5%] md:right-[7%] lg:right-[10%] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-20 sm:h-[90px] md:h-[100px] lg:h-[110px] items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-2 sm:px-3 leading-tight">
          Izinkan dirimu untuk <br /> beristirahat sejenak.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 9 }}
        className="hidden lg:flex absolute bottom-[30%] sm:bottom-[32%] md:bottom-[33%] right-[3%] sm:right-[5%] md:right-[7%] lg:right-[10%] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-20 sm:h-[90px] md:h-[100px] lg:h-[110px] items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-2 sm:px-3 leading-tight">
          Kamu tidak sendirian, <br /> kami ada bersamamu.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-8 sm:mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A90C8] mb-4 flex flex-col items-center tracking-tight">
          <span className="leading-tight">Langkah Pertama Menuju</span>

          <div className="mt-2 sm:mt-3">
            <RotatingText
              texts={["Pemulihan.", "Kekuatan.", "Harapan.", "Kedamaian."]}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.04}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              rotationInterval={3000}
              mainClassName="bg-white text-[#4A90C8] px-4 sm:px-6 py-1 sm:py-2 rounded-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-sm"
              splitLevelClassName="overflow-hidden pb-1"
            />
          </div>
        </h1>

        <p
          className="text-sm sm:text-base md:text-xl font-semibold text-[#6BA5D6] mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
          style={{
            textShadow: `
              0 0 15px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5)
            `,
          }}
        >
          Temukan ruang tenang untuk mengenali perasaanmu dan mulai langkah
          kecil menuju pulih
        </p>

        <button 
          onClick={handleScrollToKenaliDiri}
          className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-6"
        >
          Lihat Lebih Lanjut
        </button>

        <motion.div
          ref={characterRef}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] mx-auto lg:mb-6 xl:mb-8 2xl:mb-8"
          style={{
            filter: `drop-shadow(${calculateShadow()})`,
            willChange: "filter",
          }}
        >
          <Image
            src="/character_hero.svg"
            alt="Person"
            width={460}
            height={460}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}