import React from "react";
import college from "../images/college.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center px-4">
      <h2
        className="text-4xl md:text-5xl my-6 md:my-10"
        style={{
          fontFamily: "Rundeck",
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About
      </h2>
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-col items-center gap-8 md:gap-12">
        <div className="w-full flex flex-wrap gap-5 justify-center">
          <InfoCard title="Events" number={50} />
          <InfoCard title="Footfall" number={20000} />
          <InfoCard title="Prize Pool" number={200000} />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-grow md:w-1/2 overflow-auto 2xl:overflow-hidden h-[350px] text-white px-7 py-5 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl">
            <p className="text-lg text-justify font-poppins">
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
          <div className="hidden md:flex h-[350px] md:w-1/2 flex text-white p-5 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl">
            <img
              src={college}
              alt="college"
              className="object-contain rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, number }) => {
  return (
    <div className="flex w-full md:w-[33%] flex-grow flex-col items-center text-white py-7 px-8 bg-[rgba(255,255,255,0.05)] border-[1px] border-[#252525] backdrop-blur-sm rounded-xl shadow-2xl gap-2">
      <span className="text-2xl" style={{ fontFamily: "Ultra, serif" }}>
        <CountUp start={0} end={number} duration={3} delay={0} />+
      </span>
      <span className="text-lg font-bold" style={{ fontFamily: "Poppins" }}>
        {title}
      </span>
    </div>
  );
};

export default About;
