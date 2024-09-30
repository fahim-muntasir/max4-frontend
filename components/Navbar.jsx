"use client"
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  const isActive = (path) => pathname === path;

  return (
    <header className="body-font sticky top-0 z-10 overflow-hidden">
      {/* Top contact info bar */}
      <div className="bg-[#FF885B]">
        <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <CiLocationOn className="text-xl" />
              <span className="text-sm">
                363/A pirerbagh. Mirpur -1 Dhaka-1216
              </span>
            </a>
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <FaWhatsapp className="text-xl" />
              <span className="text-sm">01635404525</span>
            </a>
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <AiOutlineMail className="text-xl" />
              <span className="text-sm">max4technology@gmail.com</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#FFE5CF]">
        <div className="container mx-auto flex flex-wrap py-7 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-[#FF885B] mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl">Max4bd</span>
          </Link>

          {/* Navigation links with hover underline and active link underline */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-sm md:text-base lg:text-base justify-center uppercase gap-3 md:gap-8">
            <Link href="/gallery" className="relative group">
              <span
                className={`text-[#33372C] cursor-pointer font-semibold`}
              >
                Gallery
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#FF885B] transition-transform duration-300 origin-left ${
                  isActive("/gallery")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>

            <Link href="/about" className="relative group">
              <span
                className={`text-[#33372C] cursor-pointer font-semibold`}
              >
                About Us
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#FF885B] transition-transform duration-300 origin-left ${
                  isActive("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>

            <Link href="/contact" className="relative group">
              <span
                className={`text-[#33372C] cursor-pointer font-semibold`}
              >
                Contact Us
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#FF885B] transition-transform duration-300 origin-left ${
                  isActive("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
