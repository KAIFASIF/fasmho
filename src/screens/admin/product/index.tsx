import { memo, useEffect, useState } from "react";
import Table from "../../../libraries/Table";
import ProductRow from "./ProductRow";
import { fetchDashboardData } from "../../../service/dashboardApi";
import { productsData } from "../../../utils/tempData";
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";

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
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(3);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetchDashboardData();
      if (res?.status === 200) {
        setData(productsData);
        // console.log("sssss: ", overViewData?.customers)
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleRefreshData = (newPage: number, newPageSize: number): any => {

    setPage(newPage);
    setPage(page);
    setSize(newPageSize);
  };
  return (
    <Layout isLoading={isLoading}>
      <div className=" w-full">
        <Navbar screen="ProductList" />
        <div className="mt-5 px-10 ">
          <Table
            headers={headers}
            TableRow={ProductRow}
            tableData={data}
            refreshTableData={handleRefreshData}
            paginationOptions={{
              totalPageCount: 100,
              defaultPageSize: size,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default memo(Product);

// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
// import Child1 from "./Child1";
// import Child2 from "./Child2";
// import { useCallback, useState } from "react";

// const Product = () => {
//   const options: ApexOptions = {
//     chart: {
//       id: "line-chart",
//       width: "100%",
//       height: "100%",
//     },
//     series: [
//       {
//         name: "Series 1",
//         data: [10, 20, 10, 30, 10, 20, 10],
//         color: "black",
//       },
//     ],
//     stroke: {
//       width: 2,
//       curve: "smooth", //stepline straight smooth
//     },
//     xaxis: {
//       categories: [1, 3, 5, 7, 9, 11],
//     },
//     yaxis: {
//       tickAmount: 7,
//       labels: {
//         formatter: function (_value: number, index) {
//           const customValues = ["10", "20", "40", "70", "90", "110", "125"];
//           if (index < customValues.length) {
//             return customValues[index];
//           } else {
//             return "";
//           }
//         },
//       },
//     },
//   };

//   const [first, setfirst] = useState("aaaaa");
//   const [seocnd, setSecond] = useState("aaaaa");
//   const [third, setThird] = useState("ccccesese");

//   const updateFUnction = useCallback(() => {
//     console.log("update function called");
//     setfirst("dshjdhjsdgh")
//   }, []);

//   // const updateFUnction = () => {
//   //   console.log("update function called");
//   //   setfirst("dshjdhjsdgh")
//   // };

//   return (
//     <div className="flex  flex-col justify-center items-center gap-4 w-full bg-red-400 p-5 h-screen">
//       <p
//         onClick={() => setfirst("aaaaaaaaaaaaa")}
//         className="flex bg-green-400 rounded p-4 cursor-pointer"
//       >
//         Button First
//       </p>
//       <p
//         onClick={() => setSecond("bbbbbbbbbbbbbbbbbbb")}
//         className="flex bg-yellow-400 rounded p-4 cursor-pointer"
//       >
//         Button Second
//       </p>
//       <p
//         onClick={() => setThird("ccccccccccccccccccc")}
//         className="flex bg-yellow-400 rounded p-4 cursor-pointer"
//       >
//         Third
//       </p>

//       <p>{third}</p>

//       <p
//         onClick={updateFUnction}
//         className="flex bg-green-400 rounded p-4 cursor-pointer"
//       >
//         function testing
//       </p>
//       <Child1 first={first}  updateFUnction={updateFUnction} />
//       <Child2 seocnd={seocnd}  updateFUnction={updateFUnction}/>
//     </div>
//   );
// };

// export default Product;
