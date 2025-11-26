"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "../ToggleTheme";

export default function DesktopNavbar() {
  const pathname = usePathname();

  const links = [
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Instructors", href: "/instructors" },
    { name: "Study", href: "/study" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-xl border-b border-white/20 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        <Link
          href={"/"}
          className="text-2xl font-extrabold drop-shadow-lg">
          PassTheExcellence
        </Link>

        <ul className="flex items-center gap-10 text-lg font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-[#5227FF] font-semibold"
                      : "hover:text-[#5227FF]"
                  }`}
                >
                  {link.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-[#5227FF] rounded-full
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
  `}
                ></span>
              </li>
            );
          })}

          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
}
