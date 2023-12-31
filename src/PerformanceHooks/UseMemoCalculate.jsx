import React, { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산기 작동합니다.");
  for (let i = 0; i < 999999999999; i++) {}
  return number + 100000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 계산!");
  return number + 1;
};

export default function UseMemoCalculate() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  // const hardSum = useMemo(() => {
  //   hardCalculate(hardNumber);
  // }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 100000 = {hardSum} </span>

      <h3>쉬운계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum} </span>
    </div>
  );
}
