import React, { Component } from "react";
import GalleryPictures from "./GalleryPictures";
import Foot from "./Foot";

import "../index.css";

class Gallery extends Component {
  render() {
    return (
      <div className="fr w-100 justify-center pl1-ns pt2 mt3" id="fade">
        <GalleryPictures />
      </div>
    );
  }
}

export default Gallery;
