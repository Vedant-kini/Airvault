import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";
import pic10 from "../assets/pic10.png";
import pic11 from "../assets/pic11.png";
import pic12 from "../assets/pic12.png";

// Images array
const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];

// Animated Image Component
const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`overflow-hidden rounded-xl shadow-sm ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </motion.div>
  );
};

// Main Gallery Component
const Gallery = () => {
  return (
    <section className="w-full py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        We know the faces you love
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
        AirVault uses AI to find your loved ones across all your memories, letting you relive those happy moments.
      </p>
      <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600">
        Try AirVault Now
      </button>

      {/* Image Grid Layout */}
      <div className="w-full mx-auto px-4 sm:px-6 mt-10 grid gap-4">
        {/* First Row - 5 Square Images on large screens, 4 on small */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.slice(0, 5).map((image, index) => (
            <AnimatedImage key={index} src={image} alt={`Memory ${index + 1}`} className="aspect-square" />
          ))}
        </div>

        {/* Second Row - 4 Images, width increases, only 3 on small screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(5, 9).map((image, index) => (
            <AnimatedImage key={index + 5} src={image} alt={`Memory ${index + 6}`} className="h-full" />
          ))}
        </div>

        {/* Third Row - 3 Images, width further increases, only 2 on small screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(9, 12).map((image, index) => (
            <AnimatedImage key={index + 9} src={image} alt={`Memory ${index + 10}`} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
