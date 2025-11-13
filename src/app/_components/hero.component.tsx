"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20">
      {/* BUBBLES */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[36%] left-[6%] lg:left-[10%] w-[260px] h-[110px] flex items-center justify-center z-10 rounded-full"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(10px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-base text-center px-3 leading-tight">
          Semangat ya buat <br /> kamu!!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[5%] lg:bottom-[35%] lg:left-[7%] w-[260px] h-[110px] flex items-center justify-center z-10 rounded-full"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(10px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Hai, apakah <br /> kamu baik-baik saja?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[36%] right-[6%] lg:right-[10%] w-[260px] h-[110px] flex items-center justify-center z-10 rounded-full"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(10px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Siapa yang menjadi <br /> sandaranmu saat ini?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute bottom-[30%] right-[5%] lg:bottom-[35%] lg:right-[7%] w-[260px] h-[110px] flex items-center justify-center z-10 rounded-full"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(10px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Setiap langkah kecilmu <br /> itu berarti!
        </p>
      </motion.div>

      {/* ==== TEKS UTAMA ==== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-8">
        <h1
          className="text-5xl md:text-5xl font-bold text-[#4A90C8] mb-5"
          style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `,
          }}
        >
          Pulihkan Diri, Kuatkan Jiwa
        </h1>

        <p
          className="text-base md:text-lg font-semibold text-[#6BA5D6] mb-10 max-w-2xl mx-auto"
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

        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl mb-6">
          Lihat Lebih Lanjut
        </button>

        {/* HERO IMAGE */}
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[200px] sm:w-[280px] md:w-[360px] lg:w-[400px] mx-auto -translate-y-20"
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