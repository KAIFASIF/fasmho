import React from "react";

type tableRowType = {
  ele: any;
};
const TableRow: React.FC<tableRowType> = ({ele}) => {
  return (
    <tr className="tableBodyTr hover:bg-gray-100 border-b-2">
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal"> {ele?.dateTime}</td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal"> {ele?.bmsId}</td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal"> {ele?.faultType}</td>
    </tr>
  );
};

export default React.memo(TableRow);
