import React from "react";
import { useNavigate, useParams } from "react-router";
import eventImg from "../images/event.jpg";
import banner from "../images/banner.jpg";
import { useLocation } from "react-router";
import { URLS } from "../url";

const Description = () => {
  const navigate = useNavigate();

  const { event } = useParams();
  const location = useLocation();
  const data = location.state.eventInfo;
  return (
    <div
      className="text-white w-full h-[100vh] flex justify-center items-center pt-[90px] overflow-y-auto shadow-2xl"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="w-[70%]">
        <div
          className="w-full h-[15rem] rounded-t-3xl p-5 flex items-center gap-5"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
            backgroundSize: "cover",
          }}
        >
          <img
            src={`${
              data.event_photo ? URLS.server + data.event_photo : `${eventImg}`
            }`}
            alt="event"
            className="h-full rounded-xl"
          />
          <div className="w-[1px] h-full bg-[rgba(255,255,255,0.5)]"></div>
          <div className="w-full h-full flex flex-col justify-around">
            <span
              className="text-7xl font-thin"
              style={{
                "font-family": "Rundeck",
              }}
            >
              {event[0].toUpperCase() + event.slice(1)}
            </span>
            <div>{data.event_discpription}</div>
            <div
              className="flex justify-between text-xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              <span>Prize Pool: ₹{data.prize_pool}</span>
              <span>Entry Fees: {data.entry_fees}/- per person</span>
            </div>
          </div>
        </div>
        <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-b-3xl">
          <div className="p-5 leading-7" style={{ fontFamily: "Poppins" }}>
            <p>Rules & Regulations: </p>
            <ol className="pl-10 list-decimal">
              {"Sparsh\nShandilya".split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="w-full p-5">
            <p>For more information contact:</p>
            <div className="pl-10">
              <ul className="list-disc">
                <li>
                  {data.event_incharge}: +91-{data.event_incharge_contact}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <button
              className="text-black bg-white w-[15rem] p-5 rounded-lg font-medium shadow-2xl"
              onClick={() =>
                navigate("register", { state: { eventInfo: data } })
              }
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
