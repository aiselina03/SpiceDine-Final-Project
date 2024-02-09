import React, { useEffect, useState } from "react";
import "./style.scss"

function MainMenu() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/menuByCategory/65c52aef1f52b89d90367188")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [])
    
  return (
    <>
      <div className="mainMenu">
      {products.map((x) => (
          <h3>{x.name}</h3>
        ))}
      </div>
    </>
  );
}

export default MainMenu;
