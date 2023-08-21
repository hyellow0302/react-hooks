import React, { useContext } from "react";
import { CountContextStore } from "./Context";

const SecondPage = () => {
  const test = useContext(CountContextStore);

  return (
    <div>
      <h1>Second Page에서 count: {test.count}</h1>
    </div>
  );
};
export default SecondPage;
