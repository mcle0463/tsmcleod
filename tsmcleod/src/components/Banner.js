import React, { Component } from "react";
import img from "../images/HeaderBlank.png";
class Banner extends Component {
  render() {
    return (
      <div>
        <img
          src={img}
          alt="Design pattern"
          className="fl vh-100 glow pointer"
        />
      </div>
    );
  }
}

export default Banner;
