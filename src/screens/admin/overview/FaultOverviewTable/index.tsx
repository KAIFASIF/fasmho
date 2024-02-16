import { memo } from "react";
import { Link } from "react-router-dom";
import Table from "../../../../libraries/Table";
import TableRow from "./TableRow";



const FaultOverviewTable = ({data}:any) => {
  const headers: string[] = ["Date - Time", "BMS ID", "Fault Type"];
  
  return (
    <div className="w-full h-full border-gray-200">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="sub-heading">Fault Overview (Last 1 week) </p>
          <Link to="/product" className="sub-heading text-primary">
            Read more{" "}
          </Link>
        </div>
        <div className="mt-2 h-full overflow-hidden">
          <Table tableData={data} headers={headers} TableRow={TableRow} />
        </div>
      </div>
    </div>
  );
};

export default memo(FaultOverviewTable);
