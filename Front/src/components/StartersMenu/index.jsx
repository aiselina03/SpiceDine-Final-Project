import React, { useEffect, useState } from "react";
import "./style.scss";

function StartersMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menuByCategory/65c529681f52b89d9036716b")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="startersMenu">
        <div className="sMenu">
          <div className="menuPhoto">
            <h2>ASPARAGUS & HALLOUMI SALAD</h2>
            <p>
            Smoked streaky bacon / Frozen peas / Fresh chervil
            </p>
            <h3>$14</h3>
          </div>
          <div className="menuStarters">
            <div className="headers">
              <p>Tasty</p>
              <h1>STARTERS</h1>
            </div>
            {products.map((x) => (
              <div className="starters">
                <div className="head">
                  <h2>{x.name}</h2>
                  <p>{x.ingredient}</p>
                </div>
                <div className="price">
                  <p>${x.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartersMenu;
