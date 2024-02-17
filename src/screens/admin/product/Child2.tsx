import React, { useState } from "react";

const Child2 = ({ seocnd, updateFUnction }: any) => {
  const [childOne, setchildOne] = useState("");
  console.log("child 2 rendered");
  return (
    <div>
      <button onClick={updateFUnction}>child 2 buton</button> <br />
      Child2 {seocnd}
    </div>
  );
};

export default React.memo(Child2);
