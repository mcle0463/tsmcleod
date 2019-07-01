import React, { Component } from "react";
import { withRouter } from "react-router";
import "../index.css";
import { Link } from "react-router-dom";

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      this.animateIn();
    } else {
      this.animateOut();
    }
  }

  animateOut = () => {
    var elem1 = document.querySelectorAll("#MenuPlaceholder");
    elem1.className += " background-color: red";
    var elem = document.querySelectorAll(".menu-items-hidden");
    var i = 0;
    for (let item of elem) {
      i++;
      item.className = "menu-item" + i + "-flushed ";
    }
    this.setState({
      isToggleOn: true
    });
  };

  animateIn = () => {
    var elem = document.querySelectorAll('a[class^="menu-item"]');
    var i = 0;
    for (let item of elem) {
      i++;
      //item.className = "menu-item" + i + "-flushed-reverse";
      item.className = "menu-items-hidden";
    }
    this.setState({
      isToggleOn: false
    });
  };

  render() {
    return (
      <div id="MenuPlaceholder">
        <a
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black ma3 dn-ns fixed"
          id="Menu"
          href="#0"
          onClick={this.handleClick}
        >
          Menu
        </a>
        {/*<a className="menu-items-hidden" id="MenuItem1" href="#0">
          About Me
        </a>
        <a className="menu-items-hidden" id="MenuItem2" href="#0">
          Gallery
        </a>
        <a className="menu-items-hidden" id="MenuItem3" href="#0">
          Shop
        </a>
        <a className="menu-items-hidden" id="MenuItem4" href="#0">
          Contact Me
        </a>*/}

        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3"
          to="about"
          title="About"
        >
          About Me
        </Link>

        <Link
          className="menu-items-hidden link dim black f6 dib  pv1 mh3"
          to="Gallery"
          title="Gallery"
        >
          Gallery
        </Link>
        <Link
          className="menu-items-hidden link dim black f6 dib  pv1 mh3"
          to="Shop"
          title="Store"
        >
          Shop
        </Link>
        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3"
          to="Contact"
          title="Contact"
        >
          Contact Me
        </Link>
      </div>
    );
  }
}

export default withRouter(MobileHeader);
