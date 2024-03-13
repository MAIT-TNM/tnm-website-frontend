import React, { useContext } from "react";
import DayEvent from "./DayEvent";
import Footer from "../components/Footer";
import { DataContext } from "../context";
const Events = () => {
  const { eventsData } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col items-center overflow-auto my-[10rem]">
        {/* {[1, 1, 1].map((_, index) => (
          <DayEvent key={index} day={index + 1} eventsData={eventsData} />
        ))} */}
        <DayEvent day={3} eventsData={eventsData} />
      </div>
      <Footer />
    </>
  );
};

export default Events;
