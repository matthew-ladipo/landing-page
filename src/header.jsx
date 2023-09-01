import React, { useState } from "react";
import { Component } from "react";
import { render } from "react-dom";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="head" id="home">
        <div className="nav">
          <section className="logo"> Adio-landing </section>
          <div class="hamburger" onClick={this.handleClick}>
            <i
              id="bars"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul
            id="nav-list"
            className={this.state.clicked ? "#nav-list active" : "#nav-list"}
          >
            <li className="nav-item">
              <a href="#" className="nav-link current">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;

/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <h3 class="navbar-brand text-primary">ADIO LANDIND</h3>
          <button type="button" class="navbar-toggler" data-bs-target="#navbar"><span class="navbar-toggler-icon"></span></button>
          <div class="navbar-nav ms-auto">
            <a class="nav-item nav-link me-3" href="#">Home</a>
            <a class="nav-item nav-link me-3" href="#">About</a>
            <a class="nav-item nav-link me-3" href="#">Blogs</a>
            <a class="nav-item nav-link me-3" href="#">Contact</a>
          </div>
        </div>
</nav> */
