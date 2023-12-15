import React, { Fragment } from "react";
import "./scss/app.scss";
import { Link } from "react-router-dom";

const BeautyProduct = () => {
  return (
    <Fragment>
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
        <div className="">
          <div className="header__container">
            <div className="header__hero">
              <div className="header__left header__content">
                <h1 className="header__heading">Clean Beauty Made Easy</h1>
                <p className="header__desc">
                  Discover the best deals on the largest platform for clean
                  beauty.
                </p>
                <div className="header__btn--outer">
                  <button className="header__btn">SHOP NOW</button>
                </div>
              </div>
              <div className="header__right header__content">
                <img
                  src="assets/images/projects/beauty-product/Image.png"
                  alt=""
                />
              </div>
            </div>
            <div className="header__brand">
              <ul className="header__menu">
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/planet.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/target.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/natura.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/animal.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/walmart.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/nuface.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/walgreem.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/skinmedica.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
                <li className="header__item">
                  <img
                    srcSet="assets/images/projects/beauty-product/brands/bedbat.png 2x"
                    alt=""
                    className="header_img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="product">
        <div className="container">
          <div className="product__container">
            <div className="product__header">
              <h2 className="product__heading">Shop Our New Beauty Products</h2>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BeautyProduct;
