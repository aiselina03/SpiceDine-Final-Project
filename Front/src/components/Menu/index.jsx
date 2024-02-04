import React from "react";
import "./style.scss";

function Menu() {
  return (
    <>
      <div className="ourMenu">
        <div className="containerMenu">
          <div className="menuText">
            <img src="/src/images/menu-1.png" alt="" />
            <span>The taste makes it special</span>
            <h2>DELICIOUS & TASTY MENU</h2>
            <p className="text">
              Whether you’re an adventurous food enthusiast or seeking comfort
              in familiar classics, our menu offers a diverse selection to cater
              to every palate.
            </p>
            <div className="btn">
              <p>VIEW ALL MENU</p>
              <div className="opacity"></div>
            </div>
          </div>
          <div className="menuView">
            <div className="view"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
