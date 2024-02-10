import React, { useEffect, useState } from "react";
import "./style.scss"

function DessertMenu() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/menuByCategory/65c52b161f52b89d9036718d")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [])

  return (
    <>
      <div className="dessertMenu">
      <div className="dMenu"> 
       <div className="menuPhoto">
            <h2>CHERRY PIE</h2>
            <p>
              Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes
            </p>
            <h3>$15</h3>
          </div>
          <div className="menuDessert">
            <div className="headers">
              <p>Sweet</p>
              <h1>DESSERT</h1>
            </div>
            {products.map((x) => (
              <div className="dessert">
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

export default DessertMenu;
