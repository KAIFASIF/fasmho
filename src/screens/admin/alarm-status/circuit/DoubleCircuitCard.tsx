import React from "react";
import RoundedBox from "../../../../components/RoundedBox";

type doubleCircuitCardProps = {
  heading: string;
  titleOne: string;
  titleTwo: string;
  countOne: number;
  countTwo: number;
};
const DoubleCircuitCard: React.FC<doubleCircuitCardProps> = ({
  heading,
  titleOne,
  titleTwo,
  countOne,
  countTwo,
}) => {
  return (
    <div className="flex flex-col bg-gray-100 px-4 rounded w-full lg:px-4  mb-4 py-4 mt-2">
      <div className="flex  w-full  gap-x-2">
        <div className="w-[70%]">
          <p className="font-semibold text-lg">{heading}</p>
        </div>
        <div className="flex flex-1">
          <p className="font-semibold text-lg">Count</p>
        </div>
      </div>
      <div className="flex justify-between gap-x-2 px-4 w-full mt-2">
        <div className="w-[70%]">
          <RoundedBox>
            <div className="flex  justify-center items-center w-full ">
              <div className="flex  justify-end w-[20%] ">
                <circle className="bg-secondary w-3 h-3 rounded-full"></circle>
              </div>
              <div className="flex flex-1  pl-2">
                <span className="sub-heading">{titleOne}</span>
              </div>
            </div>
          </RoundedBox>
        </div>
        <div className="flex flex-1">
          <RoundedBox
            title={countOne}
            titleClass="text-secondary text-lg"
          />
        </div>
      </div>
      <div className="flex justify-between gap-x-2 px-4 w-full mt-2">
        <div className="w-[70%]">
          <RoundedBox>
            <div className="flex  justify-center items-center w-full ">
              <div className="flex  justify-end w-[20%] ">
                <circle className="bg-secondary w-3 h-3 rounded-full"></circle>
              </div>
              <div className="flex flex-1  pl-2">
                <span className="sub-heading">{titleTwo}</span>
              </div>
            </div>
          </RoundedBox>
        </div>
        <div className="flex flex-1">
          <RoundedBox
            title={countTwo}
            titleClass="text-secondary text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DoubleCircuitCard);
