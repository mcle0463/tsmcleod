import React, { Component } from "react";
import CartButton from "./CartButton";

//import FaBeer from "react-icons/lib/fa/beer";
//import { MaInstagram } from "react-icons/lib/ma/instagram";

class ArtPrint extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var i = this.props.imgIndex;
    this.props.onClick(i);
  }
  render() {
    const value = this.props.src;
    return (
      <div className="w-25-ns mh3 ma3" onClick={this.handleClick}>
        <a className="center mw5 tc black link " title="Art Print by TSMCLEOD">
          <img
            className="db ba b--black-10 grow"
            alt="Art Print"
            title="Art Print 1"
            src={value}
          />
          <dl className="f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0">Title</dd>
            <dt className="clip">Artist</dt>
            <dd className="ml0 gray">Artist</dd>
          </dl>
        </a>
      </div>
    );
  }
}

export default ArtPrint;
