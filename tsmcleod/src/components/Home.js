import React, { Component } from "react";
/*import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import PAYMENT_SERVER_URL from "../constants/server";
import STRIPE_PUBLISHABLE from "../constants/stripe";*/
class Home extends Component {
  state = { users: [] };
  //test for server response
  /*componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }*/

  render() {
    console.log(process.env.PUBLIC_URL);

    return (
      <div className="flex justify-center pa3 " id="fade">
        <span style={{ height: "500px" }} />
        <div className="example">
          <h1>Under Construction :)</h1>
          {/*<Elements>
               <CheckoutForm />
            </Elements>*/
            }
        </div>
      </div>
    );
  }
}

export default Home;
