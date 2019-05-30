import React, { Component } from "react";
import ArtPrint from "./ArtPrint";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../images/furniture/pic1.png";
import img2 from "../images/furniture/pic2.jpg";
import img3 from "../images/furniture/pic3.jpg";
import img4 from "../images/furniture/pic4.jpg";
import img5 from "../images/furniture/pic5.jpg";
import img6 from "../images/furniture/pic6.jpg";
import img7 from "../images/furniture/pic7.jpg";
import img8 from "../images/furniture/pic8.jpg";
import img9 from "../images/furniture/pic9.jpg";
import img10 from "../images/furniture/pic10.jpg";
import img11 from "../images/furniture/pic11.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11
];

class CarouselDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
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

export default CarouselDisplay;
