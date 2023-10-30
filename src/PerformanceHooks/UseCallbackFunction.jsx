import { useState, useEffect, useCallback } from "react";

export default function UseCallbackFunction() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`now number = ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction 변경");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>print number</button>
    </div>
  );
}
