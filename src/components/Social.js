import React, { Component } from "react";
import img from "../images/header.png";
class Banner extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="Design pattern" />
      </div>
    );
  }
}

export default Banner;

/*

          <div className="db">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <use xlinkHref="../images/feather-sprite.svg#instagram" />
            </svg>
          </div>

          <Link
            className="link dim gray f6 f5-ns dib "
            to="https://society6.com/tsmcleoddesign"
            title="About"
          >
            society6.com/tsmcleoddesign
          </Link>
*/
