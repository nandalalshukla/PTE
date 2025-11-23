"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ModeToggle from "../ToggleTheme";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="backdrop-blur-xl border-b border-white/20 fixed top-0 left-0 w-full z-50 shadow-lg px-5 py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold drop-shadow-lg">
          PassTheExcellence
        </div>

        <div className="flex items-center gap-6">
          <ModeToggle />

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="p-2 rounded-md"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-2/4 h-full backdrop-blur-2xl border-l border-white/20 shadow-xl z-50
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md"
          >
            <FiX size={28} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 p-6 text-lg">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="group relative w-fit">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-1"
                  >
                    {link.name}
                  </Link>

                  {/* Pen underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full
                    bg-yellow-500 transition-all duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  />
                </li>
              );
            })}
          </ul>
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
        </div>
      </div>

      {/* Blur Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}
