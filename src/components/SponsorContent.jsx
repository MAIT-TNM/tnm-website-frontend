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
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          <SponsorCard image={one} />
          <SponsorCard image={two} />
          <SponsorCard image={three} />
          <SponsorCard image={four} />
          <SponsorCard image={five} />
          <SponsorCard image={six} />
          <SponsorCard image={seven} />
          <SponsorCard image={eight} />
          <SponsorCard image={nine} />
          <SponsorCard image={ten} />
          <SponsorCard image={eleven} />
          <SponsorCard image={twelve} />
          <SponsorCard image={thirteen} />
          <SponsorCard image={fourteen} />
          <SponsorCard image={fifteen} />
        </div>
      </div>
    </div>
  );
};

const SponsorCard = ({ image }) => {
  const sponsorCard = {
    width: "300px", // Increased width
    height: "300px", // Increased height
  };
  return (
    <div style={sponsorCard}>
      <img
        src={image}
        alt="sponsor"
        className="w-full h-full object-cover shadow-2xl rounded-2xl"
      />
    </div>
  );
};

export default SponsorContent;
