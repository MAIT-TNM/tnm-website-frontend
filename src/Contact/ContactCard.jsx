import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import avatar from "../images/avatar.jpg";

const ContactCard = ({ data }) => {
  return (
    <div className="w-[20rem] flex flex-col items-center justify-center gap-2 border-[1px] border-[#919AA4] p-3 rounded-lg text-[#919AA4] shadow-2xl">
      <div
        className="w-full h-[20rem] rounded-lg"
        style={{
          background: `url(${avatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p
        className="font-bold text-xl"
        style={{
          background: "-webkit-linear-gradient(white, #38495a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Poppins",
        }}
      >
        {data.name}
      </p>
      <hr
        className="w-[80%] h-[1px] border-none my-1"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <div className="flex items-center gap-5">
        <Mail className="text-[#919AA4]" />
        <Phone className="text-[#919AA4]" />
        <Instagram className="text-[#919AA4]" />
        <Linkedin className="text-[#919AA4]" />
      </div>
    </div>
  );
};

export default ContactCard;
