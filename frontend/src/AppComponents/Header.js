import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="primaryContainer displayFlex">
          <div className="pageName">{this.props.siteName}</div>
          <div className="navMenus displayFlex" id="navItems">
            <ul className="displayFlex">
              <li><Link to="/" style={{ textDecoration: "none" }}><p>Home</p></Link></li>
              <li><Link to="/books" style={{ textDecoration: "none" }}><p>Books</p></Link></li>
              <li><Link to="/books" style={{ textDecoration: "none" }}><p>Newspaper</p></Link></li>
              <li><Link to="/about" style={{ textDecoration: "none" }}><p>About</p></Link></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24"
               viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
              fill="none" strokeLinecap="round" strokeLinejoin="round" id="closeNavBtn">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div id="menuBtn">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
               height="24" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
          <div className="loginCart">
            <Link to="/login"><svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24"
              strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg></Link>
            <Link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart"
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg></Link>
          </div>
        </div>
      </header>
    )
  }
}

