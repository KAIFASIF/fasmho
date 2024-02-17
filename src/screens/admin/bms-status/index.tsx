import React, { useEffect, useState } from "react";
import StatusSection from "./StatusSection.";
import Layout from "../../../components/Layout";
import { fetchDashboardData } from "../../../service/dashboardApi";
import { bmsStatus, bmsTemperatureGraphData } from "../../../utils/tempData";
import TemperatureGraphSection from "./TemperatureGraphSection";

const BmsStatus = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [temperatureGraphData, setTemperatureGraphData] = useState<any>([]);
  useEffect(() => {
    handleBmsStatus();
  }, []);

  const handleBmsStatus = async () => {
    try {
      setIsLoading(true);
      const res = await fetchDashboardData();
      if (res?.status === 200) {
        // setData(res?.data);
        setData(bmsStatus);
        // const response = await fetchDashboardData();
        // setTemperatureGraphData(response?.data);
        setTemperatureGraphData(bmsTemperatureGraphData);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Layout isLoading={isLoading}>
      <div className="px-10 pt-5 w-full">
        <StatusSection {...data} />
        <TemperatureGraphSection data={temperatureGraphData}/>
      </div>
    </Layout>
  );
};

export default React.memo(BmsStatus);
