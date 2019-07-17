import React, { Component } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import SERVER_URL from "../constants/server";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      comment: "",
      captchaVerify: "",
      emailStatus: 0,
      emailStatusMessage: ""
    };
  }

  onChange = e => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onChangeCaptcha(response) {
    this.setState({ captchaVerify: response });
  }

  onSubmit = e => {
    // get our form data out of state
    //debugger;

    // console.log(SERVER_URL);
    //e.preventDefault();
    e.preventDefault();
    if (this.state.captchaVerify === "") {
      this.setState(
        {
          emailStatus: 0,
          emailStatusMessage: "Please verify that you are not a robot :)" //TODO: robot emoji
        },
        function() {
          this.props.handleUpdate(this.state);
        }
      );
      return;
    }
    if (this.state.comment === "") {
      this.setState(
        {
          emailStatus: 0,
          emailStatusMessage: "Please add a comment"
        },
        function() {
          this.props.handleUpdate(this.state);
        }
      );
      return;
    }
    const {
      firstName,
      lastName,
      emailAddress,
      comment,
      captchaVerify
    } = this.state;
    axios
      .post("http://localhost:3001", {
        firstName,
        lastName,
        emailAddress,
        comment,
        captchaVerify
      })
      .then(res => {
        //always need to lift state of email status
        // console.log(res);
        this.setState({ emailStatus: res.status });

        if (res.status === 200) {
          //document.getElementById("create-course-form").reset();
          //if message was sent retain its status but clear user information from status
          document.getElementById("create-course-form").reset();
          this.setState({
            emailStatus: res.status,
            emailStatusMessage:
              "Message delivered!\nA confirmation has been sent to " +
              emailAddress,
            firstName: "",
            lastName: "",
            emailAddress: "",
            comment: "",
            captchaVerify: ""
          });
          this.props.handleUpdate(this.state); //lift state regardless of status
        }
      })
      .catch(err => {
        //if message was not sent retain its status and information so they can try again
        this.setState({
          emailStatus: err.response.status,
          emailStatusMessage:
            "Your message could not be sent, please see our contact page for another contact method!",
          captchaVerify: ""
        });
        this.props.handleUpdate(this.state); //lift state regardless of status
      });
  };

  render() {
    return (
      <article className="flex flex-wrap ph4 pb4 black-80 w-40-ns">
        <form
          // action="sign-up_submit"
          method="post"
          acceptCharset="utf-8"
          onSubmit={this.onSubmit}
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <label className="db fw4 lh-copy f6" htmlFor="email-address">
              Name
            </label>
            <div className="flex">
              <input
                className="db border-box hover-black w-100 input-reset measure ba b--black-20 pa2  mb2"
                type="text"
                name="firstName"
                placeholder="First"
                onChange={this.onChange}
                required
              />
              <div className="w-10" />
              <input
                className="db border-box hover-black w-100 input-reset measure ba b--black-20 pa2 mb2"
                type="text"
                name="lastName"
                placeholder="Last"
                onChange={this.onChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="db border-box hover-black w-100 input-reset measure ba b--black-20 pa2 mb2"
                type="email"
                name="emailAddress"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">
                Comment
              </label>
              <div>
                <textarea
                  name="comment"
                  className="db border-box hover-black w-100 measure ba b--black-20 pa2 mb2"
                  rows="10"
                  aria-describedby="comment-desc"
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="mt3">
            <ReCAPTCHA
              ref="captchaVerify"
              sitekey="6LfcSl4UAAAAABPrRqIrtOVHTeSbMZJHPPF3Bgj_"
              onChange={this.onChangeCaptcha.bind(this)}
            />
          </div>
          <div className="mt3">
            <input
              className="db hover-black bg-transparent grow pointer ba b--black-20 pa2 mb2"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </article>
    );
  }
}

export default ContactForm;
