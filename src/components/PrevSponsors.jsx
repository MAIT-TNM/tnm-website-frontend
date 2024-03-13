import React from "react";
import SponsorContent from "./SponsorContent";

const PrevSponsors = () => {
  const gradientText = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Rundeck",
  };

  return (
    <div>
      <h2
        className="text-4xl md:text-5xl my-6 md:my-10 text-center"
        style={gradientText}
      >
        Past Sponsors
      </h2>
      <SponsorContent />
    </div>
  );
};

export default PrevSponsors;
