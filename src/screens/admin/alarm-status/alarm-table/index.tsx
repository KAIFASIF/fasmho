import React from "react";
import AlarmRow from "./AlarmRow";
import Table from "../../../../libraries/table";

const AlarmTable = ({ data }: any) => {
  const headers: string[] = ["Fault Type", "Date - Time", "Status"];
  return (
    data &&
    data.length > 0 && (
      <Table tableData={data} headers={headers} TableRow={AlarmRow} />
    )
  );
};

export default React.memo(AlarmTable);
