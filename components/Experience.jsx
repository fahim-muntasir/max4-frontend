import React from "react";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="text-gray-600 body-font my-16 md:my-36">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Expert Machinery Solutions for the Footwear and Leather Goods
            Industry
          </h1>
          <p className="mb-8 leading-relaxed">
            MAX4 TECHNOLOGY HAS BEEN OPERATING FROM 2024. WE ARE PROVIDING ALL
            KINDS OF MACHINERY FOR FOOTWEAR AND LEATHER GOODS SECTOR FROM CHINA,
            TAIWAN AND ITALY. WE ARE AN EXPERIENCED TEAM WHO WORKING IN FOOTWEAR
            AND LEATHER GOODS SECTOR MORE THAN 15 YEARS. WE ARE WELL CAPABLE TO
            PROVIDE YOU QUALITY MACHINERY WITH BEST COMPETITIVE PRICE. WE HAVE
            AN EXPERIENCED TECHNICAL TEAM FOR INSTALLATION OUR SUPPLIED
            MACHINERIES AND LIFE-LONG TIME TECHNICAL SUPPORT.
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <button className="inline-flex text-white bg-[#48A5C4] border-0 py-2 px-6 focus:outline-none hover:bg-[#4399b6] rounded text-lg">
                About Us
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}
