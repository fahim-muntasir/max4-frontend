import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="body-font">
      <div className="bg-sky-400">
        <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 text-gray-700 flex items-center gap-1 ">
              <CiLocationOn className="text-xl" />
              <span className="text-sm">
                363/A pirerbagh. Mirpur -1 Dhaka-1216
              </span>
            </a>
            <a className="mr-5 hover:text-gray-900 text-gray-700 flex items-center gap-1 ">
              <FaWhatsapp className="text-xl" />
              <span className="text-sm">01635404525</span>
            </a>
            <a className="mr-5 hover:text-gray-900 text-gray-700 flex items-center gap-1 ">
              <AiOutlineMail className="text-xl" />
              <span className="text-sm">max4technology@gmail.com</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Max4bd</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-sm md:text-base lg:text-base justify-center uppercase gap-3 md:gap-8">
            <a className=" hover:text-gray-900 cursor-pointer">Home</a>
            <a className=" hover:text-gray-900 cursor-pointer">Gellery</a>
            <a className=" hover:text-gray-900 cursor-pointer">About Us</a>
            <a className=" hover:text-gray-900 cursor-pointer">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
