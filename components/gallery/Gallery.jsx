"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image
  const [isOpen, setIsOpen] = useState(false); // State to toggle modal visibility

  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

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
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50 mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Gallery
            <span className="text-[#252278]"> Showcase</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-14 px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
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
            <img
              src={selectedImage}
              alt="Selected Large"
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-red-400 rounded-full p-2 h-10 w-10 hover:bg-red-500"
              onClick={closeModal} // Close modal on button click
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
