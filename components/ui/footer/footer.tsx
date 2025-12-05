"use client";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5227FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Pass The <span className="text-[#5227FF]">Excellence</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                The leading Online German Language institute in Nepal.
                Empowering students with quality education and global
                opportunities.
              </p>
            </div>

            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: "#", color: "hover:text-[#1877F2]" },
                { icon: FaInstagram, href: "#", color: "hover:text-[#E4405F]" },
                { icon: FaLinkedin, href: "#", color: "hover:text-[#0A66C2]" },
                { icon: FaYoutube, href: "#", color: "hover:text-[#FF0000]" },
                {
                  icon: FaTiktok,
                  href: "#",
                  color: "hover:text-black dark:hover:text-white",
                },
                { icon: FaWhatsapp, href: "#", color: "hover:text-[#25D366]" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-500 dark:text-gray-400 transition-all hover:-translate-y-1 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Courses", href: "/courses" },
                { label: "Instructors", href: "/instructors" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#5227FF] dark:hover:text-[#5227FF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5227FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { label: "FAQ", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Student Portal", href: "/study" },
                { label: "Collaborate", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#5227FF] dark:hover:text-[#5227FF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5227FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF] flex-shrink-0">
                  <IoLocation size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kathmandu, Nepal
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF] flex-shrink-0">
                  <IoMail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:LearnGermanInNepali@gmail.com"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#5227FF] transition-colors"
                  >
                    LearnGermanInNepali@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF] flex-shrink-0">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <a
                    href="tel:+9779808699330"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#5227FF] transition-colors"
                  >
                    +977-9808699330
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Pass The Excellence. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
