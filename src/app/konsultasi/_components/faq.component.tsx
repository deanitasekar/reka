"use client";

import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const faqs = [
  {
    q: "Apakah konsultasi ini rahasia?",
    a: "Ya, semua sesi konsultasi dijamin kerahasiaannya sesuai kode etik profesional."
  },
  {
    q: "Bagaimana cara memulai konsultasi?",
    a: "Pilih jenis konsultasi, konselor, dan jadwal yang sesuai. Lakukan pembayaran dan Anda akan menerima link untuk sesi."
  },
  {
    q: "Apakah ada subsidi untuk korban bencana?",
    a: "Ya, kami menyediakan program subsidi khusus untuk korban bencana. Hubungi tim kami untuk informasi lebih lanjut."
  }
];

export default function FaqSection() {
  return (
    <motion.section 
      className="w-full py-16 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#3B7CA8] text-4xl font-black mb-3">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              // Animasi individual card
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-[20px] border-4 border-white/48 p-6"
            >
              <h3 className="text-[#2B6CB0] font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}