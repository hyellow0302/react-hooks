import React, { useState, useRef } from "react";

export default function VarAndRef() {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("렌더링 되었습니다.");

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log("Var: ", countVar);
  };

  const doRendering = () => {
    setRender(render + 1);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={increaseCountRef}>Ref 카운트 증가</button>
      <button onClick={increaseCountVar}>Var 카운트 증가</button>
      <button onClick={doRendering}>렌더링</button>
    </div>
  );
}
