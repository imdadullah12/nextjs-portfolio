import React from "react";

const Information = () => {
  const data = [
    "A decade of experience working as a freelance designer and Webflow developer, collaborating with over 100 companies, startups, and digital influencers worldwide.",
    "Worked with big companies like Dropbox, GitHub, Banco do Brasil, and Maven Clinic <i>(one of the most innovative companies by FastCompany).</i>",
    "Founder and teacher at <u>Curso de Webflow</u>, the first Webflow course in Brazil with over 400 students.",
    "Partner at <u>Finsweet</u> for 6 years, proudly contributing to one of the largest agencies specializing in Webflow globally.",
    "Specialized in Digital Marketing, designing and developing pages that sold more than 10 million dollars in Online Courses in Brazil.",
    "Creator and certified developer of the <u>Client-First</u> style system, utilized for crafting organized and easily maintainable websites.",
    "Experienced with Motion Graphics, After Effects, Lottie files, and Webflow interactions to create visually captivating animations.",
    "Master of Business Administration in Digital Innovation and the Future of Business at PUC-RS, preparing myself for the challenges and opportunities of the digital age.",
  ];
  return (
    <div className="w-[85%] m-auto h-auto flex items-stretch">
      <div className="left w-[150px] h-[960px] shrink-0">
        <div className="w-[2px] bg-gradient-to-b bar from-transparent h-[50%] via-[#2cf8ff] to-transparent sticky top-[100px] ml-auto"></div>
      </div>
      <div className="items">
        {data.map((item, index) => (
          <>
            <div className="flex pl-[100px] gap-6" key={index}>
              <div className="h-11 w-11 shrink-0 flex justify-center items-center bg-[#1c1e2a] rounded-md text-xl border border-[#ffffff27]">
                {index + 1}
              </div>
              <p
                className="text-[22px] font-light leading-[35px]"
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            </div>
            <hr className="my-6 ml-[100px] border-[#ffffff28]" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Information;
