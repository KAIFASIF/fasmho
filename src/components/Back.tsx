import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <IoMdArrowRoundBack
      size={20}
      onClick={() => navigate(-1)}
      className="cursor-pointer text-gray-600 mt-1"
    />
  );
};

export default React.memo(Back);
