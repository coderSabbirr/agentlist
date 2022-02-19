import React from "react";
import { Link } from "react-router-dom";
import help from "./../../../../../src/Image/help.png";
import logo from "./../../../../../src/Image/logo.jpg";
import room from "./../../../../../src/Image/rooms (1).png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-dev">
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
                <img src={help} alt="কাস্টমার সার্ভিস" />
                কাস্টমার সার্ভিস
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <img src={room} alt="এডমিন" />
                এডমিন
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/subadmin">
                <img src={room} alt="সাব এডমিন" />
                সাব এডমিন
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/as">
                <img src={room} alt="সুপার এজেন্ট" />
                সুপার এজেন্ট
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mg">
                <img src={room} alt="অনলাইন মাষ্টার এজেন্ট" />
                অনলাইন মাষ্টার এজেন্ট
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
