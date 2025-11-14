'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

/**
 * Parallax Trees Background
 * - Muncul setelah hero section (100vh)
 * - Scroll secara normal ke bawah (bukan fixed)
 * - Layer berbeda bergerak dengan kecepatan berbeda (parallax effect)
 * - Parallax-1 muncul dulu, kemudian parallax-2, lalu parallax-3
 */
export default function ParallaxTreesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Mulai tracking saat container masuk viewport
  });
  
  // Layer 1 (Background) - parallax-1.svg
  // Bergerak naik lalu berhenti (paling lambat)
  const layer1Y = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [200, -100, 300] // Naik dari bawah, berhenti di -100px
  );

  
  // Layer 2 (Middle Ground) - parallax-2.svg
  // Bergerak naik lebih cepat lalu berhenti
  const layer2Y = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [200, -200, 300] // Naik lebih cepat dari layer 1, berhenti di -200px
  );
  


  
  // Layer 3 (Foreground) - parallax-3.svg
  // Bergerak naik paling cepat lalu berhenti
  const layer3Y = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [900, -150, 1400] // naikkan angka pertama/terakhir supaya layer mulai & berakhir lebih bawah; ubah nilai tengah untuk seberapa jauh ia "naik"
  );
  

  
  return (
    <div 
      ref={containerRef}
      className="absolute top-[100vh] left-0 right-0 w-full h-[280vh] pointer-events-none"
    >
      {/* Layer 1 - Background Trees & Hills (parallax-1.svg) */}
      <motion.div
        style={{ 
          y: layer1Y
        }}
        className="absolute inset-x-0 top-0 z-0"
      >
        <div className="relative w-full h-[1100px]">
          <Image
            src="/parallax-1.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>
      
      {/* Layer 2 - Middle Ground Trees (parallax-2.svg) */}
      {/* Muncul dengan delay/jeda setelah layer 1 */}
      <motion.div
        style={{ 
          y: layer2Y,
        }}
        className="absolute inset-x-0 top-[30vh] z-5"
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
      
      {/* Layer 3 - Foreground Trees (parallax-3.svg) */}
      {/* Muncul paling terakhir, bergerak paling cepat */}
      <motion.div
        style={{ 
          y: layer3Y,
        }}
        className="absolute inset-x-0 top-[65vh] z-10"
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