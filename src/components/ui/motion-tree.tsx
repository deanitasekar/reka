'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MotionTreesBackground() {
  return (
    <div 
      className="absolute top-[100vh] left-0 right-0 w-full h-[280vh] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-x-0 top-[80vh] z-0"
      >
        <div className="relative w-full h-[820px]">
          <Image
            src="/parallax-1.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-x-0 top-[45vh] -left-10 z-5"
      >
        <div className="relative w-full h-[2424px]">
          <Image
            src="/parallax-2.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>
      

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-x-0 top-[200vh] z-10"
      >
        <div className="relative w-full h-[2424px]">
          <Image
            src="/parallax-3.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}