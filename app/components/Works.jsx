import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Works = () => {
  const projects = [
    {
      title: "Octogatos",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65aa727d2cba3ce6160cd064_octogatos.png",
    },
    {
      title: "Protext AI",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65bffcc6de2bb30c81ab48e8_protex-ai-p-1080.png",
    },
    {
      title: "XB Fulfillment",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65aa727d2cba3ce6160cd061_xb-fulfillment.png",
    },
    {
      title: "Adaflow",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c924a115a8106a1d0450ab_adaflow-min-p-1080.png",
    },
    {
      title: "Raise",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c010624df04aca9f78f884_raise-p-1080.png",
    },
    {
      title: "Deepscribe",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c411ded1f4702114b7aa8e_deepscribe-p-1080.png",
    },
    {
      title: "Tiamo",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c92497992ced90028e17a9_tiamo.png",
    },
    {
      title: "Masson",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c92413b02e7eb54f9e8734_masson-min-p-1080.png",
    },
    {
      title: "Hifi Bridge",
      state: "Assam | India",
      footer: "Designed By: PP • Developed By: Pen Programmer Team",
      url: "https://assets-global.website-files.com/65aa727d2cba3ce6160ccfd1/65c00a0114cbc515b27ec017_hifi-bridge-p-1080.png",
    },
  ];

  return (
    <div className="my-5">
      <h1 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-[#2cf8ff] to-[#02e6ff]">
        HAPPY CLIENTS {"<3  "}
      </h1>
      <h1 className="text-center text-[120px] font-light">Recent Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {projects.map((item, index) => (
          <div
            className="group space-y-4 bg-zinc-900 hover:bg-black transition-all duration-300 rounded-lg p-4"
            key={index}
          >
            <img src={item.url} alt="" className="rounded-lg" />
            <div className=" inner-box bg-zinc-800 group-hover:bg-zinc-900 transition-all duration-[0.5s] rounded-lg p-4 px-5">
              <div className="flex items-center justify-between">
                <div className="text relative h-[40px] overflow-hidden">
                  <h1 className="text-[27px] font-bold group-hover:translate-y-[-35px] transition-all duration-[0.5s]">
                    {item.title}
                  </h1>
                  <h1 className="text-[27px] font-bold group-hover:translate-y-[-40px] transition-all duration-[0.5s]">
                    {item.title}
                  </h1>
                </div>
                <FaArrowRight
                  size={20}
                  className="group-hover:rotate-[-45deg] transition-all duration-300"
                />
              </div>
              <div className="flex gap-2 my-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"
                  alt=""
                  width={25}
                />
                <h2 className="opacity-80">{item.state}</h2>
              </div>
              <div className="credit mt-7">
                <p className="text-[13px] opacity-50">{item.footer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
