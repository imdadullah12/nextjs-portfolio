"use client";
import React from "react";
import { motion } from "framer-motion";

const Practice = () => {
  return (
    <div className="w-[300px] h-[300px] bg-red-400 rounded-full p-5">
      <motion.div
        animate={{ rotate: ["0deg", "360deg"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        <img
          src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abd138e446544d9e955b7a_webflow-developer.svg"
          alt=""
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Practice;
