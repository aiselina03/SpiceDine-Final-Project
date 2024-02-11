import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function ShopCards() {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState("");
  const { addbasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productsPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastProducts = currentPage * productsPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  useEffect(() => {
    fetch("http://localhost:3000/menuWithCategory/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  function handleFilter(categoryName) {
    setFilterData(categoryName);
  }

  return (
    <>
      <div className="cardsPages">
        <div className="cardsPage">
          <div className="shopFilter">
            <div className="filterCategories">
              <div className="head">
                <h2>CATEGORIES</h2>
              </div>
              <div className="filter">
                <button onClick={() => handleFilter("")}>All Menu</button>
                <button onClick={() => handleFilter("starters")}>
                  Starters
                </button>
                <button onClick={() => handleFilter("main")}>Main</button>
                <button onClick={() => handleFilter("dessert")}>Dessert</button>
                <button onClick={() => handleFilter("drinks")}> Drinks</button>
              </div>
            </div>
          </div>
          <div className="shop">
            {isLoading ? (
              <div className="loaderCenterCards">
                <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
              <div className="shopCards">
                {currentProducts
                  .filter((x) => x.categoryId.categoryName.includes(filterData))
                  .map((x) => (
                    <div className="shopCard" key={x._id}>
                      <div className="image">
                        <img src={x.image} alt="" />
                        <div className="hover">
                          <div
                            className="cart-shopping"
                            onClick={() => addbasket(x)}
                          >
                            <i className="fa-light fa-cart-shopping"></i>
                          </div>
                          <div
                            className="heart"
                            onClick={() => addRemoveWishlist(x)}
                          >
                            <i
                              className={`${
                                checkIsWishlist(x)
                                  ? "fa-sharp fa-solid fa-heart"
                                  : "fa-sharp fa-light fa-heart"
                              }`}
                            ></i>
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
            )}
            <div className="pagination">
              <div className="container">
                {Array.from(
                  { length: Math.ceil(products.length / productsPage) },
                  (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCards;
