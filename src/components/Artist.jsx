import React from "react";
import raftaar from "../images/raftaar.jpg";
import edm from "../images/edm.jpg";

const Artist = () => {
  const gradientText = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Rundeck",
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl my-10 p-2" style={gradientText}>
        Artist Lineup
      </h1>
      <div className="w-[40%] flex items-center justify-between">
        <div className="w-[300px] h-[500px] rounded-xl shadow-2xl border-[2px] border-[#919AA4]">
          <div
            className="w-full h-[85%] rounded-t-lg"
            style={{
              background: `url(${edm}), rgba(255,255,255,0.05)`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col items-center justify-center w-full h-[16%] rounded-b-xl bg-transparent">
            <p
              style={{
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Ultra",
              }}
            >
              EDM Night
            </p>
            <p
              style={{
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Ultra",
              }}
            >
              21st March
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[500px] rounded-xl shadow-2xl border-[2px] border-[#919AA4]">
          <div
            className="w-full h-[85%] rounded-t-lg"
            style={{
              background: `url(${raftaar}), rgba(255,255,255,0.05)`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col items-center justify-center w-full h-[16%] rounded-b-xl bg-transparent">
            <p
              style={{
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Ultra",
              }}
            >
              Raftaar
            </p>
            <p
              style={{
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Ultra",
              }}
            >
              22nd March
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
