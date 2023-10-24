import React, { useCallback, useState } from "react";
import Box from "./Box";

export default function UseCallbackBox() {
  const [size, setSizes] = useState(100);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div>
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
