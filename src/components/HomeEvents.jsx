import React, { useContext } from "react";
import EventCard from "../Events/EventCard";
import { DataContext } from "../context";

const HomeEvents = () => {
  const { eventsData } = useContext(DataContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <span
        className="text-white text-5xl p-2"
        style={{
          fontFamily: "Rundeck",
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Events
      </span>
      <div className="w-full p-5 flex gap-10 overflow-auto">
        {eventsData &&
          eventsData.map((data, index) => (
            <div key={`day1-${index}`}>
              <EventCard data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeEvents;
