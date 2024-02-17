import React, { useEffect, useState } from "react";
import Circuit from "./circuit";
import AlarmTable from "./alarm-table";
import { Link } from "react-router-dom";
import { LuCopyPlus } from "react-icons/lu";
import Layout from "../../../components/Layout";
import { fetchDashboardData } from "../../../service/dashboardApi";
import { alarmStatusCurrent, alarmStatusData } from "../../../utils/tempData";
import Button from "../../../components/Button";

const AlarmStatus = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [currentAlert, setCurrentAlert] = useState<any>({});

  useEffect(() => {
    fetchAlaramStatus();
  }, []);

  const fetchAlaramStatus = async () => {
    try {
      setIsLoading(true);
      const res = await fetchDashboardData();
      if (res?.status === 200) {
        // setData(res?.data);
        setData(alarmStatusData);
        const response = await fetchDashboardData();
        if (response?.status === 200) {
          setCurrentAlert(alarmStatusCurrent);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Layout isLoading={isLoading}>
      <div className="w-full px-10 pt-5">
        <section className="flex justify-end w-full pr-2">
          <div className="flex w-40">
            <Button
              onClick={() => alert()}
              className="flex justify-center"
            >
              <LuCopyPlus
                className="text-white group-hover:text-primary"
                size={20}
              />
              <span className="pl-2 text-white font-semibold group-hover:text-gray-800">
                Create Ticket
              </span>
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 mt-4">
          <section className=" lg:col-span-2 h-full w-full ">
            <div className="lg:col-span-4 ">
              <div className="flex justify-between px-2 w-full">
                <p className="sub-heading">Alarm Status(Last 1 week)</p>
                <Link to="/product" className="sub-heading text-primary">
                  Read more{" "}
                </Link>
              </div>
              <div className="mt-2">
                <AlarmTable data={data} />
              </div>
            </div>
          </section>

          <section className=" w-full  mt-10 lg:mt-0">
            <Circuit {...currentAlert} />
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default React.memo(AlarmStatus);
