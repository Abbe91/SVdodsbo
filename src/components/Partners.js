import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <section>
        <h2 style={{ color: "black" }}>
          Professionella Dödsbo & Bohag Tjänster
        </h2>
        <h4 style={{ margin: "0.5rem 0" }}>- Våra Samarbetspartners -</h4>
        <p style={{ margin: "1rem 0" }}>
          Vi erbjuder en heltäckande lösning för hantering av dödsbo och bohag.
          Genom att samarbeta med noggrant utvalda partners, kan vi säkerställa
          att varje steg i processen sker smidigt och med högsta kvalitet. Våra
          samarbeten inkluderar:
        </p>
        <ul>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Begravningsbyråer – För att underlätta den känslomässigt tunga tiden
            erbjuder vi stöd genom betrodda begravningsbyråer.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Auktionshus och onlineauktioner – Vi hjälper till med försäljning av
            värdefulla föremål genom våra pålitliga auktionspartners.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Fastighetsmäklare – Vårt nätverk av professionella mäklare hjälper
            till med bostadsförsäljning och värdering.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Välgörenhetsorganisationer – Vi samarbetar med hjälporganisationer
            för att donera föremål och minska avfall.
          </li>
        </ul>
        <p style={{ margin: "1rem 0" }}>
          Kontakta oss idag för att få en kostnadsfri offert och upptäck hur vi
          kan hjälpa dig genom hela processen, från värdering till bortforsling.
        </p>
      </section>
      <section>
        <LottieBooking lotti={partners} height={300} width={400} />
      </section>
    </div>
  );
};

export default Partners;
