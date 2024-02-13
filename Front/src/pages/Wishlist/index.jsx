import React, { useContext } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>SpiceDine - Wishlist</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="account">
        <p>
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          Wishlist
        </p>
      </div>
      <div className="wishlistPage">
        <div className="wishlist">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((x) => (
                  <tr key={x._id}>
                    <td>
                      <i
                        class="fa-sharp fa-regular fa-xmark"
                        onClick={() => addRemoveWishlist(x)}
                      ></i>
                    </td>
                    <td>
                      <img src={x.image} alt="" />
                    </td>
                    <td>
                      <h2 className="name">{x.name}</h2>
                      {x.ingredient}
                    </td>
                    <td>${x.price}.00</td>
                    <td>
                      <p>In Stock</p>
                    </td>
                    <td>
                      <button onClick={() => addBasket(x)}>Add to cart</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Wishlist;
