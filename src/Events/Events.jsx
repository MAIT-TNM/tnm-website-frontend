import React, { useEffect, useState } from "react";
import DayEvent from "./DayEvent";
import Footer from "../components/Footer";
import { URLS } from "../url";
const Events = () => {
  const [eventsData, setEventsData] = useState();

  useEffect(() => {
    fetch(`${URLS.server}/test/`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden max-h-[100vh] pb-28">
        {[1, 1, 1].map((item, index) => (
          <DayEvent key={index} day={index + 1} eventsData={eventsData} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Events;
