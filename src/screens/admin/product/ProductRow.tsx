import React from "react";
import { LiaEdit } from "react-icons/lia";
import { FaCircle } from "react-icons/fa";

// type productRowType = {
//   ele: any;
// };
const ProductRow = (props:any) => {
  const { ele, iamTest } =props

  return (
    <tr className="hover:bg-gray-100 cursor-pointer">
      <td className="tableBodyTd">1</td>
      <td className="tableBodyTd">1</td>
      <td className="tableBodyTd">1</td>
      <td className="tableBodyTd">1</td>
      <td className="tableBodyTd">1</td>
      <td className="tableBodyTd">
        {" "}
        <FaCircle
          size={12}
          className={`${ele?.faultStatus ? "text-secondary" : "text-red-600"}`}
        />
      </td>
      <td className="tableBodyTd">
        {" "}
        <LiaEdit size={25} className="cursor-pointer text-primary" onClick={()=>iamTest(4)} />
      </td>
    </tr>
  );
};

export default React.memo(ProductRow);
