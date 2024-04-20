"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import clsx from "clsx";

const Hero = () => {
  const [imageState, setImageState] = useState("ok");
  const text = "DESIGNER & WEBFLOW EXPERT";
  return (
    <div className="flex items-center">
      <div className="left w-[50%]">
        {imageState == "ok" && (
          <Image
            width={800}
            height={800}
            className="w-full h-[600px] object-contain"
            src={
              "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d18eb857e69f038a69_evekayser-ok-p-800.jpeg"
            }
          />
        )}
        {imageState == "smile" && (
          <Image
            width={800}
            height={800}
            className="w-full h-[600px] object-contain"
            src={
              "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d12f963c198a9563ba_evekayser-happy.jpeg"
            }
          />
        )}
        {imageState == "sad" && (
          <Image
            width={800}
            height={800}
            className="w-full h-[600px] object-contain"
            src={
              "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d1a6bef4b4571f5f26_evekayser-sad-p-800.jpeg"
            }
          />
        )}
      </div>
      <div className="right space-y-5 flex-1">
        <h3 className="text-[#1fb5b2] text-2xl">
          {text.split("").map((item, index) => (
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              key={index}
              className={clsx("inline-block", item == " " ? "px-1" : "")}
            >
              {item}
            </motion.span>
          ))}
        </h3>
        <h1 className="text-6xl">
          Agency-level web development <br /> services at <br /> freelancer
          rates
        </h1>
        <p className="text-xl">
          My mission is to design and develop a website <br /> that you and your
          audience love .
        </p>
        <button
          onMouseEnter={() => setImageState("smile")}
          onMouseLeave={() => {
            setImageState("sad");
          }}
          className="flex gap-4 items-center pl-8 pr-2 py-2 bg-gradient-to-tr rounded-full text-xl from-[#0e7166] to-[#001e1a]"
        >
          Happy to chat on WhatsApp
          <div className="flex items-center justify-center h-[60px] bg-[#18feb2] rounded-full w-[60px]">
            <FaWhatsapp size={35} color="#010708" />
          </div>
        </button>
      </div>
      <div className="branding h-[170px] p-4 w-[170px] border border-[#ffffff3c] rounded-full bg-gradient-radial from-[#0b3f41] to-[#000000ae] absolute left-[40px] bottom-[30px]">
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
    </div>
  );
};

export default Hero;
