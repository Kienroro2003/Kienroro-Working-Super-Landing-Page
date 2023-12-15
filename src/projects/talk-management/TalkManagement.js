import React from "react";
import "./scss/app.scss";
import { Link } from "react-router-dom";

const TalkManagement = () => {
  return (
    <div className="wrapper">
      <header className="pt-10 pb-52">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div>
              <img
                srcSet="assets/images/projects/talk-management/logo.png 2x"
                alt=""
              />
            </div>
            <ul className="flex items-center">
              <li>
                <Link className="nav__link active">Home</Link>
              </li>
              <li>
                <Link className="nav__link">Products</Link>
              </li>
              <li>
                <Link className="nav__link">Guidlines</Link>
              </li>
              <li>
                <Link className="nav__link">Review</Link>
              </li>
            </ul>
            <div className="auth">
              <button className="sign-in">Sign In</button>
            </div>
          </nav>
          <div className="px-7">
            <h1 className="header__heading ">
              Make{" "}
              <span className="relative header__heading--highlight">
                Management
                <div className="absolute top-0 right-0 w-[10px] h-[9px] rounded-t-full rounded-br-full bg-[#EF8F00] translate-x-full -translate-y-full"></div>
                <div className="absolute bottom-0 right-0 w-[10px] h-[9px] rounded-b-full rounded-tr-full bg-[#0CCE84] translate-x-full translate-y-full"></div>
                <div className="absolute top-0 left-0 w-[10px] h-[9px] rounded-t-full rounded-bl-full bg-[#AE8FF9] -translate-x-full -translate-y-full"></div>
                <div className="absolute bottom-0 left-0 w-[10px] h-[9px] rounded-b-full rounded-tl-full bg-[#FF7667] -translate-x-full translate-y-full"></div>
              </span>{" "}
              Way More Easier Than Ever
            </h1>
            <p className="header__desc">
              The online collaborative management platform to bring more
              efficiency and performace
            </p>
            <div className="header__action">
              <button className="header__btn header__highlight">
                Request Demo
              </button>
              <button className="header__btn">Contact Us</button>
            </div>
            <div className="relative flex justify-center mt-28">
              <img
                srcSet="assets/images/projects/talk-management/Task_management_card.png 2x"
                alt=""
              />
              <img
                srcSet="assets/images/projects/talk-management/Card.png 2x"
                alt=""
                className="absolute bottom-0 left-0 translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TalkManagement;
