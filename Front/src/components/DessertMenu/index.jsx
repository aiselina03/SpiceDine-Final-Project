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
      {products.map((x) => (
          <h3>{x.name}</h3>
        ))}
      </div>
    </>
  );
}

export default DessertMenu;
