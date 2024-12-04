"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import "./hero.css";

export default function Hero() {
  const sliderImages = [
    {
      avatar: "/assets/img/slider/banner1.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner2.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
    {
      avatar: "/assets/img/slider/banner3.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner4.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
    {
      avatar: "/assets/img/slider/banner5.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner6.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
    {
      avatar: "/assets/img/slider/banner7.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner8.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
    {
      avatar: "/assets/img/slider/banner9.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner10.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
    {
      avatar: "/assets/img/slider/banner11.jpg",
      title:
        "Expert Machinery Solutions for the Footwear and Leather Goods Industry",
    },
    {
      avatar: "/assets/img/slider/banner12.jpg",
      title:
        "Trusted Machinery Supplier for Footwear and Leather Goods Since 2024",
    },
  ];
  
  return (
    <Splide
      hasTrack={false}
      options={{
        type: "loop",
        autoplay: true,
        perPage: 1,
        speed: 800,
        drag: false,
        interval: 3500,
        pauseOnHover: false,
      }}
    >
      <SplideTrack>
        {sliderImages.map((img, index) => (
          <SplideSlide key={img?.avatar}>
            <li className="slider-item splide__slide">
              <div className="slider-image">
                <Image
                  className="img-fluid w-full h-auto"
                  src={img?.avatar}
                  alt={`banner ${index}`}
                  width={900}
                  height={700}
                  quality={100}
                  objectFit="content"
                />
              </div>
              <div className="container mx-auto px-12 md:px-20 lg:px-28">
                <p className=" text-2xl md:text-4xl lg:text-5xl text-gray-200 lg:leading-relaxed bg-[#3737378c] px-5 py-2 w-full md:w-full lg:w-3/4">
                  {img?.title}
                </p>
              </div>
            </li>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev splide__arrow1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next splide__arrow1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    </Splide>
  );
}
