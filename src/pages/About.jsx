import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import { FaUtensils, FaLeaf, FaSmile } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="min-h-screen w-full  text-black bg-black bg-opacity-80 relative">
      <div
        className="absolute  bg-cover bg-center h-full w-full z-0"
        style={{ backgroundImage: `url(${aboutImg})` }}
      ></div>

      {/* Overlay of it.... */}
      <div className="absolute  bg-black bg-opacity-70 z-10"></div>

      {/* Content of it..... */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl text-black  md:text-5xl font-bold text-center mb-6">
          קเєςє ๏ภ קlคtє
        </h1>
        <p className="text-center p-2 rounded-2xl opacity-80 font-bold max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
          At{" "}
          <span className="font-semibold  text-red-600">קเєςє ๏ภ קlคtє</span>,
          we believe dining is an art. Our passion lies in crafting dishes that
          combine fresh ingredients, bold flavors, and elegant presentation.
          Whether you're sharing a moment with friends or celebrating something
          special, we serve each plate with care, creativity, and love.
        </p>

        {/* cards of it..... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="  bg-gradient-to-tr from-zinc-800 to-orange-200 bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition duration-300">
            <FaUtensils className="mx-auto text-4xl text-orange-400 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">
              Delicious Cuisine
            </h3>
            <p className="text-sm text-black font-light">
              Experience handcrafted meals with unforgettable taste.
            </p>
          </div>

          <div className=" bg-gradient-to-tr from-zinc-800 to-red-400 bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition duration-300">
            <FaLeaf className="mx-auto text-4xl text-green-400 mb-4" />
            <h3 className="text-xlblack text-black font-semibold mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-sm text-black font-light">
              Locally sourced and seasonally inspired produce.
            </p>
          </div>

          <div className=" bg-gradient-to-tr from-zinc-800 to-pink-400 bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition duration-300">
            <FaSmile className="mx-auto text-4xl text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">
              Warm Hospitality
            </h3>
            <p className="text-sm text-black font-light">
              Our guests are family. We serve with joy and gratitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
