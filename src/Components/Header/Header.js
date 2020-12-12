import React from "react";
import "./header.css";
import logo from "../../img/logo-white.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">OUTDOORS</span>
          <span className="heading-primary-sub">IS WHERE LIFE HAPPENS</span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}

export default Header;
