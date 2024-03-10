import React, { useContext } from "react";
import DayEvent from "./DayEvent";
import Footer from "../components/Footer";
import { DataContext } from "../context";
const Events = () => {
  const { eventsData } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden max-h-[100vh] pb-28">
        {[1, 1, 1].map((_, index) => (
          <DayEvent key={index} day={index + 1} eventsData={eventsData} />
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Events;
