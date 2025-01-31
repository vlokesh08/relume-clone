import { Shuffle, Sparkles } from "lucide-react";
import React, { useState } from "react";

const Generate = () => {
  const [description, setDescription] = useState("");
  return (
    <>
      <div id="temp" className="w-full max-w-3xl mx-auto px-4 mt-5">
        <div className="relative group transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          {/* Gradient border using pseudo-element */}
          <div className="absolute -top-[2px] -right-[2px] -left-[2px] -bottom-[8px] rounded-2xl bg-gradient-to-r from-[#FF7248] to-[#6248FF] " />

          {/* Main content */}
          <div className="relative flex flex-col sm:flex-row items-center gap-3 bg-white rounded-2xl p-2">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe a company in a sentence or two..."
              className="flex-1 px-4 py-3 text-gray-600 placeholder-gray-400 bg-transparent border-none focus:outline-none text-lg"
            />
            <button className="flex items-center gap-2 px-6 py-3 bg-[#6C63FF] hover:bg-[#5B54FF] text-white rounded-xl font-medium transition-colors duration-200">
              <Sparkles className="w-4 h-4" />
              Generate
            </button>
          </div>
        </div>

        {/* Helper text */}
        <div className="mt-4 text-center text-gray-600">
          Take it for a spin with an{" "}
          <button className="text-gray-900 underline underline-offset-4 hover:text-gray-700 transition-colors">
            example
          </button>
        </div>
      </div>
    </>
  );
};

export default Generate;
