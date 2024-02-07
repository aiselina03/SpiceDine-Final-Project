import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

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
            <Link to={"/menu"}>
              <div className="btn">
                <p>VIEW ALL MENU</p>
                <div className="opacity"></div>
              </div>
            </Link>
          </div>
          <div className="menuView">
            <div className="view">
              <div className="category">
                <button>STARTERS</button>
                <button>MAIN</button>
                <button>DESSERT</button>
                <button>DRINKS</button>
              </div>
              <div className="menuList"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
