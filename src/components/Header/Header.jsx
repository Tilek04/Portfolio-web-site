import React from "react";
import logo from "../../assets/logo.png";
import style from "./Header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img className="container__img" src={logo} alt="" />
        </div>
        <div className="container__navbar">
          <span>
            <a href="#about">About me</a>
          </span>
          <span>
            <a href="#about">Projects</a>
          </span>
          <span>
            <a href="#about">Skills</a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
