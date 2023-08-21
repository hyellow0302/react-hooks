import React, { useContext } from "react";
import { CountContextStore } from "./Context";

const FirstPage = () => {
  /* useContext(저장소이름)을 통해 저장소 데이터에 접근할 수 있다. */
  const test = useContext(CountContextStore);

  /* 저장소에있는 setCount를 사용하여 test.count를 증가시킨다. */
  const handleAdd = () => {
    test.setCount(test.count + 1);
  };

  /* 저장소에있는 setCount를 사용하여 test.count를 감소시킨다. */
  const handleDel = () => {
    test.setCount(test.count - 1);
  };

  return (
    <div>
      <h1>First Page에서 count: {test.count}</h1>
      <button type="submit" onClick={handleAdd}>
        증가
      </button>
      <button type="submit" onClick={handleDel}>
        감소
      </button>
    </div>
  );
};
export default FirstPage;
