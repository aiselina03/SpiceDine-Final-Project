import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  function stickyNavbar() {
    if (window.scrollY >= 500) {
      setSticky(true);
    } 
    else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <div className={`navbar ${sticky === true ? "sticky" : ""}`}>
        <div className="header">
          <div className="message">
            <p>
              <i className="fa-light fa-gift"> </i> We are creative, ambitious
              and ready for challenges! Hire Us
            </p>
          </div>
          <div className="headerRight">
            <div className="number">
              <i className="fa-light fa-phone"></i>
              <a href="tel:+0011234567890"> (+001) 123-456-7890</a>
            </div>
            <div className="mail">
              <i className="fa-light fa-envelope"></i>
              <a href="mailto:Spicedine@templatetrip.com">
                Spicedine@templatetrip.com
              </a>
            </div>
            <div className="language">
              <select name="" id="">
                <option value="">English</option>
                <option value="">Azerbaijan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mainNavbar">
          <div className="logo">
            <NavLink to={"/"}>
              <img src="/src/images/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to={"/"}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li className="pages">
                PAGES <i className="fa-sharp fa-light fa-chevron-down"></i>
                <div className="menus">
                  <NavLink to={"./menu"}>Menu</NavLink>
                  <NavLink to={"./chef"}>Chef</NavLink>
                  <NavLink >Appointment</NavLink>
                </div>
              </li>
              <li>
                <NavLink to={"/shop"}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="icons">
            <i className="fa-light fa-magnifying-glass"></i>
            <NavLink to={"/wishlist"}>
              <i className="fa-light fa-heart"></i>
            </NavLink>
            <NavLink>
              <i className="fa-light fa-user"></i>
            </NavLink>
            <NavLink to={"/basket"}>
              <i className="fa-light fa-cart-shopping"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
