import React from "react";

const FormElement = ({ member, handleChange, index }) => {
  // const { first_name, first_phone, first_college } = member;
  return (
    <form className="px-1">
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Name</label>
        <input
          required
          type="text"
          placeholder="Enter your name"
          value={member && member.first_name}
          onChange={(e) => handleChange(index, "first_name", e.target.value)}
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Phone No.</label>
        <input
          required
          type="number"
          placeholder="Enter your phone number"
          value={member && member.first_phone}
          onChange={(e) => handleChange(index, "first_phone", e.target.value)}
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">College Name</label>
        <input
          required
          type="text"
          placeholder="Enter your college name"
          value={member && member.first_college}
          onChange={(e) => handleChange(index, "first_college", e.target.value)}
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
    </form>
  );
};

export default FormElement;
