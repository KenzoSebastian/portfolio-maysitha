import React from "react";

export const Hamburger = ({
  status,
  setStatus,
}: {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="hamburger"
      className={`flex flex-col justify-between p-2 gap-2 rounded-lg focus:outline-none md:hidden group ${
        status ? "active" : ""
      }`}
      onClick={() => setStatus(!status)}
    >
      <span
        className={`w-7 h-0.5 bg-primary rounded-full transform transition-all group-[.active]:bg-primary duration-500 ease-in-out origin-top-left group-[.active]:rotate-45`}
      ></span>
      <span
        className={`w-7 h-0.5 bg-primary rounded-full transform transition-all group-[.active]:bg-primary duration-500 ease-in-out group-[.active]:opacity-0 group-[.active]:scale-0 opacity-100`}
      ></span>
      <span
        className={`w-7 h-0.5 bg-primary rounded-full transform transition-all group-[.active]:bg-primary duration-500 ease-in-out origin-bottom-left group-[.active]:-rotate-45`}
      ></span>
    </div>
  );
};
