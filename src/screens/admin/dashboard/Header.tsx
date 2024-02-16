import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SquareBox from "../../../components/SquareBox";
import Button from "../../../components/Button";
import { FaCircleUser } from "react-icons/fa6";

type headerProps = {
  name: string;
  firmwareVersion: string;
};
const Header: React.FC<headerProps> = ({ name, firmwareVersion }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center w-1/2">
        <div className="flex items-center ">
          <FaCircleUser size={30} className="text-gray-400" />
          <span className="sub-heading ml-2">{name}</span>
        </div>
        <div className="w-28 ml-4 ">
          <SquareBox title={firmwareVersion} />
        </div>
      </div>
      <div className="flex  gap-x-4 w-1/3 ">
        <Button
          onClick={() => navigate("/alarm-status")}
          className="bg-red-600  hover:bg-transparent hover:border-red-600 border-red-600 flex justify-center items-center rounded-md"
        >
          <MdOutlineArrowCircleLeft
            className=" text-white group-hover:text-red-600"
            size={20}
          />
          <span className="text-white group-hover:text-red-600 ml-2 font-semibold">
            {" "}
            Alaram Status
          </span>
        </Button>
        <Button
          onClick={() => navigate("/bms-status")}
          className="bg-secondary  hover:bg-transparent hover:border-secondary border-secondary flex justify-center items-center rounded"
        >
          <MdOutlineArrowCircleLeft
            className=" text-white group-hover:text-secondary"
            size={20}
          />
          <span className="text-white group-hover:text-secondary ml-2 font-semibold">
            {" "}
            BMS Status
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="grid w-full grid-flow-col auto-cols-[theme('spacing.28')] grid-cols-[repeat(auto-fill,_auto)] gap-4 overflow-x-auto">
<SquareBox title={name} className="col-span-3" />
<div>
  
</div>
<SquareBox title={firmwareVersion} />
<div className="w-full col-span-2">
  <Button
    onClick={() => navigate("/alarm-status")}
    className="bg-red-600  hover:bg-transparent hover:border-red-600 border-red-600 flex justify-center items-center rounded-md"
  >
    <MdOutlineArrowCircleLeft
      className=" text-white group-hover:text-red-600"
      size={20}
    />
    <span className="text-white group-hover:text-red-600 ml-2 font-semibold">
      {" "}
      Alaram Status
    </span>
  </Button>
</div>
<div className="w-full col-span-2">
  <Button
    onClick={() => navigate("/bms-status")}
    className="bg-secondary  hover:bg-transparent hover:border-secondary border-secondary flex justify-center items-center rounded"
  >
    <MdOutlineArrowCircleLeft
      className=" text-white group-hover:text-secondary"
      size={20}
    />
    <span className="text-white group-hover:text-secondary ml-2 font-semibold">
      {" "}
      BMS Status
    </span>
  </Button>
</div>
</div> */
}
