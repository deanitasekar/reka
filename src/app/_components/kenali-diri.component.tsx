'use client';

import Image from "next/image";

export default function KenaliDiriSection() {
  const items = [
    {
      src: "/kenali-1.png",
      label: "Tumbuh dan Bangkit"
    },
    {
      src: "/kenali-2.png",
      label: "Luka yang Terabaikan"
    },
    {
      src: "/kenali-3.png",
      label: "Membutuhkan Dukungan"
    }
  ];

  return (
    <section className="w-full py-20 px-4 overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 space-y-2">
        <h3 className="text-[#4A90C8] text-xl md:text-2xl font-medium">
          Kenali Diri Anda
        </h3>
        <h2 className="text-[#3B7CA8] text-3xl md:text-4xl font-bold">
          Dimanakah Posisi Emosi Anda?
        </h2>
      </div>

      {/* Gambar Emosi */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
        
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-default">
            
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.label.replace("\n", " ")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <p className="mt-6 text-center font-bold text-[#333333] text-lg leading-snug whitespace-pre-line">
              {item.label}
            </p>
            
          </div>
        ))}

      </div>
    </section>
  );
}