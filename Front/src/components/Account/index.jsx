import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./style.scss"

function Account() {
  const { logOut } = useContext(UserContext);
  return (
    <div>
      <h2>hello user</h2>
      <p onClick={logOut}>log out</p>
    </div>
  );
}

export default Account;
