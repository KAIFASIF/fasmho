import React from "react";
import Back from "./Back";

const Navbar = ({screen}:any) => {
  return (
    <div className="px-8 pt-5 w-full flex flex-col justify-between ">
      <div className="flex items-center">
        <Back />
        <span className="ml-2  text-xl font-semibold text-gray-600">{screen}</span>
      </div>
      <div className="h-0.5 bg-gray-200 mt-0.5" />
    </div>
  );
};

export default React.memo(Navbar);
