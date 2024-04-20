import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NavbarItem from "./components/NavbarItem";
import Quotes from "./components/Quotes";
import Video from "./components/Video";
import Information from "./components/Information";
import Works from "./components/Works";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="parent min-h-screen items-start flex justify-between">
      <div className="w-full">
        <Navbar />
        <Hero />
        <NavbarItem />
        <Quotes />
        <Video />
        <Information />
        <Works />
        <Partners />
      </div>
    </div>
  );
}
