import React from 'react';
import { motion } from 'framer-motion';

import rect657 from '../assets/hero/Rectangle 657.png';
import rect658 from '../assets/hero/Rectangle 658.png';
import vector5 from '../assets/hero/Vector 5.png';
import vector2510 from '../assets/hero/Vector 2510.svg';
import vector2511 from '../assets/hero/Vector 2511.svg';
import avatar255 from '../assets/hero/Ellipse 255.png';
import avatar256 from '../assets/hero/Ellipse 256.png';
import avatar257 from '../assets/hero/Ellipse 257.png';
import avatar258 from '../assets/hero/Ellipse 258.png';
import avatar259 from '../assets/hero/Ellipse 259.png';
import avatar260 from '../assets/hero/Ellipse 260.png';
import avatar261 from '../assets/hero/Ellipse 261.png';
import avatar262 from '../assets/hero/Ellipse 262.png';

const Hero = () => {
  const avatars = [
    avatar255, avatar256, avatar257, avatar258,
    avatar259, avatar260, avatar261, avatar262
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const textLineVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const shapeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.6 }
    }
  };

  const floatAnimation = (delay = 0, duration = 4) => ({
    y: [0, -8, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-12 md:pt-20 pb-20 overflow-hidden bg-white">
      
      {/* ================= LEFT SIDE DECORATIVE CURVES ================= */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          y: [0, -6, 0]
        }}
        viewport={{ once: true }}
        transition={{ 
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute left-0 top-[18%] md:top-[28%] flex flex-col space-y-4 pointer-events-none select-none z-0"
      >
        <div className="relative w-10 md:w-20">
          <motion.img 
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src={vector2510} 
            alt="" 
            className="w-[75%] md:w-[65%] h-auto object-contain -translate-x-[30%]" 
          />
          <motion.img 
            animate={{ rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
            src={vector2511} 
            alt="" 
            className="absolute w-[75%] md:w-[65%] top-0 left-2 md:left-5 h-auto object-contain -translate-x-[30%]" 
          />
        </div>
      </motion.div>

      {/* ================= HERO TEXT CONTAINER ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl z-10 select-none w-full mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-normal text-[#111111] leading-[1.3] md:leading-[1.2] tracking-tight font-primary">
          
          {/* Line 1 */}
          <div className="overflow-hidden block py-1">
            <motion.span variants={textLineVariants} className="inline-block">
              The{' '}
              <span className="relative inline-block px-1">
                thinkers
                <motion.img 
                  variants={shapeVariants}
                  src={vector5} 
                  alt="" 
                  className="absolute -left-2 -bottom-1.5 w-[112%] -z-10 h-auto pointer-events-none"
                />
              </span>{' '}
              and
            </motion.span>
          </div>
          
          {/* Line 2 */}
          <div className="overflow-hidden block py-1">
            <motion.span variants={textLineVariants} className="inline-block">
              doers were{' '}
              <span className="relative inline-block py-1 px-1">
                <motion.img
                  variants={shapeVariants}
                  src={rect657}
                  alt=""
                  className="absolute top-0 -right-2 md:-right-4 h-full w-auto -z-10 pointer-events-none object-contain"
                />
                changing
              </span>
            </motion.span>
          </div>
          
          {/* Line 3 */}
          <div className="overflow-hidden block py-1">
            <motion.span variants={textLineVariants} className="inline-block">
              the{' '}
              <span className="relative inline-block px-2 md:px-3 py-1 mr-1 md:mr-2">
                <motion.img 
                  variants={shapeVariants}
                  src={rect658} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-contain -z-10 pointer-events-none"
                />
                status
              </span>
              Quo with
            </motion.span>
          </div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-[#4A4A4A] max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed font-medium font-secondary px-4"
        >
          We are a team of strategists, designers, communicators, researchers. Together,<br className="hidden md:inline" />
          we believe that progress only happens when you refuse to play things safe.
        </motion.p>
      </motion.div>

      {/* ================= MOBILE AND TABLET VIEW LAYOUT ================= */}
      <div className="flex md:hidden flex-wrap justify-center gap-x-2 gap-y-0 max-w-xl mx-auto mt-16 z-10 px-4">
        {avatars.map((avatar, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={floatAnimation(index * 0.2, 3.8)}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.1, zIndex: 30 }}
              className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-white transform cursor-pointer
                          ${isEven ? 'translate-y-4' : '-translate-y-2'}
                          -ml-3 sm:-ml-4 first:ml-0`}
            >
              <img 
                src={avatar} 
                alt={`Team member ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          );
        })}
      </div>

      {/* ================= LARGE SCREEN LAYOUT ================= */}
      <div className="relative mt-24 w-full max-w-6xl h-72 z-10 mx-auto hidden md:block">
        {/* Left cluster */}
        <motion.div 
          animate={floatAnimation(0, 4.2)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[0%] bottom-[10%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar255} alt="Team 1" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.5, 4.6)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[8%] bottom-[23%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar256} alt="Team 2" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.2, 4.4)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[22%] top-[5%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar257} alt="Team 3" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.7, 4.8)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[34%] bottom-[8%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar258} alt="Team 4" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right cluster */}
        <motion.div 
          animate={floatAnimation(0.1, 4.0)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[48%] top-[15%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar259} alt="Team 5" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.6, 5.0)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute left-[59%] bottom-[16%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar260} alt="Team 6" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.3, 4.5)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute right-[10%] top-[8%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar261} alt="Team 7" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          animate={floatAnimation(0.8, 4.3)}
          whileHover={{ scale: 1.08, zIndex: 20 }}
          className="absolute right-[0%] bottom-[12%] w-28 h-28 xl:w-32 xl:h-32 rounded-full ring-4 ring-white overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-lg"
        >
          <img src={avatar262} alt="Team 8" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;