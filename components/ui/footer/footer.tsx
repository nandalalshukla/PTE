"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 dark:border-gray-800 bg-[#f8f8f8] dark:bg-[#0d0d0d] text-gray-700 dark:text-gray-300 pt-8 pb-8 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 place-items-center md:grid-cols-3 gap-6 md:gap-13">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
            Pass The Excellence
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed w-[200px]">
            The leading Online German Language institute in Nepal.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="w-10 h-10  text-2xl flex items-center justify-center rounded-full bg-black/9 dark:bg-white/10 hover:bg-black/18 dark:hover:bg-white/20 transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 text-2xl flex items-center justify-center rounded-full bg-black/9 dark:bg-white/10 hover:bg-black/18 dark:hover:bg-white/20 transition"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 text-2xl flex items-center justify-center rounded-full bg-black/9 dark:bg-white/10 hover:bg-black/18 dark:hover:bg-white/20 transition"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 text-2xl flex items-center justify-center rounded-full bg-black/9 dark:bg-white/10 hover:bg-black/18 dark:hover:bg-white/20 transition"
            >
              <AiFillTikTok />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-around items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 grid grid-cols-2 gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-black dark:hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-black dark:hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-black dark:hover:text-white transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/instructors"
                className="hover:text-black dark:hover:text-white transition"
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-black dark:hover:text-white transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-black dark:hover:text-white transition "
              >
                Collaborate
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h3>
          <div className="flex flex-col items-start justify-center ">
            <div className="flex justify-center text-sm items-center gap-3 mt-2 hover:text-black dark:hover:text-white transition">
              <div className="w-9 h-9  text-base flex items-center justify-center rounded-full bg-black/9 dark:bg-white/8 hover:bg-black/18 dark:hover:bg-white/20 transition">
                <IoLocationSharp />
              </div>
              Kathmandu, Nepal
            </div>

            <div className="flex justify-center text-sm items-center gap-3 mt-2 hover:text-black dark:hover:text-white transition">
              <div className="w-9 h-9  text-base flex items-center justify-center rounded-full bg-black/9 dark:bg-white/8 hover:bg-black/18 dark:hover:bg-white/20 transition">
                <IoIosMail />
              </div>
              LearnGermanInNepali@gmail.com
            </div>
            <div className="flex justify-center text-sm items-center gap-3 mt-2 hover:text-black dark:hover:text-white transition">
              <div className="w-9 h-9  text-sm flex items-center justify-center rounded-full bg-black/9 dark:bg-white/8 hover:bg-black/18 dark:hover:bg-white/20 transition">
                <BsFillTelephoneFill />
              </div>
              +977-9808699330
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 mt-12 pt-6 text-center text-gray-500 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} Pass The Excellence · All Rights Reserved.
      </div>
    </footer>
  );
}
