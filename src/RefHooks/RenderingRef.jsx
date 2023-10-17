import React, { useState, useRef } from "react";

export default function RenderingRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("렌더링 되었습니다.");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 카운트 증가</button>
      <button onClick={increaseCountRef}>Ref 카운트 증가</button>
    </div>
  );
}
