import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type graphProps = {
  data: any
};

const Graph: React.FC<graphProps> = ({
  data,
}) => {

  const options: ApexOptions = {
    chart: {
      id: "line-chart",
      width: "100%",
      height: "100%",
    },
    series: [
      {
        name: "MCU Temp",
        data: data[0],
        color:"#FFA600"
      },
      {
        name: "AFE Temp",
        data: data[1],
        color:"#401641"
      },
      {
        name: "Board Temp",
        data: data[2],
        color:"#00ff95"
      }
    ],
    stroke: {
      width: 2,
      curve: "smooth",
     
    },
    xaxis: {
      categories: [1, 3, 5, 7, 9, 11,12,14,15,19,20,21],
    },
    dataLabels: {
      enabled: false,
    },
  };
  
  return (
    data &&
    data.length > 0 && (
      <div className="flex w-full">
        <Chart
          options={options}
          series={options?.series}
          type="line"
          height={400}
          className="w-full"
        />
      </div>
    )
  );
};

export default Graph;


// import React from "react";
// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// type graphProps = {
//   data: any
// };

// const Graph: React.FC<graphProps> = ({
//   data,
// }) => {

//   const options: ApexOptions = {
//     chart: {
//       id: "line-chart",
//       width: "100%",
//       height: "100%",
//     },
//     series: [
//       {
//         name: "series-1",
//         data: data[0],
//         color: "blue",        
//       },
     
//     ],

//     stroke: {
//       width: 2,
//       curve: "smooth", //stepline straight smooth
//     },
//     xaxis: {
//       categories: [1, 3, 5, 7, 9, 11],
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     // yaxis: {
//     //   tickAmount: 11,
//     //   labels: {
//     //     formatter: function (_value: number, index) {
//     //       const customValues = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
//     //       if (index < customValues.length) {
//     //         return customValues[index];
//     //       } else {
//     //         return "";
//     //       }
//     //     },
//     //   },
//     // },
//   };

//   console.log("first", data[0])
//   return (
//     data &&
//     data.length > 0 && (
//       <div className="flex w-full">
//         <Chart
//           options={options}
//           series={options?.series}
//           type="line"
//           // height={400}
//           className="w-full"
//         />
//       </div>
//     )
//   );
// };

// export default Graph;
