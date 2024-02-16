import { memo } from "react";
import SquareCardLabelTitle from "../../../components/SquareCardLabelTitle";

const Statistics = ({ statistics }: any) => {
  return (
    <div className=" flex flex-col justify-between">
      {" "}
      <p className="sub-heading">Staticstics</p>
      <div className="w-full flex lg:flex-col gap-2 overflow-x-auto container-snap">
        <SquareCardLabelTitle
          className="px-4 border-none"
          title={statistics?.total}
          roundBoxClass="bg-blue-200 border-none"
          titleClass="text-xl"
          spanLabel="Total Products"
        />
        <SquareCardLabelTitle
          className="px-4 border-none"
          title={statistics?.active}
          roundBoxClass="border-secondary"
          titleClass="text-xl"
          spanLabel="Active"
        />
        <SquareCardLabelTitle
          className="px-4 border-none"
          title={statistics?.inactive}
          roundBoxClass="border-red-500"
          titleClass="text-xl"
          spanLabel="Inactive"
        />
      </div>
    </div>
  );
};

export default memo(Statistics);
