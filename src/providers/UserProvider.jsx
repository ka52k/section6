import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  // const contextName = "けいいち";
  return (
    // <UserContext.Provider value={{ contextName }}>
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      { children }
    </UserContext.Provider>
  );
};
