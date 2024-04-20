import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex px-[100px] justify-between items-center">
      <div className="h-[500px] w-[500px] top-[-100px] left-[-200px] bg-[#1072759c] rounded-full blur-[100px] absolute"></div>
      <div className="fixed h-[500px] w-[500px] top-[100px] right-[-230px] bg-[#1072759c] rounded-full blur-[100px] "></div>
      <h1 className="text-[#18fbd2] text-3xl tracking-tighter font-light font-arial">
        PenProgrammer
      </h1>
      <div className="right flex items-center gap-6">
        <Link
          href={"#"}
          className="opacity-70 hover:opacity-50 transition-all duration-200"
        >
          Web Development
        </Link>
        <button className="flex items-center gap-4 px-6 py-4 rounded-full border border-[#215d60]">
          <div className="dot h-[8px] w-[8px] bg-[#18ffb0] rounded-full"></div>
          <div className="flex-1 overflow-hidden">
            <marquee scrollamount="5" loop="2" className="inline">
              <span>Available for work</span>
            </marquee>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
