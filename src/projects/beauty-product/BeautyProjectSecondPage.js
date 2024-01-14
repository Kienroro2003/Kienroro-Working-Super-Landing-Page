import React from "react";
import "./css/BeautyProjectSecondPage.css";
import "./scss/app.scss";
import { Link } from "react-router-dom";

const BeautyProjectSecondPage = () => {
  return (
    <div>
      {/* Duy */}
      <header className="header">
        <div className="header__navbar">
          <nav className="navbar">
            <ul className="navbar__menu">
              <li className="navbar__item">
                <Link className="navbar__link">Home</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link">Brand</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link">Shop</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link">About</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link">Community</Link>
              </li>
            </ul>
            <Link>
              <img
                src="assets/images/projects/beauty-product/logo.svg"
                alt=""
              />
            </Link>
            <form action="" className="header__form">
              <div className="header__group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="header__input"
                />
                <img
                  src="assets/images/projects/beauty-product/icon/search.svg"
                  alt=""
                  className="header__search"
                />
              </div>
              <button className="p-6 border-l border-[#141313]">
                <img
                  src="assets/images/projects/beauty-product/icon/card.svg"
                  alt=""
                />
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="shop_all_B">
        <div className="title">
          <h3>Shop all Featured brands </h3>
        </div>
        {/* start code list item */}
        <div className="list_brand">
          {/* item  1 */}
          <div className="item_brand">
            <div className="images">
              <img
                src="assets/images/projects/beauty-product/logo-second-page/Logo1.png"
                alt=""
              />
            </div>

            <div className="name">
              <p>For the planet</p>
            </div>
          </div>
          {/* item  2*/}
          <div className="item_brand">
            <div className="images">
              <img
                src="assets/images/projects/beauty-product/logo-second-page/Logo2.png"
                alt=""
              />
            </div>

            <div className="name">
              <p>Target</p>
            </div>
          </div>
          {/* item 3 */}
          <div className="item_brand">
            <div className="images">
              <img
                src="assets/images/projects/beauty-product/logo-second-page/Logo3.png"
                alt=""
              />
            </div>

            <div className="name">
              <p>NaturaBisse Barcelona</p>
            </div>
          </div>
          {/* item 4 */}
          <div className="item_brand">
            <div className="images">
              <img
                src="assets/images/projects/beauty-product/logo-second-page/Logo4.png"
                alt=""
              />
            </div>

            <div className="name">
              <p>Walmart</p>
            </div>
          </div>
        </div>
        {/* end code list item */}
      </div>
    </div>
  );
};

export default BeautyProjectSecondPage;
