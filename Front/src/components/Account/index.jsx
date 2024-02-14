import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./style.scss"

function Account() {
  const { logOut } = useContext(UserContext);
  return (
    <div>
      
      <h2>hello user</h2>
      <p onClick={logOut}>log out</p>
      <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
    </div>
  );
}

export default Account;
