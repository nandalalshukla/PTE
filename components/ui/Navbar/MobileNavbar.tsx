"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
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
    { name: "Courses", href: "/courses" },
    { name: "Enroll", href: "/enroll" },
    { name: "Study", href: "/study" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-5 py-4 flex items-center justify-between backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300">
        <Link
          href={"/"}
          className="text-xl font-extrabold font-inter flex items-center gap-1"
        >
          <span className="text-[#5227FF]">Pass</span>TheExcellence
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-background/80 backdrop-blur-2xl border-l border-white/20 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto">
          {/* Navigation Links */}
          <ul className="flex flex-col p-6 gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#5227FF]/10 text-[#5227FF] font-semibold"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto p-6 border-t border-white/20">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-[#5227FF] transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#5227FF] transition-colors"
              >
                <RiWhatsappFill size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#5227FF] transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#5227FF] transition-colors"
              >
                <AiFillTikTok size={20} />
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center bg-[#5227FF] text-white font-bold rounded-xl hover:bg-[#4520d4] transition-colors shadow-lg shadow-[#5227FF]/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
