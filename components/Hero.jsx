"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./hero.css";

export default function Hero() {
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
        <SplideSlide>
          <li className="slider-item splide__slide">
            <div className="slider-image">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1611117775350-ac3950990985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner"
              />
            </div>
            <div className="container mx-auto px-12 md:px-20 lg:px-28">
              <p className=" text-2xl md:text-4xl lg:text-5xl text-gray-200 lg:leading-relaxed bg-[#3737378c] px-5 py-2 w-full md:w-full lg:w-3/4">
                Expert Machinery Solutions for the Footwear and Leather Goods
                Industry
              </p>
            </div>
          </li>
        </SplideSlide>
        <SplideSlide>
          <li className="slider-item splide__slide">
            <div className="slider-image">
              <img
                src="https://images.unsplash.com/photo-1655122878062-a9e885391a1b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner"
              />
            </div>
            <div className="container mx-auto px-12 md:px-20 lg:px-28">
              <p className=" text-2xl md:text-4xl lg:text-5xl text-gray-200 lg:leading-relaxed bg-[#3737378c] px-5 py-2 w-full md:w-full lg:w-3/4">
                Trusted Machinery Supplier for Footwear and Leather Goods Since
                2024
              </p>
            </div>
          </li>
        </SplideSlide>
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
