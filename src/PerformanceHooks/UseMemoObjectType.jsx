import React, { useEffect, useState, useMemo } from "react";

export default function ObjectTypeUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? "한국" : "외국";
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출됐습니당");
  }, [location]);

  return (
    <div>
      <h2>키가 몇이 십니까?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>현재 거주중인 나라는 한국입니까?</h2>
      <p>나라: {location}</p>
      <button onClick={() => setIsKorea(!isKorea)}>전환</button>
    </div>
  );
}

function Component() {
  const calculate = useCallback(
    (num) => {
      return num + 1;
    },
    [item]
  );
  return <div>{value}</div>;
}
