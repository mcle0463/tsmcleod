import React, { Component } from "react";
import { withRouter } from "react-router";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

class Header extends Component {
  render() {
    let width = window.innerWidth;
    if (width > 480) {
      return (
        <header>
          <Nav />
        </header>
      );
    } else {
      return (
        <header>
          <MobileNav />
        </header>
      );
    }
  }
}

export default withRouter(Header);
