import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState();

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleTextUpdate = (e) => {
    setText(e.target.value);
  };

  /* 1번: 두번째 인자가 없을 경우 */
  useEffect(() => {
    console.log("렌더링 되었습니다.");
  });

  /* 2번: 두번째 인자가 있지만 빈 배열일 경우 */
  useEffect(() => {
    console.log("첫 렌더링 되었습니다.");
  }, []);

  /* 3번: 두번째 인자가 있고 빈 배열이 아닌 경우 */
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  /* 3번: 두번째 인자가 있고 빈 배열이 아닌 경우 */
  useEffect(() => {
    console.log("text 변화");
  }, [text]);

  return (
    <div>
      <button onClick={handleCountUpdate}>증가</button>
      <input type="text" value={text} onChange={handleTextUpdate} />
      <span>text: {text}</span>
    </div>
  );
}
