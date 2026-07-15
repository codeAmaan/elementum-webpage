import React from "react";
import { motion } from "framer-motion";
import Newsletter from "../Sections/Newsletter";
import redArrows from "../assets/newsletter/vector 2518.png";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "Studio", href: "#studio" },
      { label: "Service", href: "#service" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Explore", href: "#explore" },
      { label: "Accessibility", href: "#accessibility" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Instagram", href: "#instagram" },
      { label: "LinkedIn", href: "#linkedin" },
      { label: "YouTube", href: "#youtube" },
      { label: "Twitter", href: "#twitter" },
    ],
  },
];

const Footer = () => {
 return (
    <footer className="relative w-full overflow-hidden bg-[#DCEFE3] px-6 pt-14 pb-8 md:px-24">
      
      {/* Decorative Arrows */}
      <div className="pointer-events-none absolute top-[0%] left-1/2 -translate-x-1/2 md:top-[0%] z-0 flex space-x-2 select-none">
        {[1, 2].map((item, index) => (
          <motion.img
            key={item}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            src={redArrows}
            alt=""
            className="h-auto w-16 md:w-[100px] object-contain"
          />
        ))}
      </div>

      <Newsletter />

      {/* Decorative Purple Shape */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute right-0 top-[20%] -z-10 h-[200px] w-[80px] bg-[#9147ff] rounded-l-[100px] opacity-80" 
      />

      <div className="mx-auto my-16 max-w-6xl border-t border-black/10" />

      {/* Footer Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className="flex flex-col space-y-4">
            <h4 className="font-primary text-xl font-medium tracking-tight text-[#111111]">
              {section.title}
            </h4>
            <ul className="space-y-3 font-secondary text-[15px] text-[#2c2c2c]">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-black transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-primary text-xl font-medium tracking-tight text-[#111111]">Contact</h4>
          <address className="not-italic space-y-3 font-secondary text-[15px] text-[#2c2c2c]">
            <p>1498W Fulton St, STE 2D<br />Chicago, IL 63867</p>
            <a href="tel:123456789000" className="block hover:text-black transition-colors">(123) 456-789-000</a>
            <a href="mailto:info@elementum.com" className="block hover:text-black transition-colors">info@elementum.com</a>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center border-t border-black/5 pt-8">
        <p className="font-secondary text-xs md:text-sm text-[#4a4a4a]">
          © {new Date().getFullYear()} Elementum. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;