import React, { createContext } from "react";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../hook/useLocalStorage";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useLocalStorage(null);
  const [decode, setDecode] = useLocalStorage(null);


  function addToken(token) {
    setToken(token);
    console.log(token);
    const tokenDecoded = jwtDecode(token);
    console.log(tokenDecoded);
    setDecode(tokenDecoded);
  }

  function logOut() {
    setToken(null);
    setDecode(null);
  }

  const data = {
    token,
    decode,
    addToken,
    logOut,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;
