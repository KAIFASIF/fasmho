import React from "react";

import { LiaEdit } from "react-icons/lia";
import { FaCircle } from "react-icons/fa";

type productRowType = {
  ele: any;
};
const ProductRow: React.FC<productRowType> = ({ ele }) => {
  return (
    <tr className="tableBodyTr hover:bg-gray-100 border-b-2">
      <td className="tableBodyTd">
        {" "}
        {ele?.vehicleNo}
      </td>
      <td className="tableBodyTd pl-5">
        {" "}
        {ele?.soc}
      </td>
      <td className="tableBodyTd">
        {" "}
        {ele?.cycleCount}
      </td>
      <td className="tableBodyTd  py-4 text-gray-500 text-sm font-normal pl-14">
        {" "}
        <FaCircle
          size={12}
          className={`${ele?.faultStatus ? "text-secondary" : "text-red-600"}`}
        />
      </td>
      <td className="tableBodyTd pl-10 py-4 text-gray-500 text-sm font-normal">
        <FaCircle
          size={12}
          className={`${ele?.bmsStatus ? "text-secondary" : "text-red-600"}`}
        />
      </td>
      <td className={`tableBodyTd  py-4 text-gray-500 text-sm font-normal pl-12
      ${ele?.operatingStatus ? "text-secondary" : "text-red-600"}`}>
        {" "}
        {ele?.operatingStatus ? "Active":"Inactive"}
      </td>
      <td className="tableBodyTd pl-8 py-4 text-gray-500 text-sm font-normal">
        <LiaEdit size={25} className="cursor-pointer text-primary" />
      </td>
    </tr>
  );
};

export default React.memo(ProductRow);
