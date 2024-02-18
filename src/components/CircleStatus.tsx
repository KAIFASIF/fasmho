import React from "react";

const CircleStatus = ({ ele, lowerLimit, upperLimit }: any) => {
  return (
    <div
      className={`w-3 h-3 rounded-full ${
        ele && ele < lowerLimit
          ? "bg-red-600"
          : ele && ele > upperLimit
          ? "bg-blue-600"
          : "bg-secondary"
      }`}
    ></div>
  );
};

export default React.memo(CircleStatus);
