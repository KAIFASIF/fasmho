// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';

// const OverviewGraph = () => {
//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       id: 'donut-chart',
//     },
//     labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
//     dataLabels: {
//       enabled: false, // Hide data labels
//     },
//   });

//   const [series, setSeries] = useState([44, 55, 13, 43, 22]);

//   return (
//     <div className='flex justify-center items-center  h-full'>
//       <Chart options={chartOptions} series={series} type="donut"   />
//     </div>
//   );
// };

// export default OverviewGraph;

// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// const OverviewGraph = () => {
//   const [chartOptions, setChartOptions] = useState<ApexOptions>({
//     chart: {
//       id: 'donut-chart',
//     },
//     labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
//     dataLabels: {
//       enabled: false, // Hide data labels
//     },
//     legend: {
//       position: 'bottom', // Place legend at the bottom
//     },
//   });

//   const [series, setSeries] = useState([44, 55, 13, 43, 22]);

//   return (
//     <div className='flex justify-center items-center h-full'>
//       <Chart options={chartOptions} series={series} type="donut" />
//     </div>
//   );
// };

// export default OverviewGraph;

// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// const OverviewGraph = () => {
//   const [chartOptions, setChartOptions] = useState<ApexOptions>({
//     chart: {
//       id: 'donut-chart',
//     },
//     labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
//     dataLabels: {
//       enabled: false, // Hide data labels
//     },
//     legend: {
//       position: 'bottom', // Place legend at the bottom
//     },
//   });

//   const [series, setSeries] = useState([44, 55, 13, 43, 22]);

//   return (
//     <div className='flex justify-center items-center h-full'>
//       <Chart options={chartOptions} series={series} type="donut" />
//     </div>
//   );
// };

// export default OverviewGraph;

import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const OverviewGraph = () => {
 const options:ApexOptions={
    chart: {
      id: "donut-chart",
      width: "100%",
      height: "100%",
    },
    series:[44, 55, 13, 43, 22],
    labels: [],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  }


  return (
    <div
      className="flex justify-center items-center w-full h-full border-2 border-gray-200"
      style={{ margin: 0, padding: 0 }}
    >
      <Chart
        options={options}
        series={options?.series}
        type="donut"
        className="w-full"
      />
    </div>
  );
};

export default React.memo(OverviewGraph)
// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// const OverviewGraph = () => {
//   const [chartOptions, setChartOptions] = useState<ApexOptions>({
//     chart: {
//       id: "donut-chart",
//       width: "100%",
//       height: "100%",
//     },
//     labels: [],
//     dataLabels: {
//       enabled: false,
//     },
//     legend: {
//       show: false,
//     },
//   });

//   const [series, setSeries] = useState([44, 55, 13, 43, 22]);

//   return (
//     <div
//       className="flex justify-center items-center w-full h-full border-2 border-gray-200"
//       style={{ margin: 0, padding: 0 }}
//     >
//       <Chart
//         options={chartOptions}
//         series={series}
//         type="donut"
//         className="w-full"
//       />
//     </div>
//   );
// };

// export default React.memo(OverviewGraph)
