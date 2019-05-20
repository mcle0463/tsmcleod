import React, { Component } from "react";
class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: ""
    };
  }
  handleClick = () => {
    console.log(this.props.imageIndex);
  };

  render() {
    return (
      <div>
        <div
          className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green"
          href="#0"
          onClick={this.handleClick}
        >
          Add to cart
        </div>
      </div>
    );
  }
}

export default CartButton;
