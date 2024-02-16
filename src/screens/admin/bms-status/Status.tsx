import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

const Status = ({ title, status }: any) => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <span className=" flex w-[70%]">{title}</span>

      {status ? (
        <GrStatusGood size={16} className="text-secondary -mt-1" />
      ) : (
        <TiDeleteOutline size={20} className="text-red-600  -mt-1" />
      )}
    </div>
  );
};

export default React.memo(Status);

// import React from "react";
// import { GrStatusGood } from "react-icons/gr";
// import RoundedBox from "../../../components/RoundedBox";
// import { TiDeleteOutline } from "react-icons/ti";

// const StatusCard = ({ title, status }: any) => {
//   return (
//     <div className="flex gap-x-2">
//       <RoundedBox
//         className="w-[70%] bg-white flex justify-start pl-20 py-3"
//         title={title}
//       />
//       <RoundedBox className="flex flex-1 bg-white">
//         {status ? (
//           <GrStatusGood size={16} className="text-secondary -mt-1" />
//         ) : (
//           <TiDeleteOutline size={20} className="text-red-600  -mt-1" />
//         )}
//       </RoundedBox>
//     </div>
//   );
// };

// export default React.memo(StatusCard);
