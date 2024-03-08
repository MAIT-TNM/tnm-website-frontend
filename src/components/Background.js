import React from "react";

const Background = ({ children }) => {
  return (
    <section
      className="w-full min-h-screen top-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      }}
    >
      <div className="w-[1px] h-[1px] bg-transparent" id="stars"></div>
      <div className="w-[2px] h-[2px] bg-transparent" id="stars2"></div>
      <div className="w-[3px] h-[3px] bg-transparent" id="stars3"></div>
      <div>{children}</div>
    </section>
  );
};

export default Background;
