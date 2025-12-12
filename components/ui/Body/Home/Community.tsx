"use client";
import Image from "next/image";
import learnGermanInNepali from "@/public/lgin.jpg";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaGoogle, FaTiktok } from "react-icons/fa";

export default function Community() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
          <Image
            src={learnGermanInNepali}
            alt="Community"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            placeholder="blur"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#121212]">
          <div className="mb-8 sm:mb-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-sm mb-4"
            >
              Join Our Community
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Connect with Learners <br />
              <span className="text-[#5227FF]">Across Nepal</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Be part of the largest German Language Learners Community in
              Nepal. Get access to free study materials, latest updates, and
              connect with fellow students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white font-semibold transition-all duration-300 border border-[#1877F2]/20 hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30"
            >
              <FaFacebook className="text-xl group-hover:scale-110 transition-transform" />
              Facebook Group
            </a>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold transition-all duration-300 border border-[#25D366]/20 hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
              WhatsApp Group
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#DB4437]/10 hover:bg-[#DB4437] text-[#DB4437] hover:text-white font-semibold transition-all duration-300 border border-[#DB4437]/20 hover:border-[#DB4437] hover:shadow-lg hover:shadow-[#DB4437]/30"
            >
              <FaGoogle className="text-xl group-hover:scale-110 transition-transform" />
              Google Reviews
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white text-gray-900 dark:text-white hover:text-white dark:hover:text-black font-semibold transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white hover:shadow-lg hover:shadow-gray-500/30"
            >
              <FaTiktok className="text-xl group-hover:scale-110 transition-transform" />
              TikTok
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
