"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-60 pb-20">
      {/* Text Bubbles */}
      <div className="absolute top-[45%] left-[5%] lg:left-[10%] w-[334px] h-[135px] flex items-center justify-center z-10 pointer-events-none rounded-full">
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(12.35px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-sm lg:text-xl text-center px-4">
          Semangat ya buat <br /> kamu!!
        </p>
      </div>

      <div className="absolute bottom-[15%] left-[2%] lg:bottom-[20%] lg:left-[5%] w-[334px] h-[135px] flex items-center justify-center z-10 pointer-events-none rounded-full">
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(12.35px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-sm lg:text-lg text-center px-6 leading-tight">
          Hai, apakah <br /> kamu baik-baik saja?
        </p>
      </div>

      <div className="absolute top-[48%] right-[5%] lg:right-[10%] w-[334px] h-[135px] flex items-center justify-center z-10 pointer-events-none rounded-full">
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(12.35px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-sm lg:text-lg text-center px-6 leading-tight">
          Siapa yang menjadi <br /> sandaranmu saat ini?
        </p>
      </div>

      <div className="absolute bottom-[18%] right-[2%] lg:bottom-[25%] lg:right-[5%] w-[334px] h-[135px] flex items-center justify-center z-10 pointer-events-none rounded-full">
        <div
          className="absolute inset-0 bg-[#FCFFF8] rounded-full"
          style={{ filter: "blur(12.35px)" }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-sm lg:text-lg text-center px-6 leading-tight">
          Setiap langkah kecilmu <br /> itu berarti!
        </p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-6xl md:text-5xl font-bold text-[#4A90C8] mb-6"
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
          className="text-xl font-semibold md:text-2xl text-[#6BA5D6] mb-12 max-w-2xl mx-auto"
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

        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-semibold text-base px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mb-8">
          Lihat Lebih Lanjut
        </button>

        {/* Hero Image */}
        <div className="relative w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto">
          <Image
            src="/hero-orang.png"
            alt="Person"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
