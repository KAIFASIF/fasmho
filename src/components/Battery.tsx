import React from "react";

const Battery = ({ from, to, voltage, index }: any) => {
  const val = parseFloat(voltage.toFixed(2));
  return (
    <div className="shrink-0  h-8">
      <div className="relative flex w-full justify-center item-center">
        <div className="absolute  left-0 top-0 h-8">
          <img
            src="assets/images/battery.svg"
            alt="battergy image"
            className=""
          />
        </div>
        <div className="absolute flex justify-between  left-0 top-0 w-24 h-8  rounded-l-lg">
          <div
            className={` w-10 h-8 z-70 rounded-l-lg flex justify-center items-center text-white font-semibold
          ${
            val && val < from
              ? "bg-red-600"
              : val && val > to
              ? "bg-blue-600"
              : "bg-secondary"
          }`}
          >{index}</div>
          <div className=" flex-1   h-8  flex items-center justify-center ">
            <p className="sub-title font-bold"> {val.toFixed(2)} V </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Battery);
