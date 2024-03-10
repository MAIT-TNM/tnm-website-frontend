import React from "react";
import one from "../images/coca.jpg";
import two from "../images/mnster.jpg";
import three from "../images/jndal.png";
import four from "../images/bikanerwala.png";
import five from "../images/campus.jpg";
import six from "../images/redbull.jpg";
import seven from "../images/french.png";
import eight from "../images/g3s.jpg";
import nine from "../images/zom.jpg";
import ten from "../images/bereal.png";
import eleven from "../images/adda.png";
import twelve from "../images/union.png";
import thirteen from "../images/devfolio.png";
import fourteen from "../images/amul.png";
import fifteen from "../images/zebronics.avif";

const SponsorContent = () => {
  const sponsorCard = {
    width: "200px",
    height: "200px",
  };

  return (
    <div className="grid grid-cols-5 gap-5">
      <div style={sponsorCard}>
        <img
          src={one}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={two}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={three}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={four}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={five}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={six}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={seven}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={eight}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={nine}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={ten}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={eleven}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={twelve}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={thirteen}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={fourteen}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
      <div style={sponsorCard}>
        <img
          src={fifteen}
          alt="coca-cola"
          className="w-full h-full shadow-2xl rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SponsorContent;
