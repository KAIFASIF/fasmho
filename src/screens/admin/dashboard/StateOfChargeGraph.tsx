import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type stateOfChargeGraphProps = {
  stateCharge: [] | number[];
};

const StateOfChargeGraph: React.FC<stateOfChargeGraphProps> = ({
  stateCharge,
}) => {
  const options: ApexOptions = {
    chart: {
      id: "line-chart",
      width: "100%",
      height: "100%",
    },
    series: [
      {
        name: "stateofcharge",
        data: stateCharge,
        color: "black",
      },
    ],

    stroke: {
      width: 2,
      curve: "smooth", //stepline straight smooth
    },
    xaxis: {
      categories: [1, 3, 5, 7, 9, 11],
    },
    dataLabels: {
      enabled: false,
    },
    // yaxis: {
    //   tickAmount: 11,
    //   labels: {
    //     formatter: function (_value: number, index) {
    //       const customValues = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
    //       if (index < customValues.length) {
    //         return customValues[index];
    //       } else {
    //         return "";
    //       }
    //     },
    //   },
    // },
  };

  return (
    stateCharge &&
    stateCharge.length > 0 && (
      <div className="flex w-full">
        <Chart
          options={options}
          series={options?.series}
          type="line"
          // height={400}
          className="w-full"
        />
      </div>
    )
  );
};

export default StateOfChargeGraph;
