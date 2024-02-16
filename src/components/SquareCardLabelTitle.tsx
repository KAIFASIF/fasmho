import React from "react";
import RoundedBox from "./RoundedBox";
import { twMerge } from "tailwind-merge";

const SquareCardLabelTitle = ({
  className,
  title,
  roundBoxClass,
  titleClass,
  spanLabel,
}: any) => {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col border-2 bg-gray-100 border-gray-300 box-border rounded  justify-center items-center px-2 shrink-0 h-24",
        className
      )}
    >
      <RoundedBox
        title={title}
        className={roundBoxClass}
        titleClass={titleClass}
      />
      <span className="sub-title mt-2">{spanLabel}</span>
    </div>
  );
};

export default React.memo(SquareCardLabelTitle);
