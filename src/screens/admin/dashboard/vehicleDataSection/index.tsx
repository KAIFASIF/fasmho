import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const VehicleDataSection = () => {
  return (
    <div>
      <div className="flex justify-between px-2 w-full">
        <p className="sub-heading">Vehicle Data</p>
        <Link to="/vehicle-data" className="sub-heading text-primary">
          Read more{" "}
        </Link>
      </div>
      <div className="flex w-full lg:justify-between overflow-x-auto gap-x-4 lg:gap-x-0 mt-2">
        <div className="flex w-[30%]">
          <Card />
        </div>
        <div className="flex w-[30%]">
          <Card />
        </div>
        <div className="flex w-[30%]">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default React.memo(VehicleDataSection);
