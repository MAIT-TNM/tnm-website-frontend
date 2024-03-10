import React from "react";
import Footer from "../components/Footer";
import ContactCard from "./ContactCard";

const Contact = () => {
  const gradientText = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Rundeck",
  };

  const contactData = [
    {
      name: "Dr. Anil Dahiya",
    },
    {
      name: "Amogh Sarraf",
    },
    {
      name: "Narendra Deo",
    },
    {
      name: "Kavya Singhal",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-auto">
      <div
        className="flex flex-col items-center justify-center w-full h-full text-white gap-24 my-[10rem]"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl p-2" style={gradientText}>
            Faculty Coordinator
          </h2>
          <ContactCard data={contactData[0]} />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl p-2" style={gradientText}>
            Student Coordinator
          </h2>
          <div className="flex items-center gap-24">
            {contactData.slice(1).map((data, index) => (
              <ContactCard data={data} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
