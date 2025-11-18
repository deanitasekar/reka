"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Pastikan Link diimport
import TiltedCard from "@/components/ui/tilted-card.jsx";
import { X } from "lucide-react";

interface ContentItem {
  id: number;
  src: string;
  label: string;
  caption: string;
  title: string;
  gejala: string[];
  langkah: string;
  buttonText: string;
  link: string;
}

export default function KenaliDiriSection() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const items: ContentItem[] = [
    {
      id: 1,
      src: "/kenali-1.svg",
      label: "Tumbuh dan Bangkit",
      caption: "Proses penyembuhan diri",
      title: "#1 Tumbuh dan Bangkit",
      gejala: [
        "Mulai kembali beraktivitas",
        "Fokus membantu sekitar",
        "Merasakan rasa syukur kecil",
        "Siap melanjutkan hidup.",
      ],
      langkah: "Anda siap membangun resiliensi dan membagikan kisah.",
      buttonText: "Baca Kisah Harapan",
      link: "/informasi",
    },
    {
      id: 2,
      src: "/kenali-2.svg",
      label: "Luka yang Terabaikan",
      caption: "Jangan biarkan luka batin",
      title: "#2 Luka yang Terabaikan",
      gejala: [
        "Sulit tidur/mimpi buruk",
        "Menyendiri",
        "Sering panik",
        "Menghindari tempat/orang yang mengingatkan kejadian.",
      ],
      langkah: "Anda perlu validasi emosi dan dukungan mendesak.",
      buttonText: "Baca Kisah Harapan",
      link: "/informasi",
    },
    {
      id: 3,
      src: "/kenali-3.svg",
      label: "Membutuhkan Dukungan",
      caption: "Cari bantuan profesional",
      title: "#3 Membutuhkan Dukungan",
      gejala: [
        "Fluktuasi emosi drastis",
        "Merasa bersalah atas kejadian",
        "Sulit fokus",
        "Butuh teman bicara rutin.",
      ],
      langkah:
        "Anda perlu struktur rutinitas baru dan teknik menenangkan diri.",
      buttonText: "Konsultasikan Segera",
      link: "/konsultasi",
    },
  ];

  return (
    <>
      <section className="w-full py-16 sm:py-8 md:py-8 px-4 overflow-hidden relative min-h-screen flex flex-col items-center justify-start">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-2">
          <h3 className="text-[#4A90C8] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
            Kenali Dirimu
          </h3>
          <h2 className="text-[#3B7CA8] text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Dimanakah Posisi Emosimu?
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10 md:gap-12 lg:gap-20">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <TiltedCard
                  imageSrc={item.src}
                  altText={item.label}
                  captionText={item.caption}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={15}
                  scaleOnHover={1.0}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  isCircle={true}
                />
              </div>

              <p className="mt-6 text-center font-medium text-[#333333] text-base sm:text-lg leading-snug whitespace-pre-line transition-colors duration-300 group-hover:font-bold group-hover:text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div
            className="relative w-full max-w-4xl rounded-4xl p-6 sm:p-8 md:p-10 shadow-2xl border-8 border-[#ffffff7a] bg-cover bg-center bg-no-repeat overflow-y-auto max-h-[90vh]"
            style={{
              backgroundImage: "url('/kenali-card.svg')",
            }}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white bg-white/20 hover:bg-white/30 rounded-full border-2 border-white transition-colors z-20"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Judul Modal */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 pr-8">
              {selectedItem.title}
            </h2>

            <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center">
              {/* Text Content */}
              <div className="flex-1 w-full space-y-4 sm:space-y-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg">
                  <h4 className="text-[#7A512F] text-lg sm:text-xl font-bold mb-3">
                    Gejala umum
                  </h4>
                  <ul className="space-y-2">
                    {selectedItem.gejala.map((g, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 font-medium text-sm sm:text-base leading-relaxed"
                      >
                        <span className="mr-2 text-[#7A512F]">•</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Langkah Cepat */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg">
                  <h4 className="text-[#6D5446] text-lg sm:text-xl font-bold mb-2">
                    Langkah Cepat
                  </h4>
                  <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    {selectedItem.langkah}
                  </p>
                </div>

                <Link
                  href={selectedItem.link}
                  className="block md:hidden w-full mt-2"
                >
                  <button className="w-full bg-[#6CA5D6] hover:bg-[#5b90bf] text-white font-bold py-3 rounded-xl transition-colors shadow-lg text-sm sm:text-base">
                    {selectedItem.buttonText}
                  </button>
                </Link>
              </div>

              {/* Image Desktop */}
              <div className="hidden md:flex flex-1 flex-col items-center justify-center relative">
                <div className="w-72 h-72 rounded-full flex items-center justify-center">
                  <div className="relative w-72 h-72">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full max-w-[48%] mt-6">
              <Link href={selectedItem.link} className="w-full block">
                <button className="w-full bg-[#6CA5D6] hover:bg-[#5b90bf] text-white font-bold py-4 rounded-xl transition-colors shadow-lg text-lg">
                  {selectedItem.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
