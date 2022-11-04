import React from "react";
import "./contactpage.scss";
import ContactHead from "./contactsection/contactusheader/contactusheader";
import ContactusForm from "./contactsection/contactform/contactus-form";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <ContactHead />
      <ContactusForm />
    </div>
  );
};
export default ContactPage;
