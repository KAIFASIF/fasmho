import React from "react";

// type productRowType = {
//   ele: any;
// };
const AlarmRow = (props: any) => {
  const {ele} = props;

  return (
    <tr className="hover:bg-gray-100 cursor-pointer">
      <td className="tableBodyTd">{ele?.faultType}</td>
      <td className="tableBodyTd">{ele?.dateTime}</td>
      <td className="tableBodyTd">{ele?.status}</td>
    </tr>
  );
};

export default React.memo(AlarmRow);
