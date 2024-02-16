import React from "react";

const RunningStatus = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-lg">Running Status</p>
      <div className=" rounded py-6 px-2 border-2 border-gray-2 w-full  overflow-x-auto shrink-0">
        <div className="flex  border-2 border-gray-200 h-3 rounded bg-gray-100 w-[200%] lg:w-full"></div>
        <div className="flex  rounded  w-[200%] lg:w-full">
          <div className="flex   justify-between shrink-0 mt-2 w-full">
            <p className="sub-heading">10:00</p>
            <p className="sub-heading">11:00</p>
            <p className="sub-heading">12:00</p>
            <p className="sub-heading">13:00</p>
            <p className="sub-heading">14:00</p>
            <p className="sub-heading">15:00</p>
            <p className="sub-heading">16:00</p>
            <p className="sub-heading">17:00</p>
            <p className="sub-heading">18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RunningStatus);
