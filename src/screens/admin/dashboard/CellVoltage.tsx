import Battery from "../../../components/Battery";
import React from "react";
import RoundedBox from "../../../components/RoundedBox";

type cellVoltageProps = {
  cellVoltageLowerThrashHold: number;
  cellVoltageUpperThrashHold: number;
  cellVoltages: number[];
  cellImbalance: number;
};

const CellVoltage: React.FC<cellVoltageProps> = ({
  cellVoltageLowerThrashHold,
  cellVoltageUpperThrashHold,
  cellVoltages,
  cellImbalance,
}) => {
  return (
    <div className="flex flex-col justify-between  border-2 mt-2 border-gray-200 h-96 rounded shadow-sm">
      <div
        className={`grid grid-cols-2 md:grid-cols-4 w-full gap-10 px-2 md:px-20 
      lg:px-2 justify-start  py-2 h-full overflow-y-auto`}
      >
        {cellVoltages &&
          cellVoltages.length > 0 &&
          cellVoltages?.map((ele: any, i: number) => (
            <Battery
              key={i}
              index={i + 1}
              from={cellVoltageLowerThrashHold}
              to={cellVoltageUpperThrashHold}
              voltage={ele}
            />
          ))}
      </div>
      <div className="flex w-full  justify-center gap-4 py-2 bg-gray-100 border-2 ">
        <div className="grid grid-cols-3  w-full md:w-[60%]">
          <RoundedBox
            title="Cell imbalance"
            className="col-span-2 border-primary py-2"
            titleClass="text-primary"
          />
          <RoundedBox
            title={`${cellImbalance}%`}
            className="border-none col-span-1 ml-1 bg-primary py-2"
            titleClass="text-white font-bold text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CellVoltage);
