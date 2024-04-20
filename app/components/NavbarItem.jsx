import clsx from "clsx";
import React from "react";

const NavbarItem = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "About Me", link: "/" },
    { title: "Work", link: "/" },
    { title: "Services", link: "/" },
    { title: "Webflow Expert", link: "/" },
  ];
  return (
    <div className="w-full px-12 my-12 sticky top-[20px] z-[1000]">
      <div className="border border-[#ffffff4f] backdrop-blur-md flex gap-4 py-6 rounded-full px-12 w-[70%] justify-between m-auto">
        {items.map((item, index) => (
          <h1
            className={clsx(
              "text-xl pr-12",
              index != items.length - 1 && "border-r border-r-[#ffffff4f]"
            )}
          >
            {item.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default NavbarItem;
