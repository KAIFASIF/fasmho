import React from "react";
import SquareCardLabelTitle from "../../../components/SquareCardLabelTitle";

const VehicleDataSection = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-lg">Vehicle Data</p>
      <div className="flex w-full gap-x-2 overflow-x-auto">
        <div className="w-[60%] md:w-[30%] lg:w-[15%]  rounded  shrink-0">
          <SquareCardLabelTitle
            className="px-4 h-32"
            title="--------------"
            roundBoxClass="bg-white"
            titleClass="text-xl"
            spanLabel="Dis. Trav. (in Km)"
          />
        </div>
        <div className="w-[60%] md:w-[30%] lg:w-[15%] rounded shrink-0">
          <SquareCardLabelTitle
            className="px-4 h-32"
            title="--------------"
            roundBoxClass="bg-white"
            titleClass="text-xl"
            spanLabel="Range (Km)"
          />
        </div>
        <div className="w-[60%] md:w-[30%] lg:w-[15%]  rounded  shrink-0  bg-red-400">
          <SquareCardLabelTitle
            className="px-4 h-32"
            title="--------------"
            roundBoxClass="bg-white"
            titleClass="text-xl"
            spanLabel="Speed (Km/Hr)"
          />
        </div>
        <div className="flex p-4 justify-between w-[90%] md:w-[50%] lg:w-[25%]  rounded  shrink-0 border-2 border-secondary ">
          <div className="flex flex-col justify-between">
            <pre className="font-semibold text-lg">Money Saved($)</pre>
            <pre className="font-semibold text-secondary text-xl"> ------</pre>
          </div>
          <img src="assets/images/dollar_Ilustration.png" alt="" />
        </div>
        <div className="flex p-4 justify-between w-[90%] md:w-[50%] lg:w-[25%]  rounded  shrink-0 border-2 border-secondary ">
          <div className="flex flex-col justify-between">
            <pre className="font-semibold text-lg">C02(kg)</pre>
            <pre className="font-semibold text-secondary text-xl"> ------</pre>
          </div>
          <img src="assets/images/battery_Ilustration.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(VehicleDataSection);
