import React from "react";
import { Link } from "react-router-dom";
import StateOfChargeGraph from "./StateOfChargeGraph";
import CircleGraph from "../../../components/CircleGraph";

type chargeSectionProps = {
  stateOfCharge: number;
  packVoltage: number;
  packCurrent: number;
  stateCharge : [] | number[]
};
const ChargeSection: React.FC<chargeSectionProps> = ({
  stateOfCharge,
  packVoltage,
  packCurrent,
  stateCharge
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-x-4 h-full ">
      <section className="w-full  lg:w-[35%] md:px-20 lg:px-0 h-full">
        <div className="flex flex-col justify-center rounded items-center bg-gradient-to-r  h-full from-secondary to-primary w-full  ">
          <p className="text-2xl mt-2 font-semibold text-white">
            State of charge(Soc)
          </p>

          <CircleGraph stateOfCharge={stateOfCharge} />
        </div>
      </section>

      {/* pack section */}
      <section className="w-full flex justify-center  lg:w-[20%] md:px-20 lg:px-0 mt-4 lg:mt-0  h-full ">
        <div className="flex flex-col justify-between items-center md:flex-row lg:flex-col   h-full md:gap-x-4 lg:gap-x-0   w-full px-1">
          <div className="w-full border-2 rounded border-gray-300  h-16 flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-between px-4 items-center  w-full h-full">
              <div className="flex flex-col">
                <p className="sub-title">Pack Voltage</p>
                <p className="sub-title font-bold text-xl"> {packVoltage}V</p>
              </div>
              <img
                src="assets/images/batteries.png"
                alt="battery"
                className="w-auto h-10 object-contain"
              />
            </div>
          </div>
          <div className="w-full border-2 rounded border-gray-300  h-16 flex flex-col justify-between items-center">
            <div className="flex justify-between px-4 items-center  w-full h-full">
              <div className="flex flex-col">
                <p className="sub-title">Pack Current</p>
                <p className="sub-title font-bold text-xl"> {packCurrent}V</p>
              </div>
              <img
                src="assets/images/batteries_current.png"
                alt="battery"
                className="w-auto h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* graph section*/}
      <section className="w-full  lg:flex-1 md:px-20 lg:px-0  rounded border-2 border-gray-200">
        <section className="col-span-3  lg:mt-0 h-full px-5">
          <div className="flex justify-between mt-2">
            <p className="sub-heading">State of Charge</p>
            <Link to="/product" className="sub-heading text-primary">
              Read more{" "}
            </Link>
          </div>
          <div className="flex justify-between mt-5">
            <StateOfChargeGraph stateCharge={stateCharge}/>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ChargeSection
