import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";

function AdminPanel() {
  return (
    <>
      <div className="account">
        <p>
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          Admin Panel
        </p>
      </div>
      <div className="adminPanel">
        <h3>
          <Link to={"/menuPanel"}>Menu Panel</Link>
        </h3>
        <h3>
          <Link to={"/userPanel"}>User Panel</Link>
        </h3>
      </div>
      
      <Mode />
      <Cursor />
    </>
  );
}

export default AdminPanel;
