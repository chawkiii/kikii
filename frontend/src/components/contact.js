import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section>
      <div className="contact_container">
        <div className="contact_form">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="contact_info">
          <h2>Info</h2>
          <p>Phone: 1234567890</p>
          <p>Email: promotion@kikii.com</p>
          <p>Address: 1234 Street, City, Country</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
