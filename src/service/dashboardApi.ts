import api from "../config/api";

export const fetchDashboardData = () => {
  return api.get("https://jsonplaceholder.typicode.com/todos");
};

