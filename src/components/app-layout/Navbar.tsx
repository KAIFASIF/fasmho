import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useNavigate}from "react-router-dom";
import { menus } from "../../data/menu";


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate()
  return (
    <div className="w-full  shadow-sm shadow-blur-md shadow-gray-400 ">
      <div className="flex justify-between items-center px-5 p-4 w-full">
        <img
          src="/assets/images/FES_Logo.png"
          alt="Fashmo logo Image"
          className="w-12 h-auto"
        />
        <IoMenuSharp size={35} onClick={() => setOpen(!open)} />
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`transition-all ease-in-out duration-500  mt-100 ${
          open ? "h-60 opacity-100" : "h-0 opacity-0"
        }  w-full px-10 `}
      >
        {menus &&
          menus.length > 0 &&
          menus.map((ele: any) => (
            <div
              onClick={() =>{ navigate(ele?.path) setOpen(false)}}
              className="flex p-2  rounded my-2 hover:bg-gray-100"
            >
              <Link to={ele?.path}>{ele?.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Navbar);
