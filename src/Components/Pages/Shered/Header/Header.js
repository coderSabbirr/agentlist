import React from "react";
import { Link } from "react-router-dom";
import help from "./../../../../../src/Image/help.png";
import logo from "./../../../../../src/Image/logo.png";
import room from "./../../../../../src/Image/rooms (1).png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header container">
      <div className="header-img">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navigation mt-4">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" aria-current="page">
              <img src={room} alt="" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cs">
              <img
                src={help}
                alt="কাস্টমার সার্ভিস"
                style={{ width: "27px", height: "26px" }}
              />
              কাস্টমার সার্ভিস
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              <img
                src={room}
                alt="এডমিন"
                style={{ width: "27px", height: "26px" }}
              />
              এডমিন
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/as">
              <img
                src={room}
                alt="সুপার এজেন্ট"
                style={{ width: "27px", height: "26px" }}
              />
              সুপার এজেন্ট
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mg">
              <img
                src={room}
                alt="অনলাইন মাষ্টার এজেন্ট"
                style={{ width: "27px", height: "26px" }}
              />
              অনলাইন মাষ্টার এজেন্ট
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
