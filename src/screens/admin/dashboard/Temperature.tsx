import React from "react";
import RoundedBox from "../../../components/RoundedBox";

type temperatureProps = {
  boardTemperatureLowerThrashHold: number;
  boardTemperatureUpperThrashHold: number;
  boardTemperature: number;
  cellTemperatureLowerThrashHold: number;
  cellTemperatureUpperThrashHold: number;
  cellTemperatures: number[];
};

const Temperature: React.FC<temperatureProps> = ({
  boardTemperatureLowerThrashHold,
  boardTemperatureUpperThrashHold,
  boardTemperature,
  cellTemperatureLowerThrashHold,
  cellTemperatureUpperThrashHold,
  cellTemperatures,
}) => {
  return (
    <div className="flex flex-col justify-between  border-2 border-gray-200 h-96 rounded shadow-sm mt-2 w-full">
      <div className="overflow-y-auto  w-full">
        <div className="grid grid-cols-3 px-2  gap-x-4  py-2   w-full">
          <RoundedBox className="col-span-2">
            <div className="flex  items-center w-full">
              <div className="flex  justify-end w-[20%] ">
                <circle
                  className={`w-3 h-3 rounded-full ${
                    boardTemperature &&
                    boardTemperature < boardTemperatureLowerThrashHold
                      ? "bg-red-600"
                      : boardTemperature &&
                        boardTemperature > boardTemperatureUpperThrashHold
                      ? "bg-blue-600"
                      : "bg-secondary"
                  }`}
                ></circle>
              </div>
              <div className="flex flex-1  pl-2">
                <span className="sub-heading">BMS Temperature</span>
              </div>
            </div>
          </RoundedBox>
          <RoundedBox
            className="col-span-1"
            title={boardTemperature + "°C"}
            titleClass={`rounded-full text-lg font-bold
                ${
                  boardTemperature &&
                  boardTemperature < boardTemperatureLowerThrashHold
                    ? "text-red-600"
                    : boardTemperature &&
                      boardTemperature > boardTemperatureUpperThrashHold
                    ? "text-blue-600"
                    : "text-secondary"
                }`}
          />
        </div>

        {cellTemperatures &&
          cellTemperatures.length > 0 &&
          cellTemperatures.map((ele: any, i: number) => (
            <div
              key={i}
              className="grid grid-cols-3 px-2  gap-4   py-2  w-full"
            >
              <RoundedBox className="col-span-2">
                <div className="flex  items-center w-full">
                  <div className="flex  justify-end w-[20%] ">
                    <circle
                      className={`w-3 h-3 rounded-full ${
                        ele && ele < cellTemperatureLowerThrashHold
                          ? "bg-red-600"
                          : ele && ele > cellTemperatureUpperThrashHold
                          ? "bg-blue-600"
                          : "bg-secondary"
                      }`}
                    ></circle>
                  </div>
                  <div className="flex flex-1  pl-2">
                    <span className="sub-heading">{`Cell # ${
                      i + 1
                    } Temperature`}</span>
                  </div>
                </div>
              </RoundedBox>
              <RoundedBox
                className="col-span-1"
                title={ele + "°C"}
                titleClass={`rounded-full text-lg font-bold
                ${
                  ele && ele < cellTemperatureLowerThrashHold
                    ? "text-red-600"
                    : ele && ele > cellTemperatureUpperThrashHold
                    ? "text-blue-600"
                    : "text-secondary"
                }`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Temperature);
