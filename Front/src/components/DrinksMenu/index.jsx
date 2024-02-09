import React, { useEffect, useState } from "react";
import "./style.scss"

function DrinksMenu() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/menuByCategory/65c52b361f52b89d90367191")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [])

  return (
    <>
      <div className="drinksMenu">
      {products.map((x) => (
          <h3>{x.name}</h3>
        ))}
      </div>
    </>
  );
}

export default DrinksMenu;
