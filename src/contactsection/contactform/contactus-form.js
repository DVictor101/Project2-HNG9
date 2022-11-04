import React from "react";
import "./contactus-form.scss";

const ContactusForm = () => {
  return (
    <div className="contactformdiv">
      <form className="contactform">
        <div className="firstformdiv">
          <div className="firstnameinput">
            <label className="inputlabel">First name</label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="firstnameinput">
            <label className="inputlabel">Last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <label id="inputlabel">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="yourname@email.com"
        />
        <label className="inputlabel">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and l'll reply you as soon as possiple"
        ></textarea>
        <div className="checkboxdiv">
          <input type="checkbox" />
          <p>
            You agree to providing your data to DVictor who may contact you{" "}
          </p>
        </div>
        <button id="btn__submit">Send message</button>
      </form>
    </div>
  );
};
export default ContactusForm;
