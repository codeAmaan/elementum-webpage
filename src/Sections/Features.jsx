import { motion } from 'framer-motion';

import yellowLine from '../assets/hero/Vector 5.png';
import img1 from '../assets/features/img1.png';
import img2 from '../assets/features/img2.png';
import polygon2 from '../assets/features/Polygon 2.png';
import polygon3 from '../assets/features/Polygon 3.png';
import vector2517 from '../assets/features/Vector 2517.png';

const Features = () => {

  // Left-to-right slide for block 1 content
  const textLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Right-to-left slide for block 2 content
  const textRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Smooth pop scaling for main team image circles
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Elastic physics pop-out for background polygon accents
  const polygonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 90, damping: 11, delay: 0.45 } 
    }
  };

  // Delayed reveal for the highlight accent lines
  const assetVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1, 
      transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* ================= THE ZIG-ZAG PATH (VECTOR 2517) ================= */}
      {/* Uses scaleY and origin-top to grow down smoothly from the top, avoiding clipPath bugs */}
    <motion.div 
  initial={{ scaleY: 0, opacity: 0 }}
  whileInView={{ scaleY: 1, opacity: 0.95 }}
  viewport={{ once: true, amount: 0.05 }}
  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
  style={{ transformOrigin: "top center" }} 
  className="absolute w-full rotate-[5deg] left-[10%] bottom-[20%] h-auto z-0 pointer-events-none hidden md:block"
>
  <img
    src={vector2517}
    alt=""
    className="w-full h-auto object-contain"
  />
</motion.div>

      {/* Background radial glow split */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-100/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= TOP BLOCK (Left Text, Right Image) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-center mb-24 md:mb-36 relative z-10">
          
          <motion.div 
            variants={textLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="order-2 md:order-1 flex flex-col items-start text-left relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.2] font-primary mb-6">
              <span className="relative inline-block">
                Tomorrow
                <motion.img 
                  variants={assetVariants}
                  src={yellowLine} 
                  alt="" 
                  className="absolute -left-1 -bottom-1.5 w-[110%] -z-10 h-auto pointer-events-none origin-left"
                />
              </span>{' '}
              should <br className="hidden md:inline" />
              be better than{' '}
              <span className="relative inline-block px-3 py-1 bg-[#d7eedd] rounded-full text-3xl md:text-4xl lg:text-5xl align-middle">
                today
              </span>
            </h2>
            
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed font-normal font-secondary mb-8 max-w-md">
              We are a team of strategists, designers, communicators, researchers.
              Together, we believe that progress only happens when you refuse to play things safe.
            </p>

            <a 
              href="#read" 
              className="group flex items-center space-x-2 text-sm font-semibold text-black font-secondary hover:text-gray-600 transition-colors"
            >
              <span>Read more</span>
              <div className="w-12 h-[1px] bg-black group-hover:bg-gray-600 transition-colors relative">
                <span className="absolute right-0 -top-[3.5px] border-r border-t border-black group-hover:border-gray-600 rotate-45 w-2 h-2"></span>
              </div>
            </a>
          </motion.div>

          {/* Right side cluster container */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative z-10">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px]">
              
              {/* Geometric Polygon 3 Backdrop Accent */}
              <motion.div 
                variants={polygonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute -right-3 md:-right-6 -top-3 md:-top-6 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -z-10 select-none pointer-events-none"
              >
                <img src={polygon3} alt="" className="w-full h-full object-contain" />
              </motion.div>
              
              {/* Circular Frame */}
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full h-full rounded-full overflow-hidden shadow-sm relative z-10 border-4 border-white"
              >
                <img 
                  src={img1} 
                  alt="Meeting" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BLOCK (Left Image, Right Text) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-center relative z-10">
          
          {/* Left side cluster container */}
          <div className="flex justify-center md:justify-start relative z-10">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px]">
              
              {/* Top Geometric Polygon 2 Backdrop Accent */}
              <motion.div 
                variants={polygonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute -left-4 top-[-8%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 -z-10 select-none pointer-events-none"
              >
                <img src={polygon2} alt="" className="w-full h-full object-contain" />
              </motion.div>
              
              {/* Bottom Geometric Polygon 2 Backdrop Accent */}
              <motion.div 
                variants={polygonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute left-[30%] sm:left-[35%] -bottom-5 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 z-20 select-none pointer-events-none"
              >
                <img src={polygon2} alt="" className="w-full h-full object-contain" />
              </motion.div>
              
              {/* Circular Frame */}
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full h-full rounded-full overflow-hidden shadow-sm relative z-10 border-4 border-white"
              >
                <img 
                  src={img2} 
                  alt="Workspace" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </div>
          </div>

          {/* Right side content */}
          <motion.div 
            variants={textRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-start text-left relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.2] font-primary mb-6">
              <span className="relative inline-block px-3 py-1 bg-[#d7eedd] rounded-full text-3xl md:text-4xl lg:text-5xl align-middle">
                See
              </span>{' '}
              how we can <br className="hidden md:inline" />
              help you{' '}
              <span className="relative inline-block">
                progress
                <motion.img 
                  variants={assetVariants}
                  src={yellowLine} 
                  alt="" 
                  className="absolute -left-1 -bottom-1 w-[110%] -z-10 h-auto pointer-events-none origin-left"
                />
              </span>
            </h2>
            
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed font-normal font-secondary mb-8 max-w-md">
              We add a layer of fearless insights and action that allows change makers
              to accelerate their progress in areas such as brand, design, digital, comms and social research.
            </p>

            <a 
              href="#read" 
              className="group flex items-center space-x-2 text-sm font-semibold text-black font-secondary hover:text-gray-600 transition-colors"
            >
              <span>Read more</span>
              <div className="w-12 h-[1px] bg-black group-hover:bg-gray-600 transition-colors relative">
                <span className="absolute right-0 -top-[3.5px] border-r border-t border-black group-hover:border-gray-600 rotate-45 w-2 h-2"></span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;