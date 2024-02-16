import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Button from "./Button";

const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      className="bg-transparent w-full hover:bg-primary border-2 border-primary"
    >
      <div className="flex w-full justify-center items-center">
        <MdOutlineArrowCircleLeft
          className="text-primary group-hover:text-white "
          size={20}
        />
        <span className="pl-2  text-primary font-semibold group-hover:text-white">
          Go back
        </span>
      </div>
    </Button>
  );
};

export default React.memo(GoBackBtn);
