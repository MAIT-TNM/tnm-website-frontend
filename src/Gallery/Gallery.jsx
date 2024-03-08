import React from "react";
import img from "../images/event.jpg";

const Gallery = () => {
  const imgStyles = {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  };

  return (
    <div className="text-white w-full flex justify-center min-h-screen mt-[150px] overflow-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
        </div>
        <div className="flex items-center gap-8">
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
        </div>
        <div className="flex items-center gap-8">
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
          <div
            className="w-[400px] h-[400px] shadow-2xl"
            style={imgStyles}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
