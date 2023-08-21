import React from "react";
import ReactDOM from "react-dom";
import CountContext from "./ContextHooks/Context";
import FirstPage from "./ContextHooks/FirstPage";
import SecondPage from "./ContextHooks/SecondPage";

ReactDOM.render(
  <React.StrictMode>
    {/* CountContext가 FirstPage, SecondPage Component를 감싸준다. */}
    <CountContext>
      {/* count를 증가, 감소시킬 컴포넌트 */}
      <FirstPage />
      {/* count의 현재상태를 출력할 컴포넌트 */}
      <SecondPage />
    </CountContext>
  </React.StrictMode>,
  document.getElementById("root")
);
