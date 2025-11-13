"use client";

import Image from "next/image";
import TiltedCard from "@/components/ui/tilted-card.jsx";

export default function KenaliDiriSection() {
  const items = [
    {
      src: "/kenali-1.svg",
      label: "Tumbuh dan Bangkit",
      caption: "Proses penyembuhan diri",
    },
    {
      src: "/kenali-2.svg",
      label: "Luka yang Terabaikan",
      caption: "Jangan biarkan luka batin",
    },
    {
      src: "/kenali-3.svg",
      label: "Membutuhkan Dukungan",
      caption: "Cari bantuan profesional",
    },
  ];

  return (
    <section className="w-full py-20 px-4 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-2.5">
        <h3 className="text-[#4A90C8] text-4xl md:text-3xl font-medium">
          Kenali Dirimu
        </h3>
        <h2 className="text-[#3B7CA8] text-5xl md:text-4xl font-black">
          Dimanakah Posisi Emosimu?
        </h2>
      </div>

      {/* Gambar Emosi */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-default"
          >
            {/* Wrapper Tilt Card */}
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <TiltedCard
                imageSrc={item.src}
                altText={item.label}
                captionText={item.caption}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={15}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
                isCircle={true}
              />
            </div>

            <p className="mt-8 text-center font-medium text-[#333333] text-lg leading-snug whitespace-pre-line transition-colors duration-300 group-hover:font-bold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}