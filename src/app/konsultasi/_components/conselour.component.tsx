"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar } from "lucide-react";

type Counselor = {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  availability: string;
  image: string;
};

type CounselorProps = {
  counselors: Counselor[];
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function CounselorSection({ counselors }: CounselorProps) {
  const [selectedConselor, setSelectedConselor] = useState<number | null>(null);

  return (
    <motion.section 
      className="w-full py-16 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#3B7CA8] text-4xl font-black mb-3">
            Konselor Kami
          </h2>
          <p className="text-[#4A90C8] text-lg font-medium">
            Tim profesional berpengalaman dalam penanganan trauma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counselors.map((counselor) => (
            <motion.div
              key={counselor.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[20px] border-8 border-white/48 overflow-hidden cursor-pointer"
              onClick={() => setSelectedConselor(counselor.id)}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-b from-[#D2E6F7]  to-[#6BA5D6] flex items-center justify-center">
                <Image className="w-32 h-32 rounded-full object-contain" src={counselor.image} alt={counselor.name} width={128} height={128} />
              </div>
              
              <div className="p-6">
                <h3 className="text-[#2B6CB0] text-xl font-black mb-2">
                  {counselor.name}
                </h3>
                <p className="text-[#6BA5D6] font-semibold mb-3">
                  {counselor.specialization}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pengalaman:</span>
                    <span className="font-semibold">{counselor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold">⭐ {counselor.rating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Jadwal:</span>
                    <span className="font-semibold">{counselor.availability}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-bold rounded-xl transition-colors">
                  <Calendar className="inline mr-2" size={18} />
                  Jadwalkan Konsultasi
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}