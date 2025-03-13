import React from "react";
import last1 from "../assets/last1.png";
import last2 from "../assets/last2.png";
import last3 from "../assets/last3.png";

const Product = () => {
  return (
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-xl text-gray-600 max-w-2xl mb-8">
        Explore our wide selection of products that help you preserve your
        memories, in your own style.
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-left">
          <h3 className="text-lg font-semibold">
            <span className="text-blue-600">AirVault Cloud</span> is built for
            people who like to keep it <span className="font-bold">simple</span>.
          </h3>
          <p className="text-gray-600 mt-2">
            AirVault Cloud lets you pack light on your trips so you can{" "}
            <span className="font-semibold">explore the world with just your phone</span>.
          </p>
          <img src={last1} alt="Phone UI" className="w-28 h-auto mt-4" />
          <button className="mt-4 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
            Try AirVault Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-left">
          <h3 className="text-lg font-semibold">
            <span className="text-purple-600">AirVault Go</span> is built for
            people who like to keep it <span className="font-bold">close</span>.
          </h3>
          <p className="text-gray-600 mt-2">
            AirVault Go lets you keep all your{" "}
            <span className="font-semibold">memories in your pocket</span>, so you
            can take them with you even on the craziest of adventures.
          </p>
          <img src={last2} alt="Device Image" className="w-32 h-auto mt-4" />
          <button className="mt-4 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
            Try AirVault Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-left">
          <h3 className="text-lg font-semibold">
            <span className="text-orange-500">AirVault Pro</span> is built for
            people who are <span className="font-bold">hungry for power</span>.
          </h3>
          <p className="text-gray-600 mt-2">
            AirVault Pro brings the power of distributed hosting into a single
            compact package, allowing your team to{" "}
            <span className="font-semibold">simultaneously access all your files at blazing fast speed</span>!
          </p>
          <img src={last3} alt="Server Image" className="w-36 h-auto mt-4" />
          <button className="mt-4 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
            Try AirVault Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
