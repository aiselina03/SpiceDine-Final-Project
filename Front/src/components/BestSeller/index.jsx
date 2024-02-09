import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(7, 11)));
  }, []);

  return (
    <>
      <div className="bestSeller">
        <div className="bestContainer">
          <div className="header">
            <img src="/src/images/sepreter.png" alt="" />
            <h2>BEST SPECIALTIES</h2>
            <p>
              As the leaves change and the air turns crisp, we invite you to
              celebrate the flavors of fall with our limited-time special.
            </p>
          </div>
          <div className="bestCards">
            {products.map((x) => (
              <div className="bestCard">
                <div className="image">
                  <img src={x.image} alt=""  />
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
          <Link to={"/shop"}>
            <div className="btn">
              <p>VIEW ALL PRODUCTS</p>
              <div className="opacity"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
