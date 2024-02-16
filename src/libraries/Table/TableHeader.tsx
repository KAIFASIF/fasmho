import { FC } from "react";
import { TableHeaderProps } from "./type";

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead
      className="text-gray-400 sticky top-0  
     bg-gray-600  dark:bg-gray-800 dark:text-gray-400"
    >
      <tr>
        {headers?.map((header) => {
          return (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-md font-semibold  bg-gray-200 sub-title text-black sub-title"
            >
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
