import React from "react";
import "./style.scss";

function HomeChef() {
  return (
    <>
      <div className="homeChef">
        <div className="chefContainer">
          <div className="header">
            <img src="/src/images/sepreter.png" alt="" />
            <h2>MEET OUR CHEF</h2>
            <p>
              we take immense pride in the passionate and talented individuals
              who work tirelessly <br />
              behind the scenes to create exceptional dining experiences for our
              guests.
            </p>
          </div>
          <div className="chefs">
            <div className="chef">
              <div className="chefImage">
                <img src="/src/images/chef01.jpg" alt="" />
                <div className="brandsHover">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <p>-Head Waiter-</p>
              <h2>Michael Chang</h2>
            </div>
            <div className="chef">
              <div className="chefImage">
                <img src="/src/images/chef02.jpg" alt="" />
                <div className="brandsHover">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <p>-Restaurant Manager-</p>
              <h2>Emily Johnson</h2>
            </div>
            <div className="chef">
              <div className="chefImage">
                <img src="/src/images/chef03.jpg" alt="" />
                <div className="brandsHover">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <p>-Head Chef-</p>
              <h2>John Anderson</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeChef;
