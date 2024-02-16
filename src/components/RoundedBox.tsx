import React from "react";
import { twMerge } from "tailwind-merge";

const RoundedBox = ({
  className,
  onclick,
  title,
  titleClass,
  children,
}: any) => {
  return (
    <div
      className={twMerge(
        `flex justify-center items-center w-full box-border border-2 border-gray-rounded px-1 py-2 rounded-full`,
        className
      )}
      onClick={onclick}
    >
      <span
        className={twMerge(`${children && "hidden"} sub-title`, titleClass)}
      >
        {title}{" "}
      </span>
      {children}
    </div>
  );
};

export default React.memo(RoundedBox);
