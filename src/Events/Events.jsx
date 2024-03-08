import React from "react";
import DayEvent from "./DayEvent";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
      <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden max-h-[100vh] pb-28">
        {[1, 1, 1].map((item, index) => (
          <DayEvent key={index} day={index + 1} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Events;
