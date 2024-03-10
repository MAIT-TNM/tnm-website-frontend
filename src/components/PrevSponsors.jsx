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
      <p className="text-center text-5xl my-10 p-2" style={gradientText}>
        Our Sponsors
      </p>
      <SponsorContent />
    </div>
  );
};

export default PrevSponsors;
