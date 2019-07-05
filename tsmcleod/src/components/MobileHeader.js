import React, { Component } from "react";
import { withRouter } from "react-router";
import "../index.css";
import { Link } from "react-router-dom";
import img1 from "../images/menu-items/menuItem1.png";
import img2 from "../images/menu-items/menuItem2.png";
import img3 from "../images/menu-items/menuItem3.png";
import img4 from "../images/menu-items/menuItem4.png";

let linkNodes; //will contain LinkNode references after component mounts

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false, menuText: "Menu" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      this.animateIn();
    } else {
      this.animateOut();
    }
  }
  componentDidMount() {
    linkNodes = document.querySelectorAll(".menu-items-hidden");
  }

  setMenuText = e => {
    console.log(e);
    this.setState({
      menuText: { e }
    });
  };

  animateOut = () => {
    let i = 0;
    for (let item of linkNodes) {
      i++;
      item.className = "menu-item" + i + "-flushed ";
    }
    this.setState({
      isToggleOn: true
    });
  };

  animateIn = () => {
    let i = 0;
    for (let item of linkNodes) {
      i++;
      item.className = "menu-item" + i + "-flushed-reverse";
      //item.className = "menu-items-hidden";
    }
    this.setState({
      isToggleOn: false
    });
  };

  render() {
    var className = this.state.isToggleOn
      ? "fl w-100 mb6 pb4 "
      : "fl w-100 mb4 pb4";
    return (
      <div id="MenuPlaceholder" className={className}>
        <a
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black ma3 dn-ns absolute"
          id="Menu"
          href="#0"
          onClick={this.handleClick}
        >
          {this.state.menuText}
        </a>
        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3"
          to="about"
          title="About"
        >
          <img src={img1} className="mw3" alt="About Me" />
        </Link>

        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3 "
          to="Gallery"
          title="Gallery"
        >
          <img src={img2} className="mw3 menu-image" alt="Gallery" />
        </Link>
        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3"
          to="Shop"
          title="Store"
        >
          <img src={img3} className="mw3" alt="Shop" />
        </Link>
        <Link
          className="menu-items-hidden link dim black f6 dib pv1 mh3 dn-ns"
          to="Contact"
          title="Contact"
        >
          <img src={img4} className="mw3" alt="Contact Me" />
        </Link>
      </div>
    );
  }
}

export default withRouter(MobileHeader);
