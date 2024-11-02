import React from "react";

export default function About() {
  return (
    <>
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            About
            <span className="text-[#252278]"> Us</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  MAX4 TECHNOLOGY HAS BEEN OPERATING FROM 2024. WE ARE PROVIDING
                  ALL KINDS OF MACHINERY FOR FOOTWEAR AND LEATHER GOODS SECTOR
                  FROM CHINA, TAIWAN AND ITALY. WE ARE AN EXPERIENCED TEAM WHO
                  WORKING IN FOOTWEAR AND LEATHER GOODS SECTOR MORE THAN 15
                  YEARS. WE ARE WELL CAPABLE TO PROVIDE YOU QUALITY MACHINERY
                  WITH BEST COMPETITIVE PRICE. WE HAVE AN EXPERIENCED TECHNICAL
                  TEAM FOR INSTALLATION OUR SUPPLIED MACHINERIES AND LIFE-LONG
                  TIME TECHNICAL SUPPORT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:pl-[100px] flex items-center">
            <div className="data w-full">
              <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-black mb-9 max-lg:text-center relative">
                MAX4 TECHNOLOGY CAN PROVIDE ALL KINDS OF:
              </h2>
              <ul className="font-normal text-xl leading-8 text-gray-500">
                <li>1. MACHINERY FOR LEATHER SHOE MAKING PROJECT.</li>
                <li>
                  2. MACHINERY FOR SYNTHETIC SHOES & SPORTS SHOE MAKING PROJECT.
                </li>
                <li>3. MACHINERY FOR LEATHER GOODS MAKING PROJECT. </li>
                <li>
                  4. OUTSOLE SECTION MACHINES FOR TPR/ PVC/ TPU / EVA/ EVA
                  PHYLON SOLE ETC.
                </li>
                <li>5. DIP MACHINES (DIRECT INJECTION PROCESS).</li>
                <li>
                  6. X-RAY INSPECTION MACHINE / UNWANTED METAL DETECTOR MACHINE.
                </li>
                <li>7. TESTING EQUIPMENT MACHINE FOR FOOTWEAR INDUSTRY. </li>
                <li>
                  8. ALSO ALL KINDS OF SPARE PARTS FOR FOOTWEAR AND LEATHER
                  GOODS MACHINERY
                </li>
                <li>
                  9. CUTTING BOARD, SPLITTING KNIFE, BELL KNIFE, TPR GRANULES,
                  INSOLE BOARD, SHANK BOARD ETC.{" "}
                </li>
                <li>
                  10. WE ALSO WE ARE PROVIDING CONSULTANCY, MACHINERY LAYOUT FOR
                  NEW PROJECT OF FOOTWEAR AND LEATHER GOODS.
                </li>
              </ul>

              <p className="font-normal text-xl leading-8 text-gray-500 mt-5">
                MAX4 TECHNOLOGY WORKING WITH WELL-KNOWN REPUTED MANUFACTURERS
                FROM CHINA, TAIWAN, ITALY ETC. OUR SUPPLIED MACHINERY WILL
                INSTALL BY OUR TECHNICAL EXPERT. OUR SUPPLIED MACHINERY WILL
                ENJOY ONE-YEAR WARRANTY/ GUARANTEE MAX4 TECHNOLOGY WILL PROVIDE
                LIFETIME TECHNICAL SUPPORT <br /> WE ARE COMMITTED TO SUPPLY A
                GOOD QUALITY SERVICES TO CUSTOMERS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto object-cover"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines;
                  it is a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
