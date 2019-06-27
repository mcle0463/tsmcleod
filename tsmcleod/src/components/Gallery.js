import React, { Component } from "react";
import GalleryPictures from "./GalleryPictures";
import "../index.css";

class Gallery extends Component {
  render() {
    return (
      <div className="flex pa3 w-100" id="fade">
        <GalleryPictures />
      </div>
    );
  }
}

export default Gallery;
