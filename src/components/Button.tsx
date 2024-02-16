// import React from "react";
// interface buttonProps {
//   label: string;
//   className?: string;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
//   disabled?: boolean;
//   children?: any;
// }

// const Button: React.FC<buttonProps> = ({
//   label,
//   onClick,
//   type,
//   className,
//   disabled,
//   children,
// }) => {
//   return (
//     <div>
//       <button
//         onClick={onClick}
//         type={type ?? "submit"}
//         className={`${className} rounded-full py-2 px-10 bg-primary text-red-400`}
//         disabled={disabled}
//       >
//         {children ? children : label}
//       </button>
//     </div>
//   );
// };

// export default React.memo(Button);

import React from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  disabled?: boolean;
  children?: any;
  labelClass?: string;
}

const Button: React.FC<buttonProps> = ({
  label,
  onClick,
  type,
  className,
  disabled,
  children,
  labelClass,
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        type={type ?? "button"}
        className={twMerge(
          `bg-primary w-full p-2 box-border rounded hover:bg-white group hover:border-gray-400 border-2`,
          className
        )}
        disabled={disabled ?? false}
      >
        <span
          className={twMerge(
            `${
              children && "hidden"
            } text-white font-semibold group-hover:text-gray-800`,
            labelClass
          )}
        >
          {label}
        </span>
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
