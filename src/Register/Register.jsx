import React, { useState } from "react";
import Footer from "../components/Footer";
import { Plus, Minus } from "lucide-react";
import FormElement from "./FormElement";

const Register = () => {
  const [memberCount, setMemberCount] = useState(1);

  return (
    <>
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
                {Array.from({ length: memberCount }, (_, index) => (
                  <>
                    <h2 className="text-center text-[#919AA4] font-bold">
                      Member {index + 1}
                    </h2>
                    <FormElement key={index} />
                  </>
                ))}
                <button
                  type="submit"
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
