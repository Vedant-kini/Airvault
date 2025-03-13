import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[75vh] flex flex-col justify-center items-center text-center bg-white px-6 pt-0 mt-[-20px]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Your photo gallery is a mess! <br />
        <span className="text-gray-700">We can fix it.</span>
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        AirVault is the easiest way to capture and relive your memories.
      </p>
      <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600">
        Try AirVault Now
      </button>
    </section>
  );
};

export default Hero;



