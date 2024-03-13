// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import { Plus, Minus } from "lucide-react";
// import FormElement from "./FormElement";
// import { URLS } from "../url";
// import { useLocation, useNavigate } from "react-router";
// import toast, { Toaster } from "react-hot-toast";
// import useRazorpay from "react-razorpay";

// const Register = () => {
//   const [Razorpay] = useRazorpay();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const notify = () => toast.success("Registration Successful!!!");
//   const id = location.state.eventInfo.event_id;
//   // console.log(location.state.eventInfo);
//   const [memberCount, setMemberCount] = useState(1);
//   const [members, setMembers] = useState([
//     {
//       leader_email: "",
//       team_name: "",
//       first_name: "",
//       first_phone: null,
//       first_college: "",
//       event: id,
//     },
//   ]);
//   const [teamName, setTeamName] = useState("");
//   const [paymentData, setPaymentData] = useState({});
//   const [email, setEmail] = useState("");

//   const handleChange = (index, field, value) => {
//     const newMembers = members.map((member, i) => {
//       if (i === index) {
//         return { ...member, [field]: value };
//       }
//       return member;
//     });

//     const updatedMembers = newMembers.map((member, i) => {
//       if (field === "team_name" && i === 0) {
//         return { ...member, team_name: value };
//       } else if (field === "first_college" && i === 0) {
//         return { ...member, first_college: value };
//       }
//       return member;
//     });

//     setMembers(updatedMembers);
//     if (field === "team_name") {
//       setTeamName(value);
//     }
//     if (field === "leader_email") {
//       setEmail(value);
//     }
//     console.log(members);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(members);
//     const response = await fetch(`${URLS.server}/registerapi/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         members: members.slice(0, memberCount),
//         team_name: teamName,
//         leader_email: email,
//       }),
//     });
//     const data = await response.json();
//     // notify();
//     // console.log(data.message);
//     setMembers(
//       Array.from({ length: memberCount }, () => ({
//         first_name: "",
//         first_phone: "",
//         first_college: "",
//         event: id,
//       }))
//     );
//     setTeamName("");
//     if (data.message === "Registration successful") {
//       const response = await fetch(
//         `${URLS.server}/Pay/${location.state.eventInfo.event_name}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const info = await response.json();
//       setPaymentData(info);
//       console.log("Payment Data: ", info);
//       var options = {
//         key: "rzp_test_lgXnrlnr3w35wr",
//         amount: "100",
//         currency: "INR",
//         name: "MAIT TNM",
//         description: "Registratino",
//         order_id: info["razorpay_order_id"],
//         callback_url: info["callback_url"],

//         notes: {
//           address: "TNM Registeration",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
//       console.log(options);
//       var rzp1 = new Razorpay(options);
//       rzp1.open();
//       console.log(members);
//     }
//   };

//   const handleAddMember = () => {
//     if (memberCount < 4) {
//       setMemberCount((prev) => prev + 1);
//       setMembers((prevMembers) => [
//         ...prevMembers,
//         { first_name: "", first_phone: null, first_college: "", event: id },
//       ]);
//     }
//   };

//   const handleRemoveMember = () => {
//     if (memberCount > 1) {
//       setMemberCount((prev) => prev - 1);
//       setMembers((prevMembers) => prevMembers.slice(0, memberCount - 1));
//     }
//   };

import React, { useState } from "react";
import Footer from "../components/Footer";
import { Plus, Minus } from "lucide-react";
import FormElement from "./FormElement";
import { URLS } from "../url";
import { useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import useRazorpay from "react-razorpay";

const Register = () => {
  const [Razorpay] = useRazorpay();
  const location = useLocation();
  const navigate = useNavigate();
  const notify = () => toast.success("Registration Successful!!!");
  const id = location.state.eventInfo.event_id;
  // console.log(location.state.eventInfo);
  const [memberCount, setMemberCount] = useState(1);
  const [members, setMembers] = useState([
    {
      first_name: "",
      first_phone: null,
      first_college: "",
      event: id,
    },
  ]);
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (index, field, value) => {
    const newMembers = members.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value };
      }
      return member;
    });

    setMembers(newMembers);
    if (field === "team_name") {
      setTeamName(value);
    }
    if (field === "leader_email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const modifiedMembers = members.map((member) => ({
      ...member,
      team_name: teamName,
      leader_email: email,
    }));

    console.log(
      "Modified Data: ",
      JSON.stringify({
        members: modifiedMembers,
      })
    );

    const response = await fetch(`${URLS.server}/registerapi/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        members: modifiedMembers,
      }),
    });

    const data = await response.json();
    // notify();
    // console.log(data.message);
    setMembers(
      Array.from({ length: memberCount }, () => ({
        first_name: "",
        first_phone: "",
        first_college: "",
        event: id,
      }))
    );
    setTeamName("");
    if (data.message === "Registration successful") {
      const response = await fetch(
        `${URLS.server}/Pay/${location.state.eventInfo.event_name}?email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const info = await response.json();
      // setPaymentData(info);
      console.log("Payment Data: ", info);

      const options = {
        key: "rzp_test_lgXnrlnr3w35wr",
        amount: "100",
        currency: "INR",
        name: "MAIT TNM",
        description: "Registration",
        order_id: info["razorpay_order_id"],
        // callback_url: `http://localhost:8000/paymenthandler/${location.state.eventInfo.event_name}`,
        handler: function (response) {
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          console.log(response);
        },
        notes: {
          address: "TNM Registration",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(options);
      const rzp1 = new Razorpay(options);
      rzp1.open();
    }
  };

  const handleAddMember = () => {
    if (memberCount < 4) {
      setMemberCount((prev) => prev + 1);
      setMembers((prevMembers) => [
        ...prevMembers,
        { first_name: "", first_phone: null, first_college: "", event: id },
      ]);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 1) {
      setMemberCount((prev) => prev - 1);
      setMembers((prevMembers) => prevMembers.slice(0, memberCount - 1));
    }
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
            <h2 className="text-center m-2 text-[#919AA4] font-bold">
              Number of team members
            </h2>
            <div
              id="tab2"
              className="tab-content text-white flex flex-col gap-5"
            >
              <div className="w-full flex items-center gap-5 h-[50px]">
                <button
                  className="bg-[rgba(0,0,0,0.2)] p-3 rounded-md"
                  onClick={handleRemoveMember}
                >
                  <Minus />
                </button>
                <div className="w-full h-full border-[2px] border-[rgba(0,0,0,0.2)] rounded-md flex items-center justify-center font-bold">
                  {memberCount}
                </div>
                <button
                  className="bg-[rgba(0,0,0,0.2)] p-3 rounded-md"
                  onClick={handleAddMember}
                >
                  <Plus />
                </button>
              </div>
              <div className="overflow-auto max-h-[450px]">
                {memberCount > 1 && (
                  <div className="flex flex-col">
                    <label className="text-[#919AA4] py-1 font-bold">
                      Team Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your team name"
                      className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <label className="text-[#919AA4] py-1 font-bold">
                    {memberCount > 1 ? "Leader Email" : "Email"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your email"
                    className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
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
