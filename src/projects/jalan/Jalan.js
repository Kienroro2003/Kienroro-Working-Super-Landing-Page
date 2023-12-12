import React from "react";
import "./scss/app.scss";
import { Link } from "react-router-dom";

const Jalan = () => {
  return (
    <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header-top">
            <Link href="index.html" class="header-logo">
              <img src="assets/images/projects/jalan/images/logo.png" alt="" />
            </Link>
            <ion-icon name="apps" class="header-toggle"></ion-icon>
            <ul class="menu">
              <ion-icon name="close-circle" class="menu-close"></ion-icon>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Promotion
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Gallery
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  About Us
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="layout header-content">
            <div class="header-info">
              <h1 class="header-heading">Let's make your best trip ever!</h1>
              <div class="search">
                <input
                  type="text"
                  class="search-input"
                  placeholder="Hi! search for your destination here...."
                />
                <div class="search-bottom">
                  <div class="search-hashtags">
                    <span>#mountain</span>
                    <span>#climbing</span>
                    <span>#walking</span>
                    <span>#fly</span>
                    <span>#running</span>
                    <span>#mountain</span>
                    <span>#climbing</span>
                    <span>#running</span>
                  </div>
                  <button class="search-button">
                    <ion-icon name="search"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
            <div class="header-media">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80"
                alt=""
                class="header-image"
              />
              <div class="play">
                <ion-icon name="play"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="destination">
          <div class="container">
            <div class="layout destination-container">
              <div class="destination-list">
                <div class="destination-item">
                  <div class="destination-image">
                    <img
                      src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80"
                      alt=""
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="destination-title">Mattis, Elementum</h3>
                    <h4 class="destination-place text text--small">
                      17 place to visit
                    </h4>
                  </div>
                </div>
                <div class="destination-item">
                  <div class="destination-image">
                    <img
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="destination-title">Vitae, Sagittis</h3>
                    <h4 class="destination-place text text--small">
                      23 place to visit
                    </h4>
                  </div>
                </div>
                <div class="destination-item">
                  <div class="destination-image">
                    <img
                      src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
                      alt=""
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="destination-title">Pellentesque, Vivamus</h3>
                    <h4 class="destination-place text text--small">
                      13 place to visit
                    </h4>
                  </div>
                </div>
                <div class="destination-item">
                  <div class="destination-image">
                    <img
                      src="https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1428&q=80"
                      alt=""
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="destination-title">Commodo, Lectus</h3>
                    <h4 class="destination-place text text--small">
                      31 place to visit
                    </h4>
                  </div>
                </div>
              </div>
              <div class="destination-info">
                <h2 class="heading destination-heading">Popular destination</h2>
                <p class="text destination-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis recusandae eos temporibus quis quo est totam
                  suscipit.
                </p>
                <Link href="#" class="btn btn--primary">
                  More destination
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section class="offer">
          <div class="container">
            <div class="offer-header">
              <h2 class="heading">Special offer</h2>
              <p class="offer-text text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae tempora esse voluptate nihil laborum culpa
              </p>
            </div>
          </div>
          <div class="offer-list">
            <div class="offer-item">
              <div class="offer-image">
                <img
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
                  alt=""
                />
              </div>
              <div class="offer-content">
                <div class="offer-top">
                  <div class="offer-tour text--secondary">team tour</div>
                  <div class="offer-price text--primary">
                    <strong>$445</strong>
                    <span>/person</span>
                  </div>
                </div>
                <h3 class="offer-title">Freedom after adventurers roam</h3>
                <div class="offer-bottom">
                  <div class="offer-location">
                    <ion-icon name="location"></ion-icon>
                    <span>Magna</span>
                  </div>
                  <div class="offer-rating text--secondary">
                    <ion-icon name="star"></ion-icon>
                    <span>4.3</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="offer-item">
              <div class="offer-image">
                <img
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
                  alt=""
                />
              </div>
              <div class="offer-content">
                <div class="offer-top">
                  <div class="offer-tour text--secondary">team tour</div>
                  <div class="offer-price text--primary">
                    <strong>$445</strong>
                    <span>/person</span>
                  </div>
                </div>
                <h3 class="offer-title">Freedom after adventurers roam</h3>
                <div class="offer-bottom">
                  <div class="offer-location">
                    <ion-icon name="location"></ion-icon>
                    <span>Magna</span>
                  </div>
                  <div class="offer-rating text--secondary">
                    <ion-icon name="star"></ion-icon>
                    <span>4.3</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="offer-item">
              <div class="offer-image">
                <img
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
                  alt=""
                />
              </div>
              <div class="offer-content">
                <div class="offer-top">
                  <div class="offer-tour text--secondary">team tour</div>
                  <div class="offer-price text--primary">
                    <strong>$445</strong>
                    <span>/person</span>
                  </div>
                </div>
                <h3 class="offer-title">Freedom after adventurers roam</h3>
                <div class="offer-bottom">
                  <div class="offer-location">
                    <ion-icon name="location"></ion-icon>
                    <span>Magna</span>
                  </div>
                  <div class="offer-rating text--secondary">
                    <ion-icon name="star"></ion-icon>
                    <span>4.3</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="offer-item">
              <div class="offer-image">
                <img
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
                  alt=""
                />
              </div>
              <div class="offer-content">
                <div class="offer-top">
                  <div class="offer-tour text--secondary">team tour</div>
                  <div class="offer-price text--primary">
                    <strong>$445</strong>
                    <span>/person</span>
                  </div>
                </div>
                <h3 class="offer-title">Freedom after adventurers roam</h3>
                <div class="offer-bottom">
                  <div class="offer-location">
                    <ion-icon name="location"></ion-icon>
                    <span>Magna</span>
                  </div>
                  <div class="offer-rating text--secondary">
                    <ion-icon name="star"></ion-icon>
                    <span>4.3</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="offer-item">
              <div class="offer-image">
                <img
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
                  alt=""
                />
              </div>
              <div class="offer-content">
                <div class="offer-top">
                  <div class="offer-tour text--secondary">team tour</div>
                  <div class="offer-price text--primary">
                    <strong>$445</strong>
                    <span>/person</span>
                  </div>
                </div>
                <h3 class="offer-title">Freedom after adventurers roam</h3>
                <div class="offer-bottom">
                  <div class="offer-location">
                    <ion-icon name="location"></ion-icon>
                    <span>Magna</span>
                  </div>
                  <div class="offer-rating text--secondary">
                    <ion-icon name="star"></ion-icon>
                    <span>4.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="blog">
          <div class="container">
            <div class="blog-container">
              <h2 class="heading blog-heading">From the Blog</h2>
              <div class="layout blog-main">
                <div>
                  <Link href="#" class="blog-image">
                    <img
                      src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
                      alt=""
                    />
                    <div class="play">
                      <ion-icon name="play"></ion-icon>
                    </div>
                  </Link>
                  <h3>
                    <Link href="#" class="blog-title">
                      Story of water world adventurers
                    </Link>
                  </h3>
                  <p class="blog-desc text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam eaque ratione numquam aspernatur
                    <Link href="#" class="text--secondary underline">
                      visit more
                    </Link>
                  </p>
                  <div class="blog-by">
                    <span>by:</span>
                    <Link href="#" class="blog-author">
                      Evondev
                    </Link>
                  </div>
                </div>
                <div class="blog-list">
                  <div class="blog-item">
                    <div class="blog-item-content">
                      <h4>
                        <Link href="#" class="blog-item-title">
                          Aliquam eleifend mi in nulla posure aliquam.
                        </Link>
                      </h4>
                      <h5 class="blog-item-author">@asyifanada</h5>
                    </div>
                    <Link href="#" class="blog-item-image">
                      <img
                        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="blog-item">
                    <div class="blog-item-content">
                      <h4>
                        <Link href="" class="blog-item-title">
                          Aliquam eleifend mi in nulla posure aliquam.
                        </Link>
                      </h4>
                      <h5 class="blog-item-author">@evondev</h5>
                    </div>
                    <Link href="#" class="blog-item-image">
                      <img
                        src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="blog-item">
                    <div class="blog-item-content">
                      <h4>
                        <Link href="" class="blog-item-title">
                          Aliquam eleifend mi in nulla posure aliquam.
                        </Link>
                      </h4>
                      <h5 class="blog-item-author">@evondev</h5>
                    </div>
                    <Link href="#" class="blog-item-image">
                      <img
                        src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="blog-item">
                    <div class="blog-item-content">
                      <h4>
                        <Link href="" class="blog-item-title">
                          Aliquam eleifend mi in nulla posure aliquam.
                        </Link>
                      </h4>
                      <h5 class="blog-item-author">@evondev</h5>
                    </div>
                    <Link href="#" class="blog-item-image">
                      <img
                        src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="book">
          <div class="container book-container">
            <h2 class="heading book-heading">Book your tour dates now</h2>
            <div class="book-form">
              <div class="book-destination">
                <input
                  type="text"
                  class="book-input"
                  placeholder="Destination"
                />
                <ion-icon name="location"></ion-icon>
              </div>
              <div class="book-calendar">
                <div class="dropdown">
                  <div class="dropdown-select">
                    <span class="dropdown-value">Schedule</span>
                    <ion-icon name="chevron-down"></ion-icon>
                  </div>
                  <div class="dropdown-list">
                    <div class="dropdown-item">10AM</div>
                    <div class="dropdown-item">14PM</div>
                    <div class="dropdown-item">18PM</div>
                  </div>
                </div>
              </div>
              <button class="btn btn--primary book-button">
                <ion-icon name="search"></ion-icon>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer-header">
            <h2 class="heading footer-heading">
              Start growing with digital now
            </h2>
            <Link href="#" class="btn btn--primary">
              Get Destination
            </Link>
          </div>
          <div class="footer-bottom">
            <div>
              <p class="footer-desc text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae, accusantium repellendus!
              </p>
              <div class="footer-social">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
            <div class="footer-columns">
              <div class="footer-column">
                <h3 class="footer-title">COMPANY</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Appraise
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Careers
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Blog
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Mortgage
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      How does it work?
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h3 class="footer-title">About Us</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Who we are?
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Jobs
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Terms &amp; Services
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h3 class="footer-title">Contact</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      +00123456789
                    </Link>
                  </li>
                  <li class="footer-item">
                    <Link href="#" class="footer-link">
                      hel@readadvisor.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Jalan;
