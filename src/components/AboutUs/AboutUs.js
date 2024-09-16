import React, { useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="aboutUs">
      <div className="aboutUs-info">
        <h2 className="aboutUs-title">{query}</h2>
        <p className="aboutUs-intro">
          Hos <strong>{customerData.business}</strong> erbjuder vi {om}.
        </p>
        <h5 className="aboutUs-services">
          Vi hanterar dödsbon och hushåll genom köp, tömning, städning och
          försäljning.
        </h5>
        <p className="aboutUs-details">
          Behöver du hjälp med att {oss} ett dödsbo? Vi erbjuder professionella
          tjänster för{" "}
          <a href="/tomma-dodsbo" className="aboutUs-link" title="tömma dödsbo">
            tömning
          </a>{" "}
          och städning av dödsboet, samt för att{" "}
          <a href="/dodsboet" className="aboutUs-link" title="dödsboet">
            köpa dödsboet
          </a>
          . Vi erbjuder även en{" "}
          <a
            href="/vardering-av-dodsbo"
            title="värdering av dödsbo"
            className="aboutUs-link"
          >
            kostnadsfri värdering
          </a>{" "}
          och en offert som du kan granska. Om du väljer att låta oss{" "}
          <a
            href="/uppkop-av-dodsbo"
            className="aboutUs-link"
            title="uppköp av dödsbo"
          >
            köpa ditt dödsbo
          </a>
          , kan vi också hjälpa till med att{" "}
          <a href="/tomma-dodsbo" className="aboutUs-link" title="tömma dödsbo">
            tömma
          </a>{" "}
          och städa det. Vi arbetar tillsammans med flera auktionsfirmor och kan
          assistera vid försäljning av värdefullt lösöre. Dessutom erbjuder vi
          stöd med bouppteckning av dödsboet.
        </p>

        <div className="aboutUs-contact">
          <div className="aboutUs-address">
            <h4>Adress</h4>
            <div>
              <p>{customerData.adress}</p>
              <p>
                {customerData.zip} {customerData.city}
              </p>
            </div>
          </div>
          <div className="aboutUs-contact-info">
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
