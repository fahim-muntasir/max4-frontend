import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <section className="py-14 lg:py-24 relative z-0 mb-14 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Contact
            <span className="text-[#252278]"> Us</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
