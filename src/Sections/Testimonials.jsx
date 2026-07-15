import React from 'react';
import { motion } from 'framer-motion';

import yellowLine from '../assets/hero/Vector 5.png';
// दोनों तरफ फ्लोट होने वाले अवतार इमेजेस
import avatarLeft1 from '../assets/hero/Ellipse 255.png';  // Left Top
import avatarLeft2 from '../assets/hero/Ellipse 256.png';  // Left Small Top
import avatarLeft3 from '../assets/hero/Ellipse 257.png';  // Left Mid Large
import avatarLeft4 from '../assets/hero/Ellipse 258.png';  // Left Bottom

import avatarRight1 from '../assets/hero/Ellipse 259.png'; // Right Top
import avatarRight2 from '../assets/hero/Ellipse 260.png'; // Right Small Top
import avatarRight3 from '../assets/hero/Ellipse 261.png'; // Right Mid
import avatarRight4 from '../assets/hero/Ellipse 262.png'; // Right Bottom Large

const Testimonials = () => {

  // फिक्स्ड ड्यूरेशन ऐरे (ताकि बिना किसी ग्लिच या री-रेंडर झटके के सुचारू रूप से फ्लोटिंग हो)
  const floatEffect = (delayValue, customDuration = 4) => ({
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: customDuration, 
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delayValue
      }
    }
  });

  const avatarEntrance = (delayValue) => ({
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut", delay: delayValue }
  });

  return (
    <section className="relative w-full bg-white py-14 px-4 sm:px-6 md:px-12 overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center mb-16 select-none z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-[3.5rem] font-normal text-[#111111] leading-[1.2] md:leading-[1.15] tracking-tight font-primary"
        >
          <span className="relative px-3 py-1 md:px-4 md:py-0.5 rounded-full bg-[#d7eedd] inline-block align-middle mr-1 md:mr-2 text-2xl sm:text-3xl md:text-[3.5rem]">
            What
          </span>{' '}
          our customer <br className="block sm:hidden" /> says{' '}
          <span className="relative inline-block mt-2 sm:mt-0">
            About Us
            <motion.img 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              src={yellowLine} 
              alt="" 
              className="absolute -left-2 -bottom-1 w-[115%] -z-10 h-auto pointer-events-none origin-left"
            />
          </span>
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-[45px] flex items-center justify-center">
        
        {/* ================= LEFT SIDE FLOATING AVATARS (Desktop Only) ================= */}
        <div className="absolute left-0 top-0 bottom-0 w-[28%] hidden lg:block select-none pointer-events-none">
          {/* 1. Left Top (Grey shirt) */}
          <motion.div 
            {...avatarEntrance(0.1)}
            {...floatEffect(0, 3.8)}
            className="absolute left-[25%] top-[-40%] w-[90px] h-[90px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarLeft1} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* 2. Left Small (Red shirt) */}
          <motion.div 
            {...avatarEntrance(0.3)}
            {...floatEffect(0.5, 4.2)}
            className="absolute left-[0%] top-[10%] w-[65px] h-[65px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarLeft2} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>

          {/* 3. Left Mid Large (Blue glasses) */}
          <motion.div 
            {...avatarEntrance(0.2)}
            {...floatEffect(0.2, 4.5)}
            className="absolute left-[40%] top-[35%] w-[140px] h-[140px] rounded-full overflow-hidden shadow-md"
          >
            <img src={avatarLeft3} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>

          {/* 4. Left Bottom */}
          <motion.div 
            {...avatarEntrance(0.4)}
            {...floatEffect(0.7, 3.9)}
            className="absolute left-[0%] bottom-[-15%] w-[75px] h-[75px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarLeft4} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* ================= CENTRAL TESTIMONIAL CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative max-w-xl bg-[#F4F9F6] rounded-[32px] sm:rounded-[40px] px-6 py-10 md:px-14 md:py-12 text-center shadow-sm z-10 mx-2 sm:mx-6 border border-[#e8f5ed] overflow-hidden sm:overflow-visible"
        >
          {/* Quotes Icon Left */}
          <span className="absolute left-2 top-0 sm:top-3 text-[5rem] sm:text-[7rem] leading-none text-[#CFE4D9] font-serif select-none pointer-events-none opacity-60 sm:opacity-100">
            “
          </span>

          {/* Testimonial Quote */}
          <p className="text-[#333333] text-sm sm:text-base md:text-[18px] leading-[1.7] font-normal font-secondary relative z-10 px-2 sm:px-4">
            Elementum delivered the site with in the timeline as they requested. 
            In the end, the client found a 50% increase in traffic within days since its launch. 
            They also had an impressive ability to use technologies that the company hasn't used, 
            which have also proved to be easy to use and reliable.
          </p>

          {/* Quotes Icon Right */}
          <span className="absolute right-4 bottom-[-15px] sm:-bottom-10 text-[5rem] sm:text-[7rem] leading-none text-[#CFE4D9] font-serif select-none pointer-events-none opacity-60 sm:opacity-100">
            ”
          </span>
        </motion.div>

        {/* ================= RIGHT SIDE FLOATING AVATARS (Desktop Only) ================= */}
        <div className="absolute right-0 top-0 bottom-0 w-[28%] hidden lg:block select-none pointer-events-none">
          {/* 1. Right Top (Pink apron guy) */}
          <motion.div 
            {...avatarEntrance(0.2)}
            {...floatEffect(0.3, 4.1)}
            className="absolute right-[5%] top-[-45%] w-[95px] h-[95px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarRight1} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* 2. Right Small Top (Blue cap guy) */}
          <motion.div 
            {...avatarEntrance(0.4)}
            {...floatEffect(0.8, 3.7)}
            className="absolute right-[45%] top-[-10%] w-[65px] h-[65px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarRight2} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>

          {/* 3. Right Mid (Black coat guy) */}
          <motion.div 
            {...avatarEntrance(0.3)}
            {...floatEffect(0.1, 4.3)}
            className="absolute right-[60%] top-[30%] w-[105px] h-[105px] rounded-full overflow-hidden shadow-sm"
          >
            <img src={avatarRight3} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>

          {/* 4. Right Bottom Large (Red shirt smiling) */}
          <motion.div 
            {...avatarEntrance(0.1)}
            {...floatEffect(0.6, 4.6)}
            className="absolute right-[5%] bottom-[-20%] w-[150px] h-[150px] rounded-full overflow-hidden shadow-md"
          >
            <img src={avatarRight4} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>
        </div>

      </div>

      {/* ================= MOBILE & TABLET RESPONSIVE FLOATING AVATARS ================= */}
      <div className="flex lg:hidden flex-wrap justify-center gap-4 mt-12 px-6">
        {[
          { src: avatarLeft3, delay: 0.1, dur: 4.0 },
          { src: avatarRight4, delay: 0.3, dur: 4.4 },
          { src: avatarLeft1, delay: 0.2, dur: 3.8 },
          { src: avatarRight1, delay: 0.4, dur: 4.2 }
        ].map((avatar, idx) => (
          <motion.div
            key={idx}
            {...avatarEntrance(avatar.delay)}
            {...floatEffect(avatar.delay, avatar.dur)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md border-2 border-white"
          >
            <img src={avatar.src} alt="Customer" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;