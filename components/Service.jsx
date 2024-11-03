import React from "react";
import Link from "next/link";

export default function Service() {
  return (
    <section className="text-gray-600 body-font mb-36 bg-gray-50">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4 py-10 justify-center ">
          <div className="p-4 md:w-1/3">
            <Link href="/products/sports-shoe-machines">
              <div className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center"
                  src="/assets/img/sports_shoes/high_frequency.jpg"
                  alt="blog"
                />
                <div className="p-6 text-center bg-white ">
                  <h1 className="title-font uppercase text-lg font-medium text-gray-900 mb-3">
                    Sports shoe machines
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            <Link href="/products/leather-shoe-machines">
              <div className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center"
                  src="/assets/img/leather_shoes/ATOM_turning_arm.png"
                  alt="blog"
                />
                <div className="p-6 text-center bg-white ">
                  <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                    Leather shoe machines
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            <Link href="/products/leather-goods-machines">
              <div className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center"
                  src="/assets/img/leather_goods/669.png"
                  alt="blog"
                />
                <div className="p-6 text-center bg-white ">
                  <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                    Leather goods machines
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            <Link href="/products/hand-gloves">
              <div className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center"
                  src="/assets/img/hand_gloves/0303.png"
                  alt="blog"
                />
                <div className="p-6 text-center bg-white ">
                  <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                    Hand Gloves
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            <Link href="/products/lab-testing-equipment-and-others">
              <div className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center"
                  src="/assets/img/lab_testing_equipments/mmexport1730625282855.jpg"
                  alt="blog"
                />
                <div className="p-6 text-center bg-white ">
                  <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                    Lab Testing equipments and others
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
