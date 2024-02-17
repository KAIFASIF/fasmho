import React, { useEffect, useState } from "react";
import Back from "./Back";
import { useLocation } from "react-router-dom";
import { fetchPathName } from "../utils/common";

const Header = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState<string | null>();

  useEffect(() => {
    handlePathname();
  }, [location?.pathname]);

  const handlePathname = () => {
    location?.pathname === "/"
      ? setPathname("Overview")
      : setPathname(fetchPathName(location?.pathname?.substring(1)));
  };
  return (
    <div className="w-full flex flex-col justify-between ">
      <div className="flex items-center w-full">
        <Back />
        <span className="ml-2 text-xl font-semibold text-gray-600">
          {pathname}
        </span>
      </div>
      <div className="h-0.5 bg-gray-200 mt-0.5" />
    </div>
  );
};

export default React.memo(Header);
