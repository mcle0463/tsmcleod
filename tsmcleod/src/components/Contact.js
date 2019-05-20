import React, { Component } from "react";
import img from "../images/picture1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "./ContactForm";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.onEmailSubmit = this.onEmailSubmit.bind(this);
    this.state = {
      toastContent: "",
      toastStatus: 0
    };
  }
  onEmailSubmit(serverResponse) {
    this.setState(
      {
        toastStatus: serverResponse.emailStatus,
        toastContent: serverResponse.emailStatusMessage
      },
      function() {
        if (this.state.toastStatus === 200) {
          this.emailSent();
        } else {
          this.emailFail();
        }
      }
    );
    //debugger;
  }

  emailSent = () => toast.success("Message Sent!");
  emailFail = () => toast.error(this.state.toastContent);

  render() {
    return (
      <div className="flex flex-wrap-reverse justify-center" id="fade">
        <ToastContainer />
        <ContactForm handleUpdate={this.onEmailSubmit} />
        <div className=" w-30-ns pa4">
          <img src={img} alt="On the job" />
        </div>
      </div>
    );
  }
}

export default Contact;
