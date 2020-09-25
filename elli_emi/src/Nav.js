import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";



class Nav extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto  nav-ul">
          <li className="nav-item" >
            <Link className="navbar-brand" to="/">Ellie and Emi</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bows">Bows </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/public">Public</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>

          {isAuthenticated() && (
            <li>
              <Link to="/private">Private</Link>
            </li>
          )}
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li>
        </ul>

      </nav>
    );
  }
}

export default Nav;
