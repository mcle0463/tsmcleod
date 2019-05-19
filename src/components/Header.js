import React, { Component } from "react";
import Banner from "./Banner";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="flex flex-wrap header">
        <div className="w-25 pa3 mr6">
          <Link className="link dim black f3 " to="/">
            TSMCLEOD
          </Link>
        </div>

        <div className="flex flex-wrap w-50 pa3">
          <Link className="link dim black f6 pv1 mh3" to="/">
            HOME
          </Link>
          <Link
            className="link dim black f6 dib pv1 mh3"
            to="about"
            title="About"
          >
            ABOUT
          </Link>

          <Link
            className="link dim black f6 dib  pv1 mh3"
            to="Furniture"
            title="Store"
          >
            FURNITURE
          </Link>
          <Link
            className="link dim black f6 dib  pv1 mh3"
            to="Shop"
            title="Store"
          >
            SHOP
          </Link>
          <Link
            className="link dim black f6 dib pv1 mh3"
            to="Contact"
            title="Contact"
          >
            CONTACT
          </Link>
        </div>
        <input
          className="db hover-black bg-transparent pointer ba b--black-20 pl3 pr3 fr"
          type="submit"
          value="Cart"
        />
        <Banner />
      </header>
    );
  }
}

export default withRouter(Header);
