import { memo } from "react";
import { BsCartCheckFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import RoundedBox from "../../../../components/RoundedBox";

// type cardTypes = {
//   cardClass: string;
//   ele: any;
// };
const Card = (props: any) => {
  const navigate = useNavigate();
  const { cardClass, name, active, inactive, total, id } = props;

  return (
    <div
      className="w-56 pb-1 border-2  cursor-pointer  border-gray-300  rounded-xl overflow-hidden flex flex-col items-center"
      onClick={() => navigate(`/product/${id}`)}
    >
      {" "}
      <div
        className={`w-full   h-14 sub-title flex justify-center bg-gray-200
        mb-2 items-center font-semibold text-xl ${cardClass}`}
      >
        {name}
      </div>
      <div className="w-[50%] ">
        <RoundedBox title={total} />
      </div>
      <h1 className="sub-title mt-2">Total BMS</h1>
      <div className="border-2 border-gray-400 rounded-full p-2 mt-2">
        <BsCartCheckFill className="text-gray-400" />
      </div>
      <div className="border-b-2 border-gray-400 w-[90%] my-2 h-2"></div>
      <div className="flex flex-col w-full items-center justify-around bottom-0">
        <div className="flex justify-around w-full">
          <div className="w-[50%] ">
            <RoundedBox title={active} className="border-secondary" />
          </div>
          <h1 className="text-secondary">Active</h1>
        </div>
        <div className="flex justify-around w-full mt-2 items-center">
          <div className="w-[50%] ">
            <RoundedBox title={inactive} className="border-red-500" />
          </div>
          <h1 className="text-red-500">Inactive</h1>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
