import React from "react";
import VehicleDataSection from "./VehicleDataSection";
import Rides from "./Rides";
import RunningStatus from "./RunningStatus";
import Navbar from "../../../components/Navbar";

const VehicleData = () => {
  return (
    <div className="w-full">
      <Navbar screen="Vehicle Data" />

      <div className="w-full px-10  lg:px-10 lg:pt-5">
        {/* vehicle data section */}

        <section className="flex w-full">
          <RunningStatus />
        </section>
        <section className="flex w-full mt-10">
          <VehicleDataSection />
        </section>
        <section className="flex w-full mt-10 ">
          <Rides />
        </section>
      </div>
    </div>
  );
};

export default React.memo(VehicleData);
