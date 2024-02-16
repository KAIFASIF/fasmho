import React from "react";
import Loader from "./Loader";

type layoutProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ isLoading, children }) => {
  return isLoading ? <Loader /> : <div className="w-full">{children}</div>;
};

export default React.memo(Layout);
