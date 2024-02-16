import React from "react";
import Status from "./Status";
import TemperatureCard from "./TemperatureCard";

const StatusSection = ({
  temperature,
  peripheralStatus,
  cutOffStatus,
}: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:px-20  lg:px-0 w-full gap-6">
      <TemperatureCard temperature={temperature} />
      
      <div className="w-full flex-wrap shrink-0">
        <p className="sub-heading">Peripheral Status </p>
        <div className="flex flex-col justify-between  gap-y-4 p-3 bg-gray-200 h-40  rounded w-full mt-2  ">
          <Status title="CAN Status" status={peripheralStatus?.canStatus} />
          <Status title="SPI Status" status={peripheralStatus?.spiStatus} />
          <Status title="BLE Status" status={peripheralStatus?.bleStatus} />
        </div>
      </div>
      <div className="w-full flex-wrap shrink-0">
        <p className="sub-heading">Cutoff Status </p>
        <div className="flex flex-col justify-between  gap-y-4 p-3 bg-gray-200 h-40 rounded w-full mt-2 ">
          <Status title="Voltage" status={cutOffStatus?.voltage} />
          <Status title="Current" status={cutOffStatus?.current} />
          <Status title="Temperature" status={cutOffStatus?.temperature} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StatusSection);
// import React from "react";
// import { GrStatusGood } from "react-icons/gr";
// import RoundedBox from "../../../components/RoundedBox";

// const headings: any = [
//   {
//     id: 1,
//     title: "Tempearatures",
//     data: ["MCU Temp", "AFE Temp", "MOSFET  Temp"],
//     isIcon: false,
//   },
//   {
//     id: 2,
//     title: "Peripheral Status",
//     data: ["CAN Status", "SPI Status", "BLE Status"],
//     isIcon: true,
//   },
//   {
//     id: 3,
//     title: "Cutoff Status",
//     data: ["Voltage", "Current", "Temperature"],
//     isIcon: true,
//   },
// ];

// const StatusSection = ({peripheralStatus, cutOffStatus}:any) => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 md:px-20  lg:px-0 w-full gap-6">
//       {headings.length > 0 &&
//         headings.map((ele: any) => (
//           <div className="w-full   flex-wrap shrink-0 " key={ele?.id}>
//             <p className="sub-heading">{ele?.title} </p>
//             <div className="flex flex-col justify-between  bg-red-400  rounded w-full mt-2 ">
//               {ele?.data?.length > 0 &&
//                 ele?.data.map((labelText: string) => (
//                   <div
//                     className="flex justify-center  gap-x-2 py-2 w-full  px-4 md:px-8"
//                     key={labelText}
//                   >
//                     <RoundedBox title={labelText} className="bg-white w-3/5" />

//                     <RoundedBox

//                       className="bg-white w-2/5 flex justify-center items-center"
//                     >
//                       <GrStatusGood
//                         size={16}
//                         className={`${
//                           ele?.isIcon ? "block" : "hidden"
//                         }  text-secondary -mt-1`}
//                       />
//                       <span className="sub-title ml-2 text-2xl text-secondary -mt-2">
//                         {" "}
//                         -----
//                       </span>
//                     </RoundedBox>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default React.memo(StatusSection);
