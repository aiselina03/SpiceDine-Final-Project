import React, { useEffect, useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import StartersMenu from "../../components/StartersMenu";
import MainMenu from "../../components/MainMenu";
import DessertMenu from "../../components/DessertMenu";
import DrinksMenu from "../../components/DrinksMenu";

function Menu() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Menu</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="menuPage">
        <StartersMenu/>
        <MainMenu/>
        <DessertMenu/>
        <DrinksMenu/>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Menu;
