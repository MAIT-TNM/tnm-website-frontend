import React, { useContext } from "react";
import EventCard from "../Events/EventCard";
import { DataContext } from "../context";

const HomeEvents = () => {
  const { eventsData } = useContext(DataContext);

  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <h1
        className="text-white text-5xl my-10 p-2"
        style={{
          fontFamily: "Rundeck",
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {eventsData &&
          eventsData.map((data, index) => (
            <div
              key={`event-${index}`}
              className="flex justify-center items-center" // Center the content horizontally and vertically
            >
              <EventCard data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeEvents;
