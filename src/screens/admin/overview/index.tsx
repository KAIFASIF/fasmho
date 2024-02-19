import FaultOverviewTable from "./FaultOverviewTable";

import CardSection from "./card-section";
import Statistics from "./Statistics";

import OverviewGraph from "./OverviewGraph";
import { fetchData, fetchFaultOverview } from "../../../service/overviewApi";
import { useEffect, useState } from "react";
import { faultOveviewData, overViewData } from "../../../utils/tempData";
import Layout from "../../../components/Layout";

const Overview = () => {
  const [statistics, setStatistics] = useState<any>({});
  const [faultOverview, setFaultOverview] = useState<any>([]);
  const [customers, setCustomers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    try {
      setIsLoading(true);
      const res = await fetchData();
      if (res?.status === 200) {
        setStatistics(overViewData);
        // console.log("sssss: ", overViewData?.customers)
        setCustomers(overViewData?.customers);
        // setStatistics(res?.data);
        const response = await fetchFaultOverview();
        if (response.status === 200) {
          setFaultOverview(faultOveviewData);
          // setFaultOverview(response?.data)
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="px-4 lg:px-10 pt-5 z-20 w-full h-full">
        <div className="flex flex-wrap bg-white z-40 gap-4 p-4 lg:px-10 lg:pt-10">
          <div className="w-[100%] lg:w-[15%]  shrink-0">
            <Statistics statistics={statistics} />
          </div>
          <div className="w-[100%] lg:w-[30%]   shrink-0 mt-">
            <OverviewGraph />
          </div>
          <div className="w-[100%] lg:w-[50%]   shrink-0">
            <FaultOverviewTable data={faultOverview} />
          </div>
        </div>
        <div className="flex flex-wrap bg-white z-40 gap-4 p-2 lg:px-10 ">
          <CardSection data={customers} />
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
