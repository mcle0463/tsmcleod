import React from "react";
import ReactDOM from "react-dom";
import "tachyons/css/tachyons.css";
import "./index.css";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./components/App";
import About from "./components/About";
import Furniture from "./components/Furniture";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Foot from "./components/Foot";
//import register from './serviceWorker';

const routing = (
  <BrowserRouter>
    <Header />
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/furniture" component={Furniture} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/contact" component={Contact} />
    </div>
    <Foot />
  </BrowserRouter>
);
//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(routing, document.getElementById("root"));
//register();
