import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const Memories = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center text-center mt-[435px] relative min-h-[950px] overflow-visible z-10">



      {/* Heading */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Your memories are worth everything!
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          No one understands it better than us.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-[90%] max-w-7xl h-[500px] flex justify-center">
        {/* Image 1 - Left Edge */}
        <motion.img
          src={img1}
          alt="Memory 1"
          className="absolute w-[250px] h-[320px] rounded-[36px] shadow-lg object-cover"
          style={{ top: "50px", left: "5%", rotate: "-5deg" }}
        />

        {/* Image 2 */}
        <motion.img
          src={img2}
          alt="Memory 2"
          className="absolute w-[250px] h-[320px] rounded-[36px] shadow-lg object-cover"
          style={{ top: "100px", left: "25%", rotate: "3deg" }}
        />

        {/* Image 3 - Center (Brings Focus) */}
        <motion.img
          src={img3}
          alt="Memory 3"
          className="absolute w-[270px] h-[340px] rounded-[36px] shadow-lg object-cover z-10"
          style={{ top: "40px", left: "45%", rotate: "2deg" }}
        />

        {/* Image 4 */}
        <motion.img
          src={img4}
          alt="Memory 4"
          className="absolute w-[250px] h-[320px] rounded-[36px] shadow-lg object-cover"
          style={{ top: "120px", left: "65%", rotate: "-3deg" }}
        />

        {/* Image 5 - Right Edge */}
        <motion.img
          src={img5}
          alt="Memory 5"
          className="absolute w-[250px] h-[320px] rounded-[36px] shadow-lg object-cover"
          style={{ top: "70px", left: "85%", rotate: "2deg" }}
        />
      </div>
    </section>
  );
};

export default Memories;
