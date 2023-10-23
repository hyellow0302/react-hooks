import React, { useState } from "react";
import Timer from "./Timer";

export default function TimerCtrl() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        타이머 전원
      </button>
    </div>
  );
}
