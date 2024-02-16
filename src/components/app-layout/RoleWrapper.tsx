import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { useState } from "react";

const RoleWrapper = ({ role }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const userRoles = ["ROLE_ADMIN", "ROLE_USER"];
  return (
    userRoles?.includes(role) && (
      <div className="flex  justify-between overflow-clip">
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
        <main className=" flex-1 z-10 bg-red-400 w-full">
          <div className="bg-white w-full flex h-full">
            <Outlet />
          </div>
        </main>
      </div>
    )
  );
};

export default RoleWrapper;
