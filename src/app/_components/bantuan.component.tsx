"use client";

import { motion } from "framer-motion"

export default function BantuanSection() {
  return (
    <section className="w-full py-12 sm:py-8 md:py-8 px-4 md:px-12 overflow-hidden relative min-h-screen flex flex-col items-center justify-end pb-20 sm:pb-28">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 items-end">
        <div className="hidden lg:block"></div>

        <motion.div
          className="absolute left-8 md:left-12 lg:left-16 top-[15%] lg:top-1/4 w-40 sm:w-48 lg:w-56 xl:w-64 h-auto z-10 hidden lg:block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover="hover"
        >
          <motion.img
            src="/papan-bantuan.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.8))",
            }}
            variants={{
              rest: { opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <img
            src="/papan-bantuan.svg"
            alt="Papan Bantuan"
            className="relative w-full h-auto z-10"
          />
        </motion.div>

        <motion.div 
          className="lg:hidden text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Bantuan Profesional
          </h2>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
            <div
            className="bg-white rounded-[20px] border-8 p-6 sm:p-8 h-auto w-full max-w-[340px] flex flex-col items-center justify-center gap-4"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
            >
            <img src="/hotline-krisis.svg" alt="Hotline Krisis" className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0" />

            <h3 className="text-[#2B6CB0] text-xl sm:text-2xl font-black text-center">
              Hotline Krisis 24/7
            </h3>

            <p className="text-black text-sm sm:text-base font-medium leading-relaxed text-center text-black">
              Hubungi kami kapan saja. <br />
              Kami ada untuk <br />
              mendengarkan.
            </p>

            <div className="h-1"></div>

            <button className="w-full py-3 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-sm sm:text-base font-bold rounded-xl transition-colors shadow-md hover:shadow-lg">
              Hubungi Kami
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className="bg-white rounded-[20px] border-8 p-6 sm:p-8 h-auto w-full max-w-[340px] flex flex-col items-center justify-center gap-4"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
          >
          
            <img src="/konsultasi.svg" alt="Konsultasi" className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0" />

            <h3 className="text-[#2B6CB0] text-xl sm:text-2xl font-black text-center">
              Konsultasi
            </h3>

            <p className="text-black text-sm sm:text-base font-medium leading-relaxed text-center text-black">
              Temukan psikolog atau konselor <br />
              dalam Penanganan Trauma <br />
              Pasca Bencana (PTSD)
            </p>

            <div className="h-1"></div>
            <button className="w-full py-3 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-sm sm:text-base font-bold rounded-xl transition-colors shadow-md hover:shadow-lg">
              Jadwalkan Sesi
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}