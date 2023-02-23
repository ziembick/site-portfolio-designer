import Navbar from "./navbar";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "./contato.css"

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpwouo9",
        "template_rpenbqc",
        form.current,
        "2fHgcjnXCEcoPxp77"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Navbar />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contato;
