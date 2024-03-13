import React from "react";
import Footer from "../components/Footer";
import one from "../images/college1.jpeg";
import two from "../images/college2.JPG";
import three from "../images/college3.jpg";
import four from "../images/college4.jpg";
import five from "../images/college8.JPG";
import six from "../images/college6.JPG";
import seven from "../images/college7.JPG";
import eight from "../images/college5.jpg";
import nine from "../images/college9.JPG";

const Gallery = () => {
  return (
    <>
      <div className="text-white w-full flex justify-center min-h-screen mt-[150px] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={one}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={two}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={three}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={four}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={five}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={six}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={seven}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={eight}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="w-full h-[300px] md:h-[400px] shadow-2xl rounded-[10px] overflow-hidden">
            <img
              src={nine}
              alt="gallery-one"
              className="w-full h-full bg-contain bg-center rounded-[10px] hover:scale-125 transition-all duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
