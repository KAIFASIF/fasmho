import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import RoundedBox from "../../../components/RoundedBox";
import Graph from "./Graph";
import Dropdown from "./Dropdown";


const TemperatureGraphSection = ({ data }: any) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 mt-4 px-4  py-4 bg-white">
      <div className="mt-4">
        <Dropdown />
        <RoundedBox className="bg-red-600 w-36 mt-4">
          <div className="bg-red-600 flex justify-center items-center w-full">
            <FaRegDotCircle size={16} className="text-white" />
            <span className="text-white">Live</span>
          </div>
        </RoundedBox>
      </div>
      <div className="col-span-4 mt-10 lg:mt-0">
        <Graph data={data} />
      </div>
    </div>
  );
};

export default React.memo(TemperatureGraphSection);
