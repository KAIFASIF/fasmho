import React from "react";
import { Link } from "react-router-dom";
import SquareCardLabelTitle from "../../../components/SquareCardLabelTitle";

const Rides = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-4 ">
      <section className="flex flex-col justify-between">
        <div className=" px-2 w-full">
          <div className="w-full">
            <p className="sub-heading">Recent ride</p>
            <p className="sub-heading">01 Jan 24, 10:17 AM</p>
          </div>
          <div className="flex  justify-between w-full gap-x-1 overflow-x-auto">
            <div className="w-[60%] md:w-[32%]  rounded  shrink-0">
              <SquareCardLabelTitle
                className="px-4 h-32"
                title="--------------"
                roundBoxClass="bg-white"
                titleClass="text-xl"
                spanLabel="Dis. Trav. (in Km)"
              />
            </div>
            <div className="w-[60%] md:w-[32%]  rounded  shrink-0">
              <SquareCardLabelTitle
                className="px-4 h-32"
                title="--------------"
                roundBoxClass="bg-white"
                titleClass="text-xl"
                spanLabel="Range (Km)"
              />
            </div>
            <div className="w-[60%] md:w-[32%]  rounded  shrink-0">
              <SquareCardLabelTitle
                className="px-4 h-32"
                title="--------------"
                roundBoxClass="bg-white"
                titleClass="text-xl"
                spanLabel="Speed (Km/Hr)"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-48 bg-gray-200 mt-10 lg:mt-0"></div>
      </section>

      {/* Riding insights section */}
      <section className="w-full mt-10 lg:mt-0">
        <div className="flex justify-between  w-full">
          <p className="sub-heading">Riding Insights (Last 30 days)</p>
          <Link to="/vehicle-data" className="sub-heading text-primary">
            View ride history{" "}
          </Link>
        </div>
        <div className="w-full h-96 bg-gray-200 "></div>
      </section>
    </div>
  );
};

export default React.memo(Rides);
