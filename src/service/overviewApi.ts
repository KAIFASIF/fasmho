import api from "../config/api";

export const fetchData = () => {
  return api.get("https://jsonplaceholder.typicode.com/todos");
};

export const fetchFaultOverview = () => {
  return api.get("https://jsonplaceholder.typicode.com/todos");
};
