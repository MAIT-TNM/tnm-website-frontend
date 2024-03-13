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
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl md:text-5xl my-6 md:my-10" style={gradientText}>
        Artist Lineup
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-8 justify-center">
        <ArtistCard name="EDM Night" date="21st March" image={edm} />
        <ArtistCard name="Raftaar" date="22nd March" image={raftaar} />
      </div>
    </div>
  );
};

const ArtistCard = ({ name, date, image }) => {
  return (
    <div className="w-full md:w-[300px] h-[500px] rounded-xl shadow-2xl border-[2px] border-[#919AA4]">
      <div
        className="w-full h-[85%] rounded-t-lg"
        style={{
          background: `url(${image}), rgba(255,255,255,0.05)`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center w-full h-[16%] rounded-b-xl bg-transparent">
        <p
          className="text-center text-xl font-ultra"
          style={{
            background: "-webkit-linear-gradient(white, #38495a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {name}
        </p>
        <p
          className="text-center text-xl font-ultra"
          style={{
            background: "-webkit-linear-gradient(white, #38495a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {date}
        </p>
      </div>
    </div>
  );
};

export default Artist;
