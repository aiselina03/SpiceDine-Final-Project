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
        {products.map((x) => (
          <h3>{x.name}</h3>
        ))}
      </div>
    </>
  );
}

export default StartersMenu;
