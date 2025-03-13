
import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";  
import MemorySection from "./components/MemorySection";
import Gallery from "./components/Gallery";
import Share from "./components/Share";
import Memories from "./components/Memories";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MemorySection/>
      <Gallery/>
     <Share/>
     <Memories/>
     <Product/>
    </div>
  );
};

export default App;
