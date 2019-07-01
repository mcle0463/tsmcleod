import React, { Component } from "react";
import img from "../images/headerVertical.png";
class Banner extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="Design pattern" className="fl vh-100 dtc" />
      </div>
    );
  }
}

export default Banner;
