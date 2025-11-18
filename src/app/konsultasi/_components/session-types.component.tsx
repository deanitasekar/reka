"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  MessageCircle,
  Users,
  Heart,
  Phone,
} from "lucide-react";

const icons = {
  MessageCircle: <MessageCircle size={24} />,
  Video: <Video size={24} />,
  Phone: <Phone size={24} />,
};

export type SessionType = {
  icon: keyof typeof icons;
  title: string;
  desc: string;
};

type TypesProps = {
  sessionTypes: SessionType[];
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function TypesSection({ sessionTypes }: TypesProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "individual" | "group"
  >("individual");

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
            Pilih Jenis Konsultasi
          </h2>
          <p className="text-[#4A90C8] text-lg font-medium">
            Kami menyediakan berbagai pilihan sesuai kebutuhan Anda
          </p>
        </div>

        {/* Toggle Individual/Group */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/55 backdrop-blur-md border-4 border-white rounded-[23px] p-2 inline-flex">
            <button
              onClick={() => setSelectedCategory("individual")}
              className={`px-8 py-3 rounded-[18px] font-semibold transition-all ${
                selectedCategory === "individual"
                  ? "bg-[#6BA5D6] text-white shadow-lg"
                  : "text-[#6BA5D6]"
              }`}
            >
              <Users className="inline mr-2" size={20} />
              Konsultasi Individual
            </button>
            <button
              onClick={() => setSelectedCategory("group")}
              className={`px-8 py-3 rounded-[18px] font-semibold transition-all ${
                selectedCategory === "group"
                  ? "bg-[#6BA5D6] text-white shadow-lg"
                  : "text-[#6BA5D6]"
              }`}
            >
              <Heart className="inline mr-2" size={20} />
              Konsultasi Kelompok
            </button>
          </div>
        </div>

        {/* Session Types Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sessionTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[20px] border-8 border-white/48 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#D2E6F7] rounded-full flex items-center justify-center mb-4 text-[#2B6CB0]">
                {icons[type.icon]}
              </div>
              <h3 className="text-[#2B6CB0] text-xl font-black mb-2">
                {type.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{type.desc}</p>
              <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-base font-semibold rounded-xl transition-colors shadow-md">
                Pilih Sesi
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
