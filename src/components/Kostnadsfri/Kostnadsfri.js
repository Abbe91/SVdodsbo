import React, { useRef, useState } from "react";
import "./Kostnadsfri.css";
import emailjs from "@emailjs/browser";

const Kostnadsfri = ({ vad, text }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qwj4wc3",
        "template_gudl7ri",
        form.current,
        process.env.REACT_APP_EMAILJS_2
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("Email successfully sent");
            setSending(false);
            setSent(true);
          }
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="kostnadfri-cont">
      <div className="kostnadfri-content">
        <h2>Kostnadsfri {vad}</h2>
        <p>
          Vi erbjuder en kostnadsfri värdering för att ge dig en exakt och
          rättvis bedömning av ditt {text}. Oavsett om det handlar om ett
          dödsbo, bohag eller lösöre, vår professionella tjänst är designad för
          att ge dig en transparent och detaljerad prisuppskattning. Kontakta
          oss idag för att boka din kostnadsfria värdering och få klarhet i
          värdet på din egendom.
        </p>
      </div>
    </div>
  );
};

export default Kostnadsfri;
