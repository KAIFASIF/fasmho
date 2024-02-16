import React from "react";

import CircleStatus from "../../../components/CircleStatus";

const TemperatureCard = ({ temperature }: any) => {
  return (
    <div className="w-full flex-wrap shrink-0">
      <p className="sub-heading">Temperatures </p>
      <div className="h-40 bg-gray-200">
        <div className="flex  justify-between  items-center gap-4 p-2    rounded w-full mt-2 ">
          <div className="w-[70%] flex justify-center items-center">
            <div className="w-full flex ">
              <div className="w-[20%] flex justify-end items-center">
                <CircleStatus
                  ele={temperature?.mcuTemperature?.value}
                  lowerLimit={
                    temperature?.mcuTemperature?.mcuTemperatureLowerTrashHold
                  }
                  upperLimit={
                    temperature?.mcuTemperature?.mcuTemperatureUpperTrashHold
                  }
                />
              </div>
              <div className="flex-1 flex ml-1 items-center">
                <span className="ml-2">MCU Temp</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <span
              className={`text-lg font-semibold
          ${
            temperature?.mcuTemperature?.value &&
            temperature?.mcuTemperature?.value <
              temperature?.mcuTemperature?.mcuTemperatureLowerTrashHold
              ? "text-red-600"
              : temperature?.mcuTemperature?.value &&
                temperature?.mcuTemperature?.value >
                  temperature?.mcuTemperature?.mcuTemperatureUpperTrashHold
              ? "text-blue-600"
              : "text-secondary"
          }
          `}
            >
              {temperature?.mcuTemperature?.value}
            </span>
          </div>
        </div>
        {/* Afe Temperature */}
        <div className="flex  justify-between  items-center gap-4 p-2   rounded w-full mt-2 ">
          <div className="w-[70%] flex justify-center items-center">
            <div className="w-full flex ">
              <div className="w-[20%] flex justify-end items-center">
                <CircleStatus
                  ele={temperature?.afeTemperature?.value}
                  lowerLimit={
                    temperature?.afeTemperature?.afeTemperatureLowerTrashHold
                  }
                  upperLimit={
                    temperature?.afeTemperature?.afeTemperatureUpperTrashHold
                  }
                />
              </div>
              <div className="flex-1 flex ml-1 items-center">
                <span className="ml-2">AFE Temp</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <span
              className={`text-lg font-semibold
          ${
            temperature?.afeTemperature?.value &&
            temperature?.afeTemperature?.value <
              temperature?.afeTemperature?.afeTemperatureLowerTrashHold
              ? "text-red-600"
              : temperature?.afeTemperature?.value &&
                temperature?.afeTemperature?.value >
                  temperature?.afeTemperature?.afeTemperatureUpperTrashHold
              ? "text-blue-600"
              : "text-secondary"
          }
          `}
            >
              {temperature?.afeTemperature?.value}
            </span>
          </div>
        </div>

        {/* Board Temperature */}
        <div className="flex  justify-between  items-center gap-4 p-2 rounded w-full mt-2 ">
          <div className="w-[70%] flex justify-center items-center">
            <div className="w-full flex ">
              <div className="w-[20%] flex justify-end items-center">
                <CircleStatus
                  ele={temperature?.boardTemperature?.value}
                  lowerLimit={
                    temperature?.boardTemperature
                      ?.boardTemperatureLowerTrashHold
                  }
                  upperLimit={
                    temperature?.boardTemperature
                      ?.boardTemperatureUpperTrashHold
                  }
                />
              </div>
              <div className="flex-1 flex ml-1 items-center">
                <span className="ml-2">Board Temp</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <span
              className={`text-lg font-semibold
              ${
                temperature?.boardTemperature?.value &&
                temperature?.boardTemperature?.value <
                  temperature?.boardTemperature?.boardTemperatureLowerTrashHold
                  ? "text-red-600"
                  : temperature?.boardTemperature?.value &&
                    temperature?.boardTemperature?.value >
                      temperature?.boardTemperature
                        ?.boardTemperatureUpperTrashHold
                  ? "text-blue-600"
                  : "text-secondary"
              }
              `}
            >
              {temperature?.boardTemperature?.value}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex  justify-between  gap-4 p-2   rounded w-full mt-2 ">
        <RoundedBox className="w-[70%] bg-white flex justify-center items-center">
          <CircleStatus
            ele={temperature?.afeTemperature?.value}
            lowerLimit={
              temperature?.afeTemperature?.afeTemperatureLowerTrashHold
            }
            upperLimit={
              temperature?.afeTemperature?.afeTemperatureUpperTrashHold
            }
          />
          <span className="ml-2">AFE Tempp</span>
        </RoundedBox>
        <RoundedBox
          className="flex flex-1 bg-white"
          title={temperature?.afeTemperature?.value}
          titleClass={`text-lg font-semibold
          ${
            temperature?.afeTemperature?.value &&
            temperature?.afeTemperature?.value <
              temperature?.afeTemperature?.afeTemperatureLowerTrashHold
              ? "text-red-600"
              : temperature?.afeTemperature?.value &&
                temperature?.afeTemperature?.value >
                  temperature?.afeTemperature?.afeTemperatureUpperTrashHold
              ? "text-blue-600"
              : "text-secondary"
          }
          `}
        />
      </div>
      <div className="flex  justify-between  gap-4 p-2 bg-gray-100  rounded w-full mt-2 ">
        <RoundedBox className="w-[70%] bg-white flex justify-center items-center">
          <CircleStatus
            ele={temperature?.boardTemperature?.value}
            lowerLimit={
              temperature?.boardTemperature?.boardTemperatureLowerTrashHold
            }
            upperLimit={
              temperature?.boardTemperature?.boardTemperatureUpperTrashHold
            }
          />
          <span className="ml-2">Board Temp</span>
        </RoundedBox>
        <RoundedBox
          className="flex flex-1 bg-white"
          title={temperature?.boardTemperature?.value}
          titleClass={`text-lg font-semibold
          ${
            temperature?.boardTemperature?.value &&
            temperature?.boardTemperature?.value <
              temperature?.boardTemperature?.boardTemperatureLowerTrashHold
              ? "text-red-600"
              : temperature?.boardTemperature?.value &&
                temperature?.boardTemperature?.value >
                  temperature?.boardTemperature?.boardTemperatureUpperTrashHold
              ? "text-blue-600"
              : "text-secondary"
          }
          `}
        />
      </div> */}
    </div>
  );
};

export default React.memo(TemperatureCard);
// import React from "react";
// import RoundedBox from "../../../components/RoundedBox";
// import CircleStatus from "../../../components/CircleStatus";

// const TemperatureCard = ({ temperature }: any) => {
//   return (
//     <div className="w-full flex-wrap shrink-0">
//       <p className="sub-heading">Temperatures </p>
//       <div className="flex  justify-between  gap-4 p-2 bg-gray-100  rounded w-full mt-2 ">
//         <RoundedBox className="w-[70%] bg-white flex justify-center items-center">
//           <CircleStatus
//             ele={temperature?.mcuTemperature?.value}
//             lowerLimit={
//               temperature?.mcuTemperature?.mcuTemperatureLowerTrashHold
//             }
//             upperLimit={
//               temperature?.mcuTemperature?.mcuTemperatureUpperTrashHold
//             }
//           />
//           <span className="ml-2">MCU Temp</span>
//         </RoundedBox>
//         <RoundedBox
//           className="flex flex-1 bg-white"
//           title={temperature?.mcuTemperature?.value}
//           titleClass={`text-lg font-semibold
//           ${
//             temperature?.mcuTemperature?.value &&
//             temperature?.mcuTemperature?.value <
//               temperature?.mcuTemperature?.mcuTemperatureLowerTrashHold
//               ? "text-red-600"
//               : temperature?.mcuTemperature?.value &&
//                 temperature?.mcuTemperature?.value >
//                   temperature?.mcuTemperature?.mcuTemperatureUpperTrashHold
//               ? "text-blue-600"
//               : "text-secondary"
//           }
//           `}
//         />
//       </div>
//       <div className="flex  justify-between  gap-4 p-2 bg-gray-100  rounded w-full mt-2 ">
//         <RoundedBox className="w-[70%] bg-white flex justify-center items-center">
//           <CircleStatus
//             ele={temperature?.afeTemperature?.value}
//             lowerLimit={
//               temperature?.afeTemperature?.afeTemperatureLowerTrashHold
//             }
//             upperLimit={
//               temperature?.afeTemperature?.afeTemperatureUpperTrashHold
//             }
//           />
//           <span className="ml-2">AFE Temp</span>
//         </RoundedBox>
//         <RoundedBox
//           className="flex flex-1 bg-white"
//           title={temperature?.afeTemperature?.value}
// titleClass={`text-lg font-semibold
// ${
//   temperature?.afeTemperature?.value &&
//   temperature?.afeTemperature?.value <
//     temperature?.afeTemperature?.afeTemperatureLowerTrashHold
//     ? "text-red-600"
//     : temperature?.afeTemperature?.value &&
//       temperature?.afeTemperature?.value >
//         temperature?.afeTemperature?.afeTemperatureUpperTrashHold
//     ? "text-blue-600"
//     : "text-secondary"
// }
// `}
//         />
//       </div>
//       <div className="flex  justify-between  gap-4 p-2 bg-gray-100  rounded w-full mt-2 ">
//         <RoundedBox className="w-[70%] bg-white flex justify-center items-center">
//           <CircleStatus
//             ele={temperature?.boardTemperature?.value}
//             lowerLimit={
//               temperature?.boardTemperature?.boardTemperatureLowerTrashHold
//             }
//             upperLimit={
//               temperature?.boardTemperature?.boardTemperatureUpperTrashHold
//             }
//           />
//           <span className="ml-2">Board Temp</span>
//         </RoundedBox>
//         <RoundedBox
//           className="flex flex-1 bg-white"
//           title={temperature?.boardTemperature?.value}
// titleClass={`text-lg font-semibold
// ${
//   temperature?.boardTemperature?.value &&
//   temperature?.boardTemperature?.value <
//     temperature?.boardTemperature?.boardTemperatureLowerTrashHold
//     ? "text-red-600"
//     : temperature?.boardTemperature?.value &&
//       temperature?.boardTemperature?.value >
//         temperature?.boardTemperature?.boardTemperatureUpperTrashHold
//     ? "text-blue-600"
//     : "text-secondary"
// }
// `}
//         />
//       </div>
//     </div>
//   );
// };

// export default React.memo(TemperatureCard);
