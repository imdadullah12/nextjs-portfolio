"use client";
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="py-12 m-auto ">
      <video
        className="h-[600px] m-auto w-[85%] object-cover rounded-3xl brightness-75"
        muted
        autoPlay
        src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160cd02a_about-video-transcode.mp4"
      ></video>
      <marquee
        direction="left"
        className="mt-[-80px]"
        scrollamount="20"
        loop="2"
      >
        <div className="flex items-center gap-4 justify-center">
          <h1 className="text-9xl text-nowrap">Welcome to Pen Programmer</h1>
          <div className="branding shrink-0 h-[170px] p-4 w-[170px] border border-[#ffffff3c] rounded-full bg-gradient-radial from-[#0b3f41] to-[#000000ae] relative">
            <motion.div
              animate={{ rotate: ["0deg", "360deg"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <img
                src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abd138e446544d9e955b7a_webflow-developer.svg"
                alt=""
              />
            </motion.div>
            <img
              src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccfec_webflow-logo.svg"
              alt=""
              className="absolute w-[50px] left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
          <h1 className="text-9xl text-nowrap">We are awesome developers</h1>
        </div>
      </marquee>
    </div>
  );
};

export default Video;
