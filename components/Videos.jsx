import React from "react";

export default function Videos() {
  return (
    <section className="text-gray-600 body-font mb-20">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4 py-10 ">
          <div className="p-4 md:w-1/3 w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden">
              <iframe
                className="lg:h-60 md:h-36 h-48 w-full object-cover object-center"
                src="https://www.youtube.com/embed/TJSfbbYx5q8?si=IHhDDfrzmWyyhTP7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="p-6 text-center bg-white">
                <h1 className="title-font uppercase text-lg font-medium text-gray-900 mb-3">
                  Machine
                </h1>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden">
              <iframe
                className="lg:h-60 md:h-36 h-48 w-full object-cover object-center"
                src="https://www.youtube.com/embed/TJSfbbYx5q8?si=IHhDDfrzmWyyhTP7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="p-6 text-center bg-white">
                <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                  Row Products
                </h1>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden">
              <iframe
                className="lg:h-60 md:h-36 h-48 w-full object-cover object-center"
                src="https://www.youtube.com/embed/TJSfbbYx5q8?si=IHhDDfrzmWyyhTP7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="p-6 text-center bg-white">
                <h1 className="title-font text-lg uppercase font-medium text-gray-900 mb-3">
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
