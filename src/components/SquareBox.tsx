import React from "react";
import { twMerge } from "tailwind-merge";

const SquareBox = ({
  className,
  onclick,
  title,
  titleClassName,
  children,
}: any) => {
  return (
    <div
      className={twMerge(
        `flex justify-center items-center w-full box-border border-2 border-gray-rounded px-1 py-1 rounded`,
        className
      )}
      onClick={onclick}
    >
      <span
        className={twMerge(`${children && "hidden"} sub-title`, titleClassName)}
      >
        {title}{" "}
      </span>
      {children}
    </div>
  );
};

export default React.memo(SquareBox);
