import CellVoltage from "./CellVoltage";
import { Link } from "react-router-dom";
import ChargeSection from "./ChargeSection";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../../service/dashboardApi";
import { dashboardData, stateOfChargeGraphData } from "../../../utils/tempData";
import Layout from "../../../components/Layout";
import VehicleDataSection from "./vehicleDataSection";
import Temperature from "./Temperature";
import Counts from "./Counts";
import Header from "./Header";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [stateCharge, setStateCharge] = useState<[] | number[]>([]);
  useEffect(() => {
    handleDashboard();
  }, []);

  const handleDashboard = async () => {
    try {
      setIsLoading(true);
      const res = await fetchDashboardData();
      if (res?.status === 200) {
        // setData(res?.data);
        setData(dashboardData);
        // const response = await fetchDashboardData();
        // setStateCharge(response?.data);
        setStateCharge(stateOfChargeGraphData);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      
      <div className="flex flex-col items-center w-full px-4 pt-5 lg:px-10">
        {/* header Section */}
        <header className="flex  items-center bg-white w-full gap-x-4  mt-2 p-4">
          <Header {...data} />
        </header>

        <section className="flex w-full h-full mt-4  bg-white p-4">
          <ChargeSection {...data} stateCharge={stateCharge} />
        </section>

        {/* cell voltage Section */}
        <section className="grid grid-cols-1 lg:grid-cols-8 w-full lg:gap-x-4 mt-10 lg:mt-10 px-4  py-4  shadow-sm bg-white">
          <section className="lg:col-span-4">
            <div className="flex justify-between px-2 w-full">
              <p className="sub-heading">Cell Voltages</p>
              <Link to="/product" className="sub-heading text-primary">
                Read more{" "}
              </Link>
            </div>
            <CellVoltage {...data} />
          </section>

          {/* Temperature section */}
          <section className="col-span-3 mt-10 lg:mt-0">
            <div className="flex justify-between px-2 w-full">
              <p className="sub-heading">Temperature</p>
              <Link to="/product" className="sub-heading text-primary">
                Read more{" "}
              </Link>
            </div>
            <Temperature {...data} />
          </section>

          {/* count section */}
          <section className="col-span-1 mt-5 w-full">
            <Counts />
          </section>
        </section>

        {/* State of Health */}
        <section className="grid grid-cols-1 lg:grid-cols-8 w-full lg:gap-x-4 mt-10 lg:mt-10 px-4 bg-white pt-4 py-10">
          <section className="lg:col-span-4 ">
            <div className="flex justify-between px-2 w-full">
              <p className="sub-heading">State of Health</p>
              <Link to="/product" className="sub-heading text-primary">
                Read more{" "}
              </Link>
            </div>
            <div className="bg-primary h-40 w-full rounded mt-2"></div>
          </section>

          {/* Vehicle data section */}
          <section className="col-span-4 mt-10 lg:mt-0">
            <VehicleDataSection />
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
