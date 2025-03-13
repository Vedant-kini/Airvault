import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/image1.png";
import pic2 from "../assets/image2.png";
import pic3 from "../assets/image3.png";
import pic4 from "../assets/image4.png"
import airdrop from "../assets/image5.png"
import messages from "../assets/image6.png"
import mail from "../assets/image7.png"
import bluetooth from "../assets/image8.png"
const Share = () => {
  return (
    <section className="w-full py-12 bg-white text-center flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The best moments are the ones you share
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Share your memories with your friends and family with a single click.
        </p>
        <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600">
          Try AirVault Now
        </button>
      </div>

      <div className="relative mt-10 w-full max-w-4xl flex justify-center">
        {/* Image 1 */}
        <motion.div className="absolute w-[200.83px] h-[241px] top-[39.99px] left-[16.05px] rounded-[19.28px] rotate-[-3.82deg] shadow-lg">
          <img src={pic1} alt="Memory 1" className="w-full h-full rounded-[19.28px]" />
          <p className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded-md">
            Moments of Serendipity
          </p>
        </motion.div>
        
        {/* Image 2 */}
        <motion.div className="absolute w-[191.67px] h-[230px] top-[223.19px] left-[59px] rounded-[18.4px] rotate-[3.02deg] shadow-lg">
          <img src={pic2} alt="Memory 2" className="w-full h-full rounded-[18.4px]" />
          <p className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded-md">
            Neel’s Bachelor Party
          </p>
        </motion.div>
        
        {/* Image 3 */}
        <motion.div className="absolute w-[328.33px] h-[394px] top-[10.02px] left-[232px] rounded-[31.52px] rotate-[1.75deg] shadow-lg">
          <img src={pic3} alt="Memory 3" className="w-full h-full rounded-[31.52px]" />
          <p className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded-md">
            New Year's Eve Party
          </p>
        </motion.div>
        
        {/* Phone UI */}
        <motion.div className="absolute w-[420px] h-[362px] top-[69.92px] left-[471px] bg-white shadow-lg rounded-[30px] p-4 border">
<div className="w-[380px] h-[100px] bg-gray-200 rounded-[20px] flex items-center px-4">
  <img src={pic4} alt="Thumbnail" className="w-[56px] h-[56px] rounded-[20px] mr-4" />
  <div>
    <p className="text-gray-900 font-semibold">Paradise in the sand</p>
    <p className="text-gray-600 text-sm">Dec 25, 2024 • 54 items</p>
  </div>
</div>

<div className="mt-4 flex justify-center gap-[24px]">
  <button className="flex items-center gap-2 bg-[#2766F5] text-white px-[12px] py-[6px] rounded-[18px] shadow-md w-[107px] h-[34px]">
    <span className="text-sm font-semibold">🔗 Get Link</span>
  </button>
  <button className="text-[#2766F5] text-sm font-semibold w-[75px] h-[18px]">Options ›</button>
</div>

<div className="mt-6 flex justify-around">
  <img src={airdrop} alt="AirDrop" className="w-[66px] h-[62px] rounded-[13.93px]" />
  <img src={messages} alt="Messages" className="w-[66px] h-[62px] rounded-[13.93px]" />
  <img src={mail} alt="Mail" className="w-[66px] h-[62px] rounded-[13.93px]" />
  <img src={bluetooth} alt="Bluetooth" className="w-[66px] h-[62px] rounded-[13.93px]" />
</div>
</motion.div>
      </div>
    </section>
  );
};

export default Share;
