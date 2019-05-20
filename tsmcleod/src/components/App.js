import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import Home from "./Home";
import About from "./About";
import Furniture from "./Furniture";
import Shop from "./Shop";
import Contact from "./Contact";
import Header from "./Header";
import Foot from "./Foot";

class App extends Component {
  render() {
    return (
      <div>
        <script src="https://js.stripe.com/v3/" />

        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/furniture" component={Furniture} />
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
