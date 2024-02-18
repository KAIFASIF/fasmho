import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Table from "../../../css/table";
import ProductRow from "./ProductRow";

const headers: string[] = [
  "Vehicle No. / BMS ID - Time",
  "SOC",
  "Cycle Count",
  "Fault Status",
  "BMS Status",
  "Operating Status",
  "Action",
];

const Product = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(100);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(5);

  useEffect(() => {
    handleProducts();
  }, [page, size]);

  const handleProducts = async () => {
    try {
      setIsLoading(true);
      // const res = await fetchProductList(page, size);
      // console.log(res)
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${
          page + 1
        }&_limit=${size}`
      );
      if (res?.status === 200) {
        setCount(100);
        setData(res?.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="pt-10 px-2 lg:px-10 bg-green-400 h-screen w-full">
        <Table
          headers={headers}
          tableData={data}
          TableRow={ProductRow}
          paginationOptions={{ count, page, size, setPage, setSize }}
        />
      </div>
    </Layout>
  );
};

export default React.memo(Product);
