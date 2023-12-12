import React from "react";
import { Link } from "react-router-dom";
import "./sass/app.scss";

const LaslesMaster = () => {
  return (
    <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header-container">
            <img
              srcset="assets/images/projects/lasles-master/images/logo.png 2x"
              alt=""
              class="header-logo"
            />
            <ul class="menu">
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  About
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Features
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Pricing
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Testimonials
                </Link>
              </li>
              <li class="menu-item">
                <Link href="#" class="menu-link">
                  Help
                </Link>
              </li>
            </ul>
            <div class="header-auth">
              <Link href="#" class="header-signin">
                Signin
              </Link>
              <Link href="./the-next.html" class="header-signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-container">
              <div class="hero-content">
                <h1 class="hero-heading">
                  Want anything to be easy with
                  <strong>LaslesVPN.</strong>
                </h1>
                <p class="hero-desc">
                  Provide a network for all your needs with ease and fun using
                  <strong>LaslesVPN</strong> discover interesting features from
                  us.
                </p>
                <Link href="#" class="button button-primary">
                  Get Started
                </Link>
              </div>
              <div class="hero-image">
                <img
                  srcset="assets/images/projects/lasles-master/images/hero-image.png 2x"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section class="intro">
          <div class="container">
            <div class="intro-container">
              <div class="intro-item">
                <div class="intro-icon">
                  <img
                    srcset="assets/images/projects/lasles-master/images/Icon/user.png 2x"
                    alt="user"
                  />
                </div>
                <div class="intro-info">
                  <h3 class="intro-title">90+</h3>
                  <p class="intro-name">Users</p>
                </div>
              </div>
              <div class="intro-item">
                <div class="intro-icon">
                  <img
                    srcset="assets/images/projects/lasles-master/images/Icon/location.png 2x"
                    alt="user"
                  />
                </div>
                <div class="intro-info">
                  <h3 class="intro-title">30+</h3>
                  <p class="intro-name">Locations</p>
                </div>
              </div>
              <div class="intro-item">
                <div class="intro-icon">
                  <img
                    srcset="assets/images/projects/lasles-master/images/Icon/Server.png 2x"
                    alt="user"
                  />
                </div>
                <div class="intro-info">
                  <h3 class="intro-title">50+</h3>
                  <p class="intro-name">Servers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="fuature">
          <div class="container">
            <div class="fuature-container">
              <div class="fuature-image">
                <img
                  src="assets/images/projects/lasles-master/images/Illustration 2.png"
                  alt=""
                />
              </div>
              <div class="fuature-content">
                <h2 class="fuature-heading">
                  We Provide Many Features You Can Use
                </h2>
                <p class="fuature-desc">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
                <ul class="fuature-list">
                  <li class="fuature-item">Powerfull online protection.</li>
                  <li class="fuature-item">Internet without borders.</li>
                  <li class="fuature-item">Supercharged VPN</li>
                  <li class="fuature-item">No specific time limits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LaslesMaster;
