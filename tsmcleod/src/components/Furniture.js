import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import CarouselDisplay from "./CarouselDisplay";

class Furniture extends Component {
  render() {
    return (
      <div className="flex pa3 w-100" id="fade">
        <CarouselDisplay />
      </div>
    );
  }
}

export default Furniture;
