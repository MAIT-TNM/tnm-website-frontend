import React from "react";
import eventImg from "../images/event.jpg";
import { Link } from "react-router-dom";
import { URLS } from "../url";
import { useNavigate } from "react-router-dom";

const EventCard = ({ data }) => {
  const navigator = useNavigate();
  return (
    <div
      className="w-[22rem] h-[25rem] bg-[rgba(255,255,255,0.05)] rounded-xl backdrop-blur-[1px] p-4 flex flex-col items-center gap-2 eventCard overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <div
        className="w-full h-full rounded-xl"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.9)), url(${
            data.event_photo ? URLS.server + data.event_photo : `${eventImg}`
          })`,
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-4 w-[91%] rounded-b-xl h-[100px] flex items-center px-3">
          <div>
            <span className="text-white">{data.event_name}</span>
            <p className="text-white text-xs">{data.event_discpription}</p>
          </div>
          {/* <Link to={{ pathname: `/${data.event_name}`, state: { data } }}> */}
          <button
            className="w-[5rem] text-slate-200 p-2 border-slate-200 border-[1px] rounded-md"
            style={{ fontFamily: "Poppins" }}
            onClick={() =>
              navigator(`/${data.event_name}`, { state: { eventInfo: data } })
            }
          >
            View
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
