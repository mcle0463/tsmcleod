import React, { Component } from "react";
import ArtPrint from "./ArtPrint";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../images/art-prints/pic1.jpg";
import img2 from "../images/art-prints/pic2.jpg";
import img3 from "../images/art-prints/pic3.jpg";
import img4 from "../images/art-prints/pic4.jpg";
import img5 from "../images/art-prints/Binding2Low.jpg";
import img6 from "../images/art-prints/Binding3Low.jpg";
import img7 from "../images/art-prints/Binding4Low.jpg";
import img8 from "../images/art-prints/Binding5Low.jpg";
import img9 from "../images/art-prints/Binding6Low.jpg";
import img10 from "../images/art-prints/Binding7Low.jpg";
import img11 from "../images/art-prints/Binding8Low.jpg";

import img1HQ from "../images/high-res/pic1.jpg";
import img2HQ from "../images/high-res/pic2.jpg";
import img3HQ from "../images/high-res/pic3.jpg";
import img4HQ from "../images/high-res/pic4.jpg";
import img5HQ from "../images/high-res/Binding2.jpg";
import img6HQ from "../images/high-res/Binding3.jpg";
import img7HQ from "../images/high-res/Binding4.jpg";
import img8HQ from "../images/high-res/Binding5.jpg";
import img9HQ from "../images/high-res/Binding6.jpg";
import img10HQ from "../images/high-res/Binding7.jpg";
import img11HQ from "../images/high-res/Binding8.jpg";

const images = [
  img1HQ,
  img2HQ,
  img3HQ,
  img4HQ,
  img5HQ,
  img6HQ,
  img7HQ,
  img8HQ,
  img9HQ,
  img10HQ,
  img11HQ
];

class ArtPrints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    //debugger;
    this.setState({
      photoIndex: index,
      isOpen: true
    });
  }

  render() {
    return (
      <div className="flex flex-wrap justify-center mh6-ns" id="fade">
        {this.state.isOpen && (
          <Lightbox
            mainSrc={images[this.state.photoIndex]}
            nextSrc={images[(this.state.photoIndex + 1) % images.length]}
            prevSrc={
              images[
                (this.state.photoIndex + images.length - 1) % images.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (this.state.photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + 1) % images.length
              })
            }
          />
        )}
        <ArtPrint src={img1} imgIndex={0} onClick={this.handleClick} />
        <ArtPrint src={img2} imgIndex={1} onClick={this.handleClick} />

        <ArtPrint src={img3} imgIndex={2} onClick={this.handleClick} />
        <ArtPrint src={img4} imgIndex={3} onClick={this.handleClick} />

        <ArtPrint src={img5} imgIndex={4} onClick={this.handleClick} />
        <ArtPrint src={img6} imgIndex={5} onClick={this.handleClick} />
        <ArtPrint src={img7} imgIndex={6} onClick={this.handleClick} />
        <ArtPrint src={img8} imgIndex={7} onClick={this.handleClick} />

        <ArtPrint src={img9} imgIndex={8} onClick={this.handleClick} />
        <ArtPrint src={img10} imgIndex={9} onClick={this.handleClick} />
        <ArtPrint src={img11} imgIndex={10} onClick={this.handleClick} />
      </div>
    );
  }
}

export default ArtPrints;
