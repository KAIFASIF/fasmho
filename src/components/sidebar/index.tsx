import { memo, createElement } from "react";
import { menus } from "../../data/menu";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = ({ open, setOpen }: any) => {
  const location = useLocation();

  return (
    <div className={`bg-gray-200 w-full  flex flex-col justify-between h-full`}>
      <div className="flex flex-col h-full  w-full">
        <div className="py-3  flex justify-end px-3 ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex  justify-center px-3 ">
          <img
            src="/assets/images/FES_Logo.png"
            alt="Fashmo logo Image"
            className="w-16 h-auto"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative  ">
          {menus.length > 0 &&
            menus.map((ele: any) => (
              <Link
                to={ele?.path}
                key={ele?.id}
                className={`${
                  location?.pathname === ele?.path
                    ? "bg-zinc-800 text-white"
                    : ""
                }
              flex group items-center ${
                !open ? "pl-8 py-2" : "pl-4 py-2"
              } duration-500 text-sm font-medium gap-3 hover:bg-gray-300 `}
              >
                <div className="">{createElement(ele?.icon, { size: 24 })}</div>
                <h2
                  style={{ transitionDelay: `${ele?.id + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    open && "opacity-0 overflow-hidden translate-x-28"
                  }`}
                >
                  {ele?.title}
                </h2>
                <h2
                  className={`${!open && "hidden"} absolute left-48 bg-white 
                    font-semibold whitespace-pre duration-500 rounded
                    text-gray-900 drop-shadow-lg group-hover:px-2 group-hover:py-1 
                    group-hover:left-14 group-hover:absolute group-hover:duration-300 
                    group-hover:w-fit px-0 py-0 w-0 overflow-hidden`}
                >
                  {ele?.title}
                </h2>
              </Link>
            ))}
        </div>
      </div>
      {/* <div className="flex flex-col justify-between  h-60 px-4 border-2 rounded border-gray-400 mb-2 mx-2">
        <h1 className="flex w-full justify-center cursor-pointer hover:bg-gray-400 hover:text-black  text-white sub-title bg-primary mt-6 rounded-full px-10 py-4">Logout</h1>
      </div> */}
    </div>
  );
};

export default memo(Sidebar);
