import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Banner from "./Banner";

import img1 from "../images/menu-items/menuItem1.png";
import img2 from "../images/menu-items/menuItem2.png";
import img3 from "../images/menu-items/menuItem3.png";
import img4 from "../images/menu-items/menuItem4.png";

let linkNodes;

class Nav extends Component {
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

  setMenuText = param => e => {
    this.setState({
      menuText: param
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
    var className = this.state.isToggleOn //no need for state here since not mobile, change to use mouseIn and Mouse out
      ? "w-20 fixed dn db-ns absolute"
      : "w-20 h-100 absolute dn db-ns  ";
    return (
      <div id="NavPlaceholder" className="fl flex h-100 dn db-ns fixed">
        {/** 
        </div>*/}
        <div className="fl dt vh-100">
          <div className="v-mid dtc">
            <Link className="link dim black f3" to="/">
              <p className="banner-text h5">TESSA S. MCLEOD</p>
            </Link>
          </div>
          <Banner />
        </div>
        <div
          id="MenuPlaceHolder"
          className="w-20 fl dt vh-100 absolute pl6 ml5"
        >
          <div className="v-mid dtc">
            <a
              className="f5 dim ph3 mb2 dib mid-grey bg-white no-underline absolute "
              href="#0"
              onClick={this.handleClick}
            >
              {this.state.menuText}
            </a>
            <Link
              className="menu-items-hidden link dim absolute"
              to="about"
              title="About"
              onClick={this.setMenuText("About")}
            >
              <img src={img1} className="mw3" alt="About Me" />
            </Link>

            <Link
              className="menu-items-hidden link dim absolute"
              to="Gallery"
              title="Gallery"
              onClick={this.setMenuText("Gallery")}
            >
              <img src={img2} className="mw3 menu-image" alt="Gallery" />
            </Link>
            <Link
              className="menu-items-hidden link dim absolute"
              to="Shop"
              title="Store"
              onClick={this.setMenuText("Store")}
            >
              <img src={img3} className="mw3" alt="Shop" />
            </Link>
            <Link
              className="menu-items-hidden link dim absolute"
              to="Contact"
              title="Contact"
              onClick={this.setMenuText("Contact")}
            >
              <img src={img4} className="mw3" alt="Contact Me" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
