import React from "react";
import "./contactpage.scss";
import ContactHead from "./contactsection/contactusheader/contactusheader";
import ContactusForm from "./contactsection/contactform/contactus-form";
import Footer from "./footer";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <ContactHead />
      <ContactusForm />
      <Footer />
    </div>
  );
};
export default ContactPage;
