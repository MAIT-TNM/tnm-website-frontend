import React from "react";
import EventCard from "./EventCard";

const DayEvent = ({ day, eventsData }) => {
  const events = {
    1: "Cultural",
    2: "Technical",
    3: "Sports",
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h1
        className="text-white text-5xl my-10 p-2"
        style={{
          fontFamily: "Rundeck",
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {events[day]} Events
      </h1>
      <hr
        className="w-full h-[1px] border-none my-5"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {eventsData &&
          eventsData.map((data, index) => (
            <div key={`day-${index}`} className="w-full flex justify-center">
              <EventCard data={data} />
            </div>
          ))}
      </div>
      <hr
        className="w-full h-[1px] border-none my-5"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </div>
  );
};

export default DayEvent;
