import React from "react";
import EventCard from "./EventCard";

const DayEvent = ({ day, eventsData }) => {
  const events = {
    1: "Cultural",
    2: "Technical",
    3: "Sports",
  };

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
        {events[day]} Events
      </span>
      <hr
        className="w-[80%] h-[1px] border-none my-5"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <div className="w-full p-5 flex gap-10 overflow-auto">
        {eventsData &&
          eventsData.map((data, index) => (
            <div key={`day1-${index}`}>
              <EventCard data={data} />
            </div>
          ))}
      </div>
      <hr
        className="w-[80%] h-[1px] border-none my-5"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </div>
  );
};

export default DayEvent;
