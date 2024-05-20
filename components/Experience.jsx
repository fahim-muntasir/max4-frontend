import React from "react";

export default function Experience() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            OVER 2 YEARS OF EXPERIENCE
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloribus magnam at hic rerum, voluptatem iste eaque architecto deleniti porro labore? Amet accusamus consequuntur, eum mollitia maxime vel. Similique aperiam minus quisquam quo soluta aspernatur voluptatibus rem recusandae architecto aut, reprehenderit sit, consequatur eligendi iste numquam voluptas ipsam nobis quos dolores quibusdam asperiores cum. Dolores reprehenderit ullam dolorem voluptates perferendis esse aut nulla sapiente ab, illum, maxime tenetur. Soluta quos reprehenderit magnam blanditiis laudantium voluptas nihil voluptatibus molestias, facere possimus?
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
              About Us
            </button>
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
