import React from 'react';
import { motion } from 'framer-motion';

import yellowLine from '../assets/hero/Vector 5.png';         // पीली ब्रश लाइन
import vector2517 from '../assets/features/Vector 2517.png'; // लाल लहर

const Services = () => {
  const servicesData = [
    {
      id: 1,
      tagline: 'Office of multiple interest content',
      title: 'Colaborative & partnership',
      hasSticker: false,
    },
    {
      id: 2,
      tagline: 'The hanger US Air force digital experimental',
      title: 'We talk about our weight',
      hasSticker: false,
    },
    {
      id: 3,
      tagline: 'Delta faucet content, social, digital',
      title: 'Piloting digital confidence',
      hasSticker: true,
    },
  ];

  // हेडिंग और टेक्स्ट के लिए फेड-इन
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, delay: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-24">
      
      {/* ================= FIXED BACKGROUND LAYERING ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.95, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute top-10 right-0 w-[55%] max-w-[650px] h-auto pointer-events-none hidden md:block select-none z-0"
      >
        <img 
          src={vector2517} 
          alt="Red Line Wave" 
          className="w-full h-auto object-contain rotate-[11deg]" 
          onError={(e) => console.error("Vector 2517 image path failed to load:", e.currtentTarget.src)}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="text-4xl md:text-[4.5rem] font-normal text-[#111111] leading-[1.1] tracking-tight font-primary max-w-xl"
        >
          What we{' '}
          <span className="relative px-4 py-1 bg-[#d7eedd] rounded-full inline-block align-middle">can</span>{' '}
          <br />
          <span className="relative inline-block mt-2">
            offer
            <motion.img 
              variants={underlineVariants}
              src={yellowLine} 
              alt="" 
              className="absolute -z-10 -bottom-1 -left-2 w-[115%] h-auto pointer-events-none origin-left"
            />
          </span>{' '}
          you!
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto border-t border-gray-200 relative z-10"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={rowVariants}
            className="group relative grid grid-cols-1 md:grid-cols-[1.2fr_3fr_0.5fr] gap-6 md:gap-12 py-10 border-b border-gray-200 items-center cursor-pointer hover:bg-gray-50/50 transition-colors duration-300 px-4"
          >
            {/* Left Column: Tagline */}
            <p className="text-[#4A4A4A] text-sm md:text-[18px] leading-relaxed font-secondary font-normal max-w-[220px]">
              {service.tagline}
            </p>

            {/* Middle Column: Title */}
            <div className="relative flex items-center">
              <h3 className="text-3xl md:text-[40px] font-normal text-[#111111] font-primary tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                {service.title}
              </h3>
            </div>

            {/* Right Column: Premium Custom Arrow */}
            <div className="flex justify-end md:justify-center">
              <div className="w-12 h-[1px] bg-black transition-all duration-300 group-hover:bg-gray-600 group-hover:w-16 relative">
                <span className="absolute right-0 -top-[3px] border-r border-t border-black transition-colors duration-300 group-hover:border-gray-600 rotate-45 w-2 h-2"></span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;