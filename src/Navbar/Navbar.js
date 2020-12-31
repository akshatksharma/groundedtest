import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  let content = (
    <header>
      <nav id="header" className="headerbar bold">
        <NavLink
          to="/"
          className="headerbar__title bold"
          activeClassName="selected headerbar__title bold"
        >
          GROUNDED
        </NavLink>
        <div className="headerbar__group">
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
          <button
            onClick={() => props.setHidden()}
            className="headerbar__important"
            aria-label="Important note"
          >
            !
          </button>
        </div>
      </nav>
    </header>
  );

  return content;
};

export default React.memo(Navbar);
