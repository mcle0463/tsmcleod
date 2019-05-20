import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const images = [
  "../images/art-prints/pic1.jpg",
  "../images/art-prints/pic2.jpg",
  "../images/art-prints/pic3.jpg",
  "../images/art-prints/pic4.jpg",
  "../images/art-prints/Binding2.jpg",
  "../images/art-prints/Binding3.jpg",
  "../images/art-prints/Binding4.jpg",
  "../images/art-prints/Binding5.jpg",
  "../images/art-prints/Binding6.jpg",
  "../images/art-prints/Binding7.jpg",
  "../images/art-prints/Binding8.jpg"
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: true
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {
          //<button type="button" onClick={() => this.setState({ isOpen: true })}>
          //Open Lightbox
          //</button>
        }

        {this.state.isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
