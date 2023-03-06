import Navbar from "./navbar";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "../css/contato.css";
import Footer from "./footer";

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
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="form-div">
          <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input
              type="text"
              name="user_name"
              placeholder="Seu nome aqui"
              className="nome"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Seu e-mail aqui"
              className="email"
            />
            <label>Mensagem</label>
            <textarea
              name="message"
              placeholder="Escreva sua mensagem"
              className="mensagem"
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contato;
