import React, { useState } from "react";
import Footer from "../components/Footer";
import { Plus, Minus } from "lucide-react";
import FormElement from "./FormElement";
import { URLS } from "../url";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const location = useLocation();
  const notify = () => toast.success("Registration Successful!!!");
  const id = location.state.eventInfo.event_id;
  const [memberCount, setMemberCount] = useState(1);
  const [members, setMembers] = useState([
    { first_name: "", first_phone: null, first_college: "", event: id },
  ]);

  const handleChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URLS.server}/registerapi/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ members }),
    });
    const data = await response.json();
    notify();
    console.log(data);
    setMembers([
      { first_name: "", first_phone: "", first_college: "", event: id },
    ]);
  };

  return (
    <>
      <Toaster />
      <div
        className="text-white flex items-center justify-center w-full h-[100vh]"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="bg-[rgba(255,255,255,0.05)] w-[50%] rounded-lg p-5 backdrop-filter">
          <div className="flex flex-wrap gap-1">
            <div className="p-4 rounded-lg text-white text-center font-bold flex-grow w-80 bg-[rgba(0,0,0,0.2)]">
              Event Registration
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-center m-2 text-[#919AA4]">
              Number of team members
            </h2>
            <div
              id="tab2"
              className="tab-content text-white flex flex-col gap-5"
            >
              <div className="w-full flex items-center gap-5 h-[50px]">
                <button
                  className="bg-[rgba(0,0,0,0.2)] p-3 rounded-md"
                  onClick={() =>
                    setMemberCount((prev) => (prev === 1 ? prev : prev - 1))
                  }
                >
                  <Minus />
                </button>
                <div className="w-full h-full border-[2px] border-[rgba(0,0,0,0.2)] rounded-md flex items-center justify-center font-bold">
                  {memberCount}
                </div>
                <button
                  className="bg-[rgba(0,0,0,0.2)] p-3 rounded-md"
                  onClick={() =>
                    setMemberCount((prev) => (prev === 4 ? prev : prev + 1))
                  }
                >
                  <Plus />
                </button>
              </div>
              <div className="overflow-auto max-h-[400px]">
                {members.map((member, index) => (
                  <React.Fragment key={index}>
                    <h2 className="text-center text-[#919AA4] font-bold">
                      Member {index + 1}
                    </h2>
                    <FormElement
                      member={members[index]}
                      handleChange={handleChange}
                      index={index}
                    />
                  </React.Fragment>
                ))}
                {/* {Array.from({ length: memberCount }, (_, index) => (

                ))} */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full p-3 bg-[rgba(0,0,0,0.2)] font-bold rounded-md hover:bg-[rgba(0,0,0,0.4)]"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
