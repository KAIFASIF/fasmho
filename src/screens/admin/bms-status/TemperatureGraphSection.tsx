import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import RoundedBox from "../../../components/RoundedBox";
import Graph from "./Graph";
import Dropdown from "./Dropdown";


const TemperatureGraphSection = ({ data }: any) => {
  return (
    <div className="w-full flex  justify-between mt-10">
      <div className="mt-8 flex-1">
        <Dropdown />
        <RoundedBox className="bg-red-600 w-36 mt-4">
          <div className="bg-red-600 flex justify-center items-center w-full">
            <FaRegDotCircle size={16} className="text-white" />
            <span className="text-white">Live</span>
          </div>
        </RoundedBox>
      </div>
      <div className="w-[75%] mb-4 ">
        <Graph data={data} />
      </div>
    </div>
  );
};

export default React.memo(TemperatureGraphSection);
