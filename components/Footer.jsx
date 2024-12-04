import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="/"
              className="cursor-pointer flex justify-center lg:justify-start"
            >
              <img src="/assets/img/logo2.png" alt="logo" />
            </Link>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              We are providing all kinds of machinery. Have any query ?
            </p>
            <Link
              href="/contact"
              className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-[#48A5C4] rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-[#4399b6] lg:mx-0"
            >
              Contact us
            </Link>
          </div>
          <div className="lg:mx-auto">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Max4bd</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="/"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/about"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/gallery"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="/products/sports-shoe-machines"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Sports shoe machines
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/products/leather-shoe-machines"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Leather shoe machines
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/products/leather-goods-machines"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Leather goods machines
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/products/hand-gloves"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Hand gloves
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lab-testing-equipment-and-others"
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Lab Testing equipments and others
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a
                  href=""
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
                <a
                  href=""
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Subscribe
            </h4>
            <p className="text-sm text-gray-500 leading-6 mb-7">
              Subscribe to get the latest news from us
            </p>
          </div>
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©max4bd 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
              <a
                href=""
                className="w-8 cursor-pointer h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-white"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href=""
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF] hover:bg-gray-900"
              >
                <svg
                  className="w-[1rem] h-[1rem] text-white"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href=""
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000] hover:bg-gray-900"
              >
                <svg
                  className="w-[1.25rem] h-[0.875rem] text-white"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9191 1.10651C14.558 1.27906 15.0602 1.78251 15.2299 2.42069C15.5388 3.57887 15.5388 5.99687 15.5388 5.99687C15.5388 5.99687 15.5388 8.41487 15.2299 9.57306C15.0578 10.2136 14.5556 10.7171 13.9191 10.8872C12.7638 11.1969 8.12875 11.1969 8.12875 11.1969C8.12875 11.1969 3.49603 11.1969 2.33844 10.8872C1.69952 10.7147 1.19735 10.2112 1.0276 9.57306C0.71875 8.41487 0.71875 5.99687 0.71875 5.99687C0.71875 5.99687 0.71875 3.57887 1.0276 2.42069C1.1997 1.78015 1.70188 1.27669 2.33844 1.10651C3.49603 0.796875 8.12875 0.796875 8.12875 0.796875C8.12875 0.796875 12.7638 0.796875 13.9191 1.10651ZM10.4981 5.99687L6.6481 8.22578V3.76796L10.4981 5.99687Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
