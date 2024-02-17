import api from "../config/api";

export const fetchProductList = (page: number, size: number) => {
  return api.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${size}`
    // `https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=${size}`
  );
};
