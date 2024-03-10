import React from "react";

const FormElement = () => {
  return (
    <form className="px-1">
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Name</label>
        <input
          required
          type="text"
          placeholder="Enter your name"
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Email</label>
        <input
          required
          type="email"
          placeholder="Enter your email"
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Phone No.</label>
        <input
          required
          type="tel"
          placeholder="Enter your phone number"
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
    </form>
  );
};

export default FormElement;
