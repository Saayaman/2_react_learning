import React, { Component, Fragment } from 'react'
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {

  handleClick = () => {
    console.log("Clicked!!");
  }
    
  render() {

    return (
      <div className="Header">
        <div className="Header-inner">
          <div className="Header-logo">Ayako Sayama</div>
          <Media query="(min-width: 540px)">
            {(matches) => (
              matches ? (
                <div className="Header-nav">
                 <Nav />
                </div>
              ) : (
                <div className="Header-dropdown">
                  <button onClick={this.handleClick}>
                    <img
                      width={20}
                      alt="Menu Icon"
                      src={require("./../../assets/icons/menuIcon.svg")}
                    />
                  </button>
                  <div className="Header-dropdown-menu">
                    <Nav />
                  </div>
                </div>
              )
            )}
          </Media>
        </div>
      </div>
    )
  }
}


function Nav() {
  return(
    <Fragment>
      <NavLink
        exact
        to="/"
        className="Header-nav-item"
        activeClassName="Header-nav-item--active"
      >
        My Works
      </NavLink>
      <NavLink
        to="/about"
        className="Header-nav-item"
        activeClassName="Header-nav-item--active"
      >
        About Me
      </NavLink>
      <NavLink
        to="/contact"
        className="Header-nav-item"
        activeClassName="Header-nav-item--active"
      >
        Contact
      </NavLink>
    </Fragment>
  )
}