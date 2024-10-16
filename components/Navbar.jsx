"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook

export default function Navbar() {
  const pathname = usePathname(); // Get the current path
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for products

  const isActive = (path) => pathname === path;

  return (
    <header className="body-font sticky top-0 z-10">
      {/* Top contact info bar */}
      <div className="bg-[#48A5C4]">
        <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <CiLocationOn className="text-xl" />
              <span className="text-sm">
                401/B, 3rd Floor, Plot #Ga Block #D, Satmasjid Super Market,
                Mohammadpur, Dhaka-1207, Bangladesh
              </span>
            </a>
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <FaWhatsapp className="text-xl" />
              <span className="text-sm">+88 01635 404 525</span>
            </a>
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <FaWhatsapp className="text-xl" />
              <span className="text-sm">+88 01718 123 414</span>
            </a>
            <a className="mr-5 text-[#FFE5CF] flex items-center gap-1">
              <AiOutlineMail className="text-xl" />
              <span className="text-sm">max4technology@gmail.com</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#ECEEEE]">
        <div className="container mx-auto flex flex-wrap py-7 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-[#FF885B] mb-4 md:mb-0"
          >
            <img src="/assets/img/logo2.png" alt="logo" />
          </Link>

          {/* Navigation links with hover underline and active link underline */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-sm md:text-base lg:text-base justify-center uppercase gap-3 md:gap-8">
            {/* Products dropdown menu with arrow */}
            <div
              className="relative group flex items-center gap-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="text-[#33372C] cursor-pointer font-semibold">
                Products
              </span>
              {dropdownOpen ? (
                <AiOutlineUp className="text-sm" />
              ) : (
                <AiOutlineDown className="text-sm" />
              )}
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#48A5C4] transition-transform duration-300 origin-left ${
                  isActive("/products")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>

              {/* Dropdown items */}
              {dropdownOpen && (
                <div className="absolute top-[25px] left-0 mt-1 bg-white shadow-lg rounded-md p-2 w-60">
                  <Link
                    href="/products/sports-shoe-machines"
                    className="block px-4 py-2 text-sm text-[#33372C] hover:bg-[#48A5C4] hover:text-white rounded"
                  >
                    Sports shoe machines
                  </Link>
                  <Link
                    href="/products/leather-shoe-machines"
                    className="block px-4 py-2 text-sm text-[#33372C] hover:bg-[#48A5C4] hover:text-white rounded"
                  >
                    Leather shoe machines
                  </Link>
                  <Link
                    href="/products/leather-goods-machines"
                    className="block px-4 py-2 text-sm text-[#33372C] hover:bg-[#48A5C4] hover:text-white rounded"
                  >
                    Leather goods machines
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="relative group">
              <span className="text-[#33372C] cursor-pointer font-semibold">
                Gallery
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#48A5C4] transition-transform duration-300 origin-left ${
                  isActive("/gallery")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>

            <Link href="/about" className="relative group">
              <span className="text-[#33372C] cursor-pointer font-semibold">
                About Us
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#48A5C4] transition-transform duration-300 origin-left ${
                  isActive("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>

            <Link href="/contact" className="relative group">
              <span className="text-[#33372C] cursor-pointer font-semibold">
                Contact Us
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] rounded-full w-full h-0.5 bg-[#48A5C4] transition-transform duration-300 origin-left ${
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
