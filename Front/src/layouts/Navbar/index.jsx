import React, { useContext, useState } from "react";
import "./style.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const { id } = useParams();
  let location = useLocation();
  const [sticky, setSticky] = useState(false);
  const { decode } = useContext(UserContext);

  function stickyNavbar() {
    if (window.scrollY >= 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <div
        className={`navbar ${
          sticky === true
            ? "sticky"
            : ""|| location.pathname === `/shopDetail/${id}`
            ? "navbarBcgColor"
            : "" || location.pathname === "/basket"
            ? "navbarBcgColor"
            : "" || location.pathname === "/wishlist"
            ? "navbarBcgColor"
            : "" || location.pathname === "/*"
            ? "navbarBcgColor"
            : "" || location.pathname === "/login"
            ? "navbarBcgColor"
            : "" || location.pathname === "/signUp"
            ? "navbarBcgColor"
            : "" || location.pathname === "/resetPassword"
            ? "navbarBcgColor"
            : "" || location.pathname === "/privacyPolicy"
            ? "navbarBcgColor"
            : ""
        }`}
      >
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
              <li className="pages">
                <p>
                  PAGES <i className="fa-sharp fa-light fa-chevron-down"></i>
                </p>
                <div className="menus">
                  <NavLink to={"/chef"}>Chef</NavLink>
                  <NavLink to={"/appointment"}>Appointment</NavLink>
                  <NavLink to={"/services"}>Services</NavLink>
                  <NavLink to={"/faq"}>FAQ</NavLink>
                  <NavLink to={"*"}>Page 404</NavLink>
                </div>
              </li>
              <li>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>MENU</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </li>
              {decode && decode.role === "admin" ? (
                <li>
                  <NavLink to={"/adminPanel"}>ADMIN PANEL</NavLink>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="icons">
            <i className="fa-light fa-magnifying-glass"></i>
            <NavLink to={"/wishlist"}>
              <i className="fa-light fa-heart"></i>
            </NavLink>
            {decode ? (
              <NavLink to={"/login"}>
                <i className="fa-solid fa-user"></i>
              </NavLink>
            ) : (
              <NavLink to={"/login"}>
                <i className="fa-light fa-user"></i>
              </NavLink>
            )}

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
