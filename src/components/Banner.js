import React, { Component } from "react";
import img from "../images/header.png";
class Banner extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="Design pattern" className="flex w-100" />
      </div>
    );
  }
}

export default Banner;
