"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import ModeToggle from "../ToggleTheme";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="backdrop-blur-xl not-last:border-b border-white/20 fixed top-0 left-0 w-full z-50 shadow-lg px-5 py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold text-white drop-shadow-lg">
          PassTheExcellence
        </div>
        <ModeToggle />
        <button onClick={() => setOpen(true)}>
          <FiMenu size={28} className="text-white" />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full backdrop-blur-2xlborder-l border-white/20 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <FiX size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive
                      ? "text-blue-300 font-semibold border-b border-blue-300 pb-1"
                      : " hover:text-blue-300 transition"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-6 mt-5">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="w-full py-3 flex justify-center bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white hover:bg-white/30 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}
