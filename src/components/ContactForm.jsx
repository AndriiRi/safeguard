import React from "react";
import YelowButton from "./buttons/YelowButton";
import "./styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formContainer">
      <div className="formFeeld">
        <h2>
          {" "}
          Contact <span className="blackTextPart"> us </span>
        </h2>
        <form action="">
          <p>Full Name</p>
          <input type="text" />
          <p>Company name</p>
          <input type="text" />
          <p>Phone number</p>
          <input type="tel" />
          <p>E-mail</p>
          <input type="email" />
          <p>Write Us Message</p>
          <input type="text" />
          <p>
            <YelowButton>Send Mesage</YelowButton>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
