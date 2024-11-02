"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import allProducts from "@/products.json";

export default function ProductPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image
  const [isOpen, setIsOpen] = useState(false); // State to toggle modal visibility
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image loading
  const title = slug?.split("-")?.join(" ");

  const images = allProducts[slug] || [];

  // Function to handle image click and open modal
  const openModal = (image) => {
    setSelectedImage(image); // Set clicked image as selected
    setIsOpen(true); // Open modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false); // Close modal
    setSelectedImage(null); // Reset selected image
  };

  return (
    <>
      <Navbar />
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50 mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal capitalize">
            {title}
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-14 px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images?.length === 0 && "The product is empty!"}
          {images?.map((image, index) => (
            <div key={index}>
              <Image
                className="max-h-[500px] max-w-full rounded-lg cursor-pointer"
                src={image}
                width={500}
                height={200}
                quality={100}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => openModal(image)} // Open modal on click
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal for larger image */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside image
        >
          <div className="relative mx-5" onClick={(e) => e.stopPropagation()}>
            {/* Stop propagation when clicking inside modal */}
            <Image
              src={selectedImage}
              width={800}
              height={100}
              quality={100}
              alt="Selected Large"
              className="max-w-full max-h-screen object-contain rounded-lg"
              loading="eager"
              onLoadingComplete={() => setIsImageLoaded(true)} // Set image as loaded
            />
            {isImageLoaded && (
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-red-400 rounded-full p-2 h-10 w-10 hover:bg-red-500"
                onClick={closeModal} // Close modal on button click
              >
                <IoClose />
              </button>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
