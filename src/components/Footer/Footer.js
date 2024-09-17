import React from "react";
import "./Footer.css";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";

const Footer = () => {
  const customerData = useSelector(getCustomerData);

  return (
    <div className="footer">
      <div
        className="footer-top"
        style={{
          backgroundColor: "#00a7ac",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Döddsbo Sv</h3>
        <div style={{ marginBottom: "1rem" }}>
          <a
            href={`tel:${customerData.phone}`}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
            }}
          >
            <AiTwotonePhone style={{ marginRight: "0.5rem" }} />
            {customerData.phone}
          </a>
          <a
            href={`mailto:${customerData.email}`}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            <AiOutlineMail style={{ marginRight: "0.5rem" }} />
            {customerData.email}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://www.facebook.com/"
            title="Döddsbo Sv Facebook"
            style={{ color: "white", fontSize: "1.5rem" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            title="Döddsbo Sv Instagram"
            style={{ color: "white", fontSize: "1.5rem" }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{ padding: "2rem", backgroundColor: "#00a7ac" }}
      >
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
            fontSize: "0.9rem",
          }}
        >
          Välj oss för att få professionell och pålitlig hjälp med att tömma
          hushåll och dödsbon. Vi har många års erfarenhet av alla typer av
          flyttar och städningar och vi sanerar dödsbon och hushåll för att ge
          dig en trygg och ren miljö. Vi erbjuder också värdering av dödsbon och
          köper upp lösöre för att underlätta processen för dig. Vårt team av
          experter är alltid redo att hjälpa till med att skapa en smidig och
          stressfri lösning för alla dina behov. Kontakta oss idag för mer
          information.
        </p>
      </div>

      <div
        className="footer-offices"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <h4 style={{ marginBottom: "1rem" }}>Våra kontor</h4>
        <div>
          <h5>Dödsbo Sv</h5>
          <p>Nära dig oavsett vart biffner dig</p>
          <p>Finns i hela Sverige</p>
        </div>
        {/* Uncomment and adjust if additional offices are added */}
        {/* <div>
          <h5>Ulricehamn</h5>
          <p>Bogesundsgatan 2</p>
          <p>52 338 Ulricehamn</p>
        </div> */}
      </div>

      <div
        className="footer-bottom"
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#00a7ac",
          color: "white",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Döddsbo Sv. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
