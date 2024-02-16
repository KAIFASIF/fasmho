import React from "react";

type circleGraphProps = {
  stateOfCharge: number;
};
const CircleGraph: React.FC<circleGraphProps> = ({ stateOfCharge }) => {
  const circumference = 2 * (22 / 7) * 120;

  return (
    stateOfCharge && (
      <div className="flex items-center justify-center">
        <svg className="transform rotate-90 w-72 h-72">
          <circle
            cx="145"
            cy="145"
            r="120"
            stroke="currentColor"
            strokeWidth="20"
            fill="transparent"
            className="text-white opacity-15"
          />
          <circle
            cx="145"
            cy="145"
            r="120"
            stroke="currentColor"
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (stateOfCharge / 100) * circumference
            }
            className="text-white  from-secondary to-primary "
          />
        </svg>
        <span className="absolute text-5xl text-white font-bold">{`${stateOfCharge}%`}</span>
      </div>
    )
  );
};

export default React.memo(CircleGraph);
