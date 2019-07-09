import React from "react";
import ReactDOM from "react-dom";
import Foot from "./components/Foot";
import { Route, BrowserRouter } from "react-router-dom";

import "tachyons/css/tachyons.css";
import "./index.css";
import "./animate-menu.css";

import App from "./components/App";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Header from "./components/Header";

//import register from './serviceWorker';

const routing = (
  <BrowserRouter>
    <Header />
    <div className="flex pl2 pr2">
      <div className="w-20-ns pr1-ns fl" /> {/* buffer for left header */}
      <div className="flex-column pa2 w-100">
        {" "}
        {/* flex-column for everything other than left header*/}
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        {/**  <Foot />*/}
      </div>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));
