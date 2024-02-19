import React from "react";
import VehicleDataSection from "./VehicleDataSection";
import Rides from "./Rides";
import RunningStatus from "./RunningStatus";

const VehicleData = () => {
  return (
    <div className="w-full px-4 pt-5 lg:px-10 lg:pt-5">
      <section className="bg-white w-full p-4">
        <RunningStatus />
      </section>
      <section className="bg-white w-full p-4 mt-4">
        <VehicleDataSection />
      </section>
      <section className=" bg-white w-full p-4 mt-4">
        <Rides />
      </section>
    </div>
  );
};

export default React.memo(VehicleData);
