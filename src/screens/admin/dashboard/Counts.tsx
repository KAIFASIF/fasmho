import React from "react";
import SquareCardLabelTitle from "../../../components/SquareCardLabelTitle";

const Counts = () => {
  return (
    <div className=" flex flex-col h-full w-full">
      <div className="w-full flex lg:flex-col gap-2  md:gap-4 lg:gap-0   h-full   lg:justify-between  overflow-x-auto">
        <div className=" shrink-0 w-[40%] md:w-[20%] lg:w-full">
          <SquareCardLabelTitle
            roundBoxClass="bg-secondary"
            title={10}
            titleClass="text-white"
            spanLabel="Cycle Count"
          />
        </div>
        <div className="  shrink-0 w-[40%] md:w-[20%] lg:w-full">
          <SquareCardLabelTitle
            roundBoxClass="bg-secondary"
            title={10}
            titleClass="text-white"
            spanLabel="Consumption"
          />
        </div>
        <div className="  shrink-0 w-[40%] md:w-[20%] lg:w-full">
          <SquareCardLabelTitle
            roundBoxClass="bg-secondary"
            title={10}
            titleClass="text-white"
            spanLabel="Avg C-rate"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Counts);
