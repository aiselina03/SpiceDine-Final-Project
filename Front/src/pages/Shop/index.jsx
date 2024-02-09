import React, { useEffect, useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>SpiceDine - Shop</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="shopCards">
        {products.map((x) => (
          <div className="shopCard">
            <div className="image">
              <img src={x.image} alt="" />
              <div className="hover">
                <div className="cart-shopping">
                  <i className="fa-light fa-cart-shopping"></i>
                </div>
                <div className="heart">
                  <i className="fa-light fa-heart"></i>
                </div>
                <Link>
                  <div className="eye">
                    <i className="fa-light fa-eye"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text">
              <h3>{x.name}</h3>
              <p>${x.price}.00</p>
            </div>
          </div>
        ))}
      </div>
      <Mode />
      <Scroll />
      <Cursor/>
    </>
  );
}

export default Shop;
