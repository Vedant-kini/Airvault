import React from "react";
import iphone from "../assets/iphone.png"; // Replace with actual path

const MemorySection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 md:px-8 mt-16">
      {/* Text Content */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        AirVault doesn't just store your media. <br />
        <span className="text-gray-800">We track your memories.</span>
      </h2>
      <p className="mt-4 text-gray-600 text-lg">
        Your entire life story right at your fingertips.
      </p>
      <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600">
        Try AirVault Now
      </button>

      {/* Image (Both Phones in One) */}
      <div className="mt-10 flex justify-center">
        <img
          src={iphone}
          alt="AirVault Memories"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
};

export default MemorySection;
