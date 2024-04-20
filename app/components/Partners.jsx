"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Partners = () => {
  const companies = [
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff3_logo-finsweet.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff4_logo-github.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff5_logo-dropbox.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff0_logo-maven.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff2_logo-mormaii.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccfef_logo-banco-do-brasil.svg",
    "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff1_logo-husky.svg",
  ];

  const splideOptions = {
    type: "loop",
    drag: false,
    focus: "center",
    arrows: false,
    rewind: true,
    gap: "3em",
    perPage: 5,
    direction: "ltr",
    pauseOnHover: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
    },
    autoScroll: {
      pauseOnHover: false,
      speed: 2,
      interval: 3000, // Set the interval for auto-scroll in milliseconds.
    },
  };

  return (
    <div className="relative">
      <div className="h-[300px] z-[-999] w-[300px] top-[200px] rounded-full left-[300px] blur-[200px] bg-green-500 absolute"></div>
      <div className="h-[300px] z-[-999] w-[300px] top-[200px] rounded-full left-[500px] blur-[200px] bg-blue-500 absolute"></div>
      <div className="h-[400px] z-[-999] w-[400px] top-[100px] rounded-full left-[350px] blur-[200px] bg-gradient-to-l from-blue-500 to-green-500 absolute"></div>

      <div className="pt-[200px] pb-6">
        <h1 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-[#2cf8ff] to-[#02e6ff]">
          GREAT COMPANIES EXPERIENCE
        </h1>
        <h1 className="text-center text-[110px] font-normal">
          Clients I worked with
        </h1>
      </div>
      <div className="track splide pb-[200px]">
        <Splide
          aria-label="States"
          options={splideOptions}
          extensions={{ AutoScroll }}
        >
          {companies.map((item, index) => (
            <SplideSlide key={index}>
              <div className="box p-12 rounded-xl border border-[#ffffff43] backdrop-blur-xl">
                <img src={item} className="h-[120px] w-[180px]" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Partners;
