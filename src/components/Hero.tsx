import { Figma, Sparkles } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import image from "../guest.png"

const Hero = ({
  isHovered,
  setIsHovered,
}: {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="hero-main"
      className="relative min-h-[580px] max-h-[650px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background for hover effect */}
      <div
        className="hidden mb-7 lg:block absolute top-0 left-[25px] bottom-0 transition-all duration-500 z-5"
        style={{
          right: "25px",
          backgroundColor: "#F1EFFF",
          opacity: isHovered ? "1" : "0",
          cursor: 'url(../guest.png) 16 16, auto'
        }}
      />

      {/* Vertical Lines and Bottom Connector */}
      <div
        className="absolute top-0 w-0.5 h-[calc(100%-20px)] bg-[#6248FE] transition-transform duration-500 z-20 pb-12
        left-[10px] sm:left-[15px] md:left-[20px] lg:left-[25px] xl:left-[25px]"
        style={{ opacity: isHovered ? "0.8" : "0.4" }}
      >
      </div>
        <div
          className="absolute z-3000 -bottom-2 left-4 sm:left-5 md:left-6 lg:left-7 -translate-x-1/2 w-[13px] h-[13px] border-2 border-[#6248FE] bg-[#6248FE] transform translate-y-[10px] mb-9"
          style={{ opacity: 1 }}
        />
      <div
        className="absolute top-0 w-0.5 h-[calc(100%-20px)] bg-[#6248FE] transition-transform duration-500 z-20
        right-[10px] sm:right-[15px] md:right-[12px] lg:right-[25px] xl:right-[25px]"
        style={{ opacity: isHovered ? "0.8" : "0.4" }}
      >
      </div>
      <div className="absolute z-3000 -bottom-2 right-0.5 sm:right-1 md:right-2 lg:right-3 -translate-x-1/2 w-[13px] h-[13px] border-2 border-[#6248FE] bg-[#6248FE] transform translate-y-[10px] mb-9" />

      {/* Bottom Connecting Line */}
      <div>
        <div
          className="block absolute bottom-6 h-0.5 left-[10px] sm:left-[15px] md:left-[20px] lg:left-[25px] xl:left-[25px] right-[15px] sm:right-[15px] md:right-[20px] bg-blue-800 transition-all duration-500 -z-5"
          style={{
            // left: "25px",
            // right: "25px",
            opacity: isHovered ? "0.8" : "0.4",
          }}
        />
        <div className="absolute flex gap-6 left-12 -bottom-1 -translate-y-1/2 z-30">
          <button
            className="flex h-1/2 items-center py-1 gap-2 bg-purple-200 text-[#6248FE] px-4 rounded-lg hover:bg-[#6248FE] hover:text-white transition-all duration-300 relative top-[2px]"
            style={{ opacity: 1 }}
          >
            <Sparkles size={12} fill="#6248FE" />
            <span>Shuffle</span>
          </button>
          <button
            className="flex h-1/2 items-center gap-2 bg-white border border-blue-800 text-blue-800 px-4 rounded-full hover:bg-blue-50 transition-all duration-300 relative top-[6px]"
            style={{ opacity: 1 }}
          >
            <Figma size={12} />
            <span>1000+ Components</span>
          </button>
        </div>
      </div>
      <Navbar />

      {/* Left Side Images - Desktop */}
      <img
        src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65949937d9baec1f85575645_cursor-jessica-yellow_3x.png"
        className={`absolute ${
          isHovered && window.innerWidth >= 768 
            ? "bottom-32 sm:left-80 left-32" 
            : "bottom-44 sm:left-56 left-24"
        } w-[45px] sm:w-[69.5px] pointer-events-none z-20 transition-all duration-500 block`}
        alt="Mario Cursor"
        style={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      />
      <div
        className="lg:flex flex-col gap-4 absolute left-0 top-20 -translate-y-1/4 w-[300px] xl:w-[320px] transition-transform duration-500 px-8 z-10"
        style={{ transform: `translateX(${isHovered && window.innerWidth >= 768 ? "2.5rem" : "-1rem"})` }}
      >
        <div className="w-full -ml-[95%] md:-ml-[20%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65af4a6a6baf2d1aa79d942d_Image%203%20(3)-p-500.webp"
            className="w-full h-[140px] object-cover"
            alt="Design Example 1"
          />
        </div>
        <div className="w-full -ml-[100%] md:-ml-[40%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1a04a8ab6b5868d6f_Image%2011.png"
            className="w-full h-[140px] object-cover"
            alt="Design Example 2"
          />
        </div>
        <div className="w-full -ml-[95%] md:-ml-[20%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e82332d3f45a22e364d75_Image%201.webp"
            className="w-full h-[140px] object-cover"
            alt="Design Example 3"
          />
        </div>
      </div>

      {/* Right Side Images - Desktop */}
      <img
        src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/659499374a9e7199f028b4f0_cursor-blue-mario_3x.png"
        className={`absolute ${
          isHovered && window.innerWidth >= 768
            ? "top-32 sm:right-80 right-32" 
            : "top-44 sm:right-56 right-24"
        } w-[45px] sm:w-[69.5px] pointer-events-none z-20 transition-all duration-500 block`}
        alt="Mario Cursor"
        style={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      />
      <div
        className=" lg:flex flex-col gap-4 absolute right-0 top-20 -translate-y-1/4 w-[300px] xl:w-[320px] transition-transform duration-500 px-8 z-10"
        style={{ transform: `translateX(${isHovered && window.innerWidth >= 768  ? "-2.5rem" : "1rem"})` }}
      >
        <div className="w-full object-cover ml-[95%] md:ml-[20%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1d03db2b8ae8b2926_Image%207.png"
            className="w-full h-[140px] object-cover"
            alt="Design Example 4"
          />
        </div>
        <div className="w-full ml-[100%] md:ml-[40%] object-cover rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e839495208ba1f0d1329b_Image%204.webp"
            className="w-full h-[140px] object-cover"
            alt="Design Example 5"
          />
        </div>
        <div className="w-full ml-[95%] md:ml-[20%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e823332cb3de9f06c7e10_Image%205.webp"
            className="w-full h-[140px] object-cover"
            alt="Design Example 6"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col justify-center align-center py-16 md:py-24 w-full px-4 z-20">
        {/* User Stats */}
        <div className="flex justify-center px-2 overflow-x-auto">
          <div className="flex items-center justify-center gap-1 xs:gap-2 mb-8 z-20 border px-2 py-1 rounded-full whitespace-nowrap text-[10px] xs:text-xs sm:text-sm md:text-base">
            <span className="text-[#FF4D4D] font-medium">400k+</span>
            <span>Designers & Devs build with Relume</span>
            <div className="flex -space-x-1 sm:-space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop"
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop"
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <h1
            id="main-header"
            className="text-[56px] sm:max-w-lg lg:max-w-6xl sm:text-3xl md:text-2xl lg:text-[92px] font-extrabold leading-tight mb-8"
          >
            Websites designed &<br />
            built faster with AI
          </h1>

          <p className="text-base font-medium sm:text-base md:text-sm lg:text-xl text-gray-600 max-w-sm sm:max-w-lg md:max-w-lg lg:max-w-2xl mx-auto mb-12">
            Use AI as your design ally, not as a replacement. Effortlessly
            generate sitemaps and wireframes for marketing websites in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;