"use client";
import Image from "next/image";
import learnGermanInNepali from "@/public/lgin.jpg";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaGoogle, FaTiktok } from "react-icons/fa";

export default function Community() {
  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#f4f1ff] via-white to-[#f7f5ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-32 h-64 w-64 rounded-full bg-[#5227FF]/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass rounded-3xl overflow-hidden max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
          <Image
            src={learnGermanInNepali}
            alt="Community"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-transparent" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-sm mb-4">
              Join Our Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Connect with Learners <br />
              <span className="text-[#5227FF]">Across Nepal</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Be part of the largest German Language Learners Community in
              Nepal. Get access to free study materials, latest updates, and
              connect with fellow students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1877F2] text-white font-semibold hover:bg-[#1877F2]/90 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20"
            >
              <FaFacebook className="text-xl" />
              Facebook Group
            </a>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#25D366]/90 transition-all hover:-translate-y-1 shadow-lg shadow-green-500/20"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Group
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#DB4437] text-white font-semibold hover:bg-[#DB4437]/90 transition-all hover:-translate-y-1 shadow-lg shadow-red-500/20"
            >
              <FaGoogle className="text-xl" />
              Google Reviews
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-black dark:bg-gray-800 text-white font-semibold hover:bg-gray-900 dark:hover:bg-gray-700 transition-all hover:-translate-y-1 shadow-lg shadow-gray-500/20"
            >
              <FaTiktok className="text-xl" />
              TikTok
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
