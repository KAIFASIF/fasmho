const Dropdown = () => {
  const timeLabels: string[] = [
    "12 Hrs",
    "1 Day",
    "1 Week",
    "1 Month",
    "Till Now",
  ];
  return (
    <div className="w-full border-2 border-gray-200 rounded">
      <select onChange={(e)=>alert(e.target.value)}
        id="days" 
        className={` border-2 border-gray-600 text-gray-900 text-sm rounded-lg 
       block w-full p-2.5 
           dark:text-white
            focus:border-none focus:outline-none`}
      >
        <option defaultValue="1 Day" disabled>
          -Select-
        </option>
        {timeLabels &&
          timeLabels.length > 0 &&
          timeLabels.map((ele: string) => (
            <option value={ele} key={ele} className="sub-title my-2">
              {ele}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
// const Dropdown = () => {
//   return (
//     <div>
//       <button
//         id="dropdownDividerButton"
//         data-dropdown-toggle="dropdownDivider"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         Dropdown divider{" "}
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       <div
//         id="dropdownDivider"
//         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//       >
//         <ul
//           className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDividerButton"
//         >
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Earnings
//             </a>
//           </li>
//         </ul>
//         <div className="py-2">
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//           >
//             Separated link
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
