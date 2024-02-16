import { AiOutlineAppstore } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import { MdOutlineComputer } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

type menuTypes = {
  id: number;
  title: string;
  path: string;
  icon: React.ElementType;
};

export const menus: menuTypes[] = [
  {
    id: 1,
    title: "Overview",
    path: "/",
    icon: AiOutlineAppstore,
  },

  {
    id: 2,
    title: "Dashboard",
    path: "/dashboard",
    icon: MdOutlineComputer,
  },

  {
    id: 3,
    title: "Product",
    path: "/product",
    icon: FiList,
  },
  {
    id: 4,
    title: "Assit Hub",
    path: "/assithub",
    icon: RxQuestionMarkCircled,
  },
];
