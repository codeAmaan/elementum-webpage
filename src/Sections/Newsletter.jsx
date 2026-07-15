import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
      {/* ================= HEADING ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mt-4 mb-2 max-w-3xl font-primary text-5xl font-normal leading-[1.1] tracking-tight text-[#111111] md:text-[5rem]"
      >Subscribe to<br />our newsletter
      </motion.h2>

      {/* ================= DESCRIPTION ================= */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mb-8 font-secondary text-sm font-normal text-[#333333] md:text-base opacity-90"
      >To make your stay special and even more memorable
      </motion.p>

      {/* ================= INPUT FORM ================= */}
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex w-full max-w-md gap-2 bg-gray-100 p-2 rounded-full border border-gray-200"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 py-2 outline-none font-secondary text-sm"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-black px-6 py-2 font-secondary text-sm font-medium text-white transition-all hover:bg-gray-800"
          >
            Join
          </button>
        </motion.form>

     
    </div>
  );
};

export default Newsletter;
