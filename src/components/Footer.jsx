import {
  Keyboard,
  Copyright,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const gradientText = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Rundeck",
  };

  return (
    <div
      className="flex flex-col items-center text-white w-full h-[15rem]"
      style={{
        fontFamily: "Poppins",
        background:
          "linear-gradient(to top, rgba(255,255,255,0.05), transparent)",
      }}
    >
      <hr
        className="w-[80%] h-[1px] border-none my-5"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <div className="text-[2rem] text-center" style={gradientText}>
        Techsurge & Mridang
      </div>
      <div className="flex gap-5 py-2">
        <Link to="https://www.instagram.com/mait_tnm/">
          <Instagram className="text-[#919AA4]" />
        </Link>
        <Link to="#">
          <Linkedin className="text-[#919AA4]" />
        </Link>
        <Link to="https://www.facebook.com/mait.tnm/">
          <Facebook className="text-[#919AA4]" />
        </Link>
        <Link to="mailto:tnm@mait.ac.in">
          <Mail className="text-[#919AA4]" />
        </Link>
      </div>
      <hr
        className="w-[90%] h-[1px] border-none my-5"
        style={{
          background: "rgba(255,255,255,0.1)",
        }}
      />
      <div className="flex flex-col items-center">
        <span
          className="flex items-center gap-2"
          style={{
            background: "-webkit-linear-gradient(white, #38495a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Copyright className="w-[15px] text-[#919AA4]" />
          {new Date().getFullYear()} Techsurge & Mridang | All rights reserved.
        </span>
        <span
          className="flex items-center gap-2"
          style={{
            background: "-webkit-linear-gradient(white, #38495a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Made with
          <Keyboard className="w-[20px] text-[#919AA4]" /> by Sparsh Shandilya &
          Ishaan Sangwan
        </span>
      </div>
    </div>
  );
};

export default Footer;
