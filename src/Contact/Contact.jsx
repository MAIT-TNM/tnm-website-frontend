import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const cardStyles = {
    background: "rgba(255,255,255,0.05)",
    width: "30rem",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "Poppins",
  };

  const contactStyles = {
    fontSize: "1.2rem",
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen text-white gap-8">
        <div className="shadow-2xl" style={cardStyles}>
          <h2 className="text-4xl font-semibold">Faculty Coordinator</h2>
          <br />
          <p style={contactStyles}>Mr. Anil Dahiya: +91-928-959-7139</p>
          <br />
          <h2 className="text-4xl font-semibold">Student Coordinator</h2>
          <br />
          <p style={contactStyles}>Kavya Singhal: +91-928-959-7139</p>
          <p style={contactStyles}>Amogh Sarraf: +91-928-959-7139</p>
          <p style={contactStyles}>Narendra Deo: +91-928-959-7139</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
