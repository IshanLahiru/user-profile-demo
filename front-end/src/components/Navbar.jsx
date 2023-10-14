import React, { useState } from "react";
import Logo from "../assets/imgs/logo-icon.png";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to open the navigation bar
  const openNav = () => {
    setIsNavOpen(true);
  };

  // Function to close the navigation bar
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <button id="backButton" className="nav-button">
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="logo">
            <span className="rate">Rate</span>
            <span className="my-meal">MyMeal</span>
            <img src={Logo} alt="RateMyMeal Logo" className="logo-image" />
          </div>

          <div className="nav-content">
            <div className="search-bar-container">
              <input type="text" className="search-bar" placeholder="Search" />
              <span className="search-icon" id="dropdownToggle">
                <i className="fas fa-arrow-down"></i>
              </span>
              <div className="dropdown-content" id="dropdownContent">
                <a href="#">University at Buffalo</a>
              </div>
            </div>
            <button
              id="hamburgerButton"
              className="nav-button"
              onClick={openNav}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            id="sidebar"
            className="sidebar"
            style={{
              right: isNavOpen ? "0" : "-250px",
              // Add other inline styles as needed
            }}
          >
            <button
              id="closeSidebarButton"
              className="close-button"
              onClick={closeNav}
            >
              <i className="fas fa-times"></i>
            </button>
            <ul>
              {/* New code */}
              <li>
                <a href="/">
                  <button className="sidebar-button">Home</button>
                </a>
              </li>
              <li>
                <a href="view">
                  <button className="sidebar-button">View Profile</button>
                </a>
              </li>
              <li>
                <a href="edit">
                  <button className="sidebar-button">Edit Profile</button>
                </a>
              </li>
              {/* Last Code */}

              <li>
                <a href="login">
                  <button className="sidebar-button">Login</button>
                </a>
              </li>
              <li>
                <a href="sign">
                  <button className="sidebar-button">Sign Up</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="sidebar-button">About Us</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="sidebar-button">Contact Us</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
