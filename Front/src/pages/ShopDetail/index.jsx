import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { useParams } from "react-router-dom";

function ShopDetail() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>SpiceDine - Shop Detail</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="detailPage">

      </div>
    </>
  );
}

export default ShopDetail;
