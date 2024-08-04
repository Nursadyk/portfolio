import React from "react";
import scss from "./Contact.module.scss";
const Contact = () => {
  return (
    <section id="contact" className={scss.contact}>
      <div className="container">
        <div className={scss.content}>
          <h1>Contact</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
