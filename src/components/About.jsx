import React from "react";
import college from "../images/college.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="flex flex-col snap-start w-full h-full items-center justify-center">
      <h2
        className="text-5xl my-10"
        style={{
          "font-family": "Rundeck",
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About
      </h2>
      <div className="w-[60%] flex flex-col items-center gap-5">
        <div className="w-full flex items-center gap-5">
          <div className="flex w-[33%] flex-grow flex-col items-center text-white py-7 px-8 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
            <span className="text-2xl" style={{ fontFamily: "Ultra, serif" }}>
              <CountUp start={0} end={50} duration={3} delay={0} />+
            </span>
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Events
            </span>
          </div>
          <div className="flex w-[33%] flex-grow flex-col items-center text-white py-7 px-8 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
            <span className="text-2xl" style={{ fontFamily: "Ultra, serif" }}>
              <CountUp start={0} end={20000} duration={3} delay={0} />+
            </span>
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Footfall
            </span>
          </div>
          <div className="flex w-[33%] flex-grow flex-col items-center text-white py-7 px-8 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
            <span className="text-2xl" style={{ fontFamily: "Ultra, serif" }}>
              <CountUp start={0} end={200000} duration={3} delay={0} />+
            </span>
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Prize Pool
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-grow w-[500px] overflow-scroll h-[350px] flex-col text-white px-7 py-5 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
            <p
              className="text-lg text-justify"
              style={{ fontFamily: "Poppins" }}
            >
              <span className="text-4xl">"</span>
              Techsurge and Mridang, the annual fest of Maharaja Agrasen
              Institute of Technology, draws over 20,000 students from across
              Delhi-NCR for two days of cultural celebration.
              <br />
              <br />
              With a wide array of events spanning music, dance, theatre, and
              more, it's a platform for creative talents to shine.
              <br />
              <br />
              This grand fiesta mesmerizes attendees with literary, musical, and
              artistic showcases, earning it the reputation as one of North
              India's largest technical and cultural festivals.
              <span className="text-4xl">"</span>
            </p>
          </div>
          <div className="h-[350px] flex text-white p-5 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
            <img
              src={college}
              alt="college"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
