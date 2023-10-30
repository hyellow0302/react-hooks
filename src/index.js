// /* ContextHooks */
// import React from "react";
// import ReactDOM from "react-dom";
// import CountContext from "./ContextHooks/Context";
// import FirstPage from "./ContextHooks/FirstPage";
// import SecondPage from "./ContextHooks/SecondPage";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* CountContext가 FirstPage, SecondPage Component를 감싸준다. */}
//     <CountContext>
//       {/* count를 증가, 감소시킬 컴포넌트 */}
//       <FirstPage />
//       {/* count의 현재상태를 출력할 컴포넌트 */}
//       <SecondPage />
//     </CountContext>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//
// /* RefHooks */
// import React from "react";
// import ReactDOM from "react-dom";
// import DOMRef from "./RefHooks/DOMRef";
// // import DOMRef from "./RefHooks/DOMRef";
// // import StateAndRef from "./RefHooks/StateAndRef";
// //import VarAndRef from "./RefHooks/VarAndRef";

// ReactDOM.render(
//   <React.StrictMode>
//     <DOMRef />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//
// /* Effect Hooks */
// import React from "react";
// import ReactDOM from "react-dom";
// import TimerCtrl from "./EffectHooks/TimerCtrl";
// //import UseEffectEX from "./EffectHooks/UesEffectEX";

// ReactDOM.render(
//   <React.StrictMode>
//     <TimerCtrl />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//
// /* Performance Hooks - useMemo */
// import React from "react";
// import ReactDOM from "react-dom";
// import UseMemoCalculate from "./PerformanceHooks/UseMemoCalculate";

// ReactDOM.render(
//   <React.StrictMode>
//     <UseMemoCalculate />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//
// /* Performance Hooks - useCallback */
import React from "react";
import ReactDOM from "react-dom";
import UseCallbackBox from "./PerformanceHooks/UseCallbackBox";

ReactDOM.render(
  <React.StrictMode>
    <UseCallbackBox />
  </React.StrictMode>,
  document.getElementById("root")
);
