import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <div className="adminPanel">
        <h3><Link to={'/menuPanel'}>Menu Panel</Link></h3>
        <h3><Link to={'/userPanel'}>User Panel</Link></h3>
      </div>
    </>
  );
}

export default AdminPanel;
