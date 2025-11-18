"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

type EmergencyContact = {
  name: string;
  number: string;
  available: string;
};

type HeroProps = {
  emergencySection: {
    title: string;
    desc: string;
    contacts: EmergencyContact[];
  };
};

export default function HeaderSection({ emergencySection }: HeroProps) {
  return (
    <section className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl font-bold text-[#4A90C8] mb-5"
          style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6)
            `,
          }}
        >
          Konsultasi Pemulihan Trauma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-semibold text-[#6BA5D6] mb-10 max-w-2xl mx-auto"
          style={{
            textShadow: `0 0 15px rgba(255, 255, 255, 0.7)`,
          }}
        >
          Dapatkan dukungan profesional dari konselor berpengalaman dalam menangani trauma pasca bencana
        </motion.p>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#FFD5D5]/30 backdrop-blur-md border-4 border-white/48 rounded-[23px] p-6 mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="text-[#E74C3C]" size={28} />
            <h3 className="text-xl font-bold text-[#E74C3C]">{emergencySection.title}</h3>
          </div>
          <p className="text-[#333] font-medium mb-4">{emergencySection.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {emergencySection.contacts.map((contact, idx) => (
              <div key={idx} className="bg-white/70 rounded-xl px-6 py-3">
                <p className="font-bold text-[#E74C3C] text-2xl">{contact.number}</p>
                <p className="text-sm text-gray-700">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.available}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}