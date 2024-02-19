import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../sidebar";
import { useState } from "react";
import Navbar from "./Navbar";
import Header from "../Header";

const RoleWrapper = ({ role }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const userRoles = ["ROLE_ADMIN", "ROLE_USER"];
  useParams;
  return (
    userRoles?.includes(role) && (
      <div className="flex flex-col lg:flex-row justify-between overflow-clip">
        <nav className="lg:hidden w-full  z-20 bg-white  fixed ">
          <Navbar />
        </nav>
        <aside
          className={`${
            open ? "w-20" : "w-60"
          }    duration-500 hidden lg:block `}
        >
          <div
            className={`${
              open ? "w-20" : "w-60"
            } duration-500  fixed z-40  h-full`}
          >
            <Sidebar open={open} setOpen={setOpen} />
          </div>
        </aside>
        <main className=" flex-1 z-10 w-full bg-gray-100">
          <div className="flex flex-col  w-full  mt-20 lg:mt-0">
            <div className="px-2 lg:px-10 w-full bg-gray-100  fixed z-20 py-4">
              <Header />
            </div>
            <div className="w-full mt-10">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    )
  );
};

export default RoleWrapper;
