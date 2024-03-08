import React from "react";
import event from "../images/event.jpg";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div
      className="w-[22rem] h-[25rem] bg-[rgba(255,255,255,0.05)] rounded-xl backdrop-blur-[1px] p-4 flex flex-col items-center gap-2 eventCard overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <div
        className="w-full h-full rounded-xl"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.9)), url(${event})`,
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-4 w-[91%] rounded-b-xl h-[100px] flex items-center px-3">
          <div>
            <span className="text-white">Basketball</span>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link to="/basketball">
            <button
              className="w-[5rem] text-slate-200 p-2 border-slate-200 border-[1px] rounded-md"
              style={{ fontFamily: "Poppins" }}
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
