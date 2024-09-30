import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import About from "@/components/about/About";

export default function page() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
