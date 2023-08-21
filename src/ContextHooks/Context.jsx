/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useMemo } from "react";

export const CountContextStore = createContext();

const CountContext = (props) => {
  const [count, setCount] = useState(0);

  // const UserInfo = { count, setCount };
  const value = useMemo(() => ({ count, setCount }), [count, setCount]);

  /**
   * UserInfoContextStore.Provider : Provider는 구독(하위 Component)하고 있는 자식 Component에게 정보를 보내준다는 설정
   * value={UserInfo} : 자식 Component에게 값을 전달하기 위한 설정
   * {props.children} : 자식 Component를 랜더링 하기위해 설정
   */
  return (
    <CountContextStore.Provider value={value}>
      {props.children}
    </CountContextStore.Provider>
  );
};

export default CountContext;
