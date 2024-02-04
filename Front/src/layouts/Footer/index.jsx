import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="containerFooter">
          <div className="foot1">
            <div className="quick">
              <h2>QUICK LINKS</h2>
              <ul>
                <li>
                  <Link>Appointment</Link>
                </li>
                <li>
                  <Link>Prices</Link>
                </li>
                <li>
                  <Link>Team</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Faq</Link>
                </li>
              </ul>
            </div>
            <div className="borderContact">
              <div className="contactUs"></div>
              <div className="contacts">
                <h2>CONTACT US</h2>
                <p>7515 Carriage Court, Coachella, CA, 92236 USA</p>
                <a href="tel:+0011234567890"> (+001) 123-456-7890</a>
                <a href="mailto:Spicedine@templatetrip.com">
                  Spicedine@templatetrip.com
                </a>
                <h1>GET OUR EMAILS FOR INFO ON NEW ITEMS, SALES</h1>
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i className="fa-regular fa-paper-plane-top"></i>
                  </button>
                </form>
                <div className="brands">
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
            </div>
            <div className="services">
              <h2>SERVICES</h2>
              <ul>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Cart</Link>
                </li>
                <li>
                  <Link>Checkout</Link>
                </li>
                <li>
                  <Link>My account</Link>
                </li>
                <li>
                  <Link>Shop</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot2">
            <p>Copyright 2024, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
