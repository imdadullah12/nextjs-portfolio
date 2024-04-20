import React from "react";
import { IoMdGlobe } from "react-icons/io";

const Quotes = () => {
  return (
    <>
      <div className="w-full px-12 my-12 flex justify-center items-center">
        <div className="bg-gradient-radial -z-40 h-[900px] w-[900px] blur-[50px] rounded-full absolute from-[#0f5155c1] via-[#000000be] to-[#000]"></div>
        <div className="h-[500px] w-[500px] relative rounded-full border-2 border-[#fff4] border-dashed flex justify-center items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-[#22fbda] rounded-full globe">
            <IoMdGlobe size={30} color="#000" />
          </div>
          <div className="h-[300px] w-[300px] rounded-full border-2 border-[#fff4] border-dashed">
            <h1 className="text-center w-[900px] text-7xl tracking-[5px] font-bold leading-[80px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              10+ YEARS OF <br /> EXPERIENCE IN <br /> WEB DEVELOPMENT
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
