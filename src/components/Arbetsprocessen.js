import React from "react";
import { makeStyles } from "@material-ui/core";
import appraisingantiques from "../utils/images/seoimages/appraisingantiques.jpg";
import cleaningservices from "../utils/images/seoimages/cleaningservices.jpg";
import movingfurniture from "../utils/images/seoimages/movingfurniture.jpg";
import paymenttransaction from "../utils/images/seoimages/paymenttransaction.jpg";
import "./Arbetsprocessen.css";

const Arbetsprocessen = () => {
  return (
    <div className="background">
      <h2 className="title">SÅ FUNGERAR DET</h2>
      <div className="flexContainer">
        <section className="section">
          <div id="vardering">
            <div className="roundNumber">
              <p>1</p>
            </div>
            <p className="textContent">
              <strong>Värdering:</strong> Vi erbjuder en kostnadsfri bedömning
              av föremål från dödsboet eller bohaget. Detta gör vi för att ge er
              ett fast pris för{" "}
              <a href="/tomma-dodsbo" className="linkText" title="tömma dödsbo">
                tömningen av dödsboet
              </a>
              . Vi kan också erbjuda ett uppköp av föremål vi är intresserade
              av.
            </p>
          </div>
          <div>
            <img
              src={appraisingantiques}
              className="imageContent"
              alt="Värdering av dödsbo"
            />
          </div>
        </section>

        <div className="perentsSection">
          <section className="sectionReversed">
            <div>
              <div className="roundNumber" id="tömning">
                <p>2</p>
              </div>
              <p className="textContent">
                <strong>Tömning & Bortforsling:</strong> Vi kommer överens om en
                dag för att börja tömma dödsboet eller bohaget. Efter sortering
                tar vi hand om saker för donation, återvinning eller transport
                till vår butik eller lager.
                <a
                  href="/dodsboet"
                  className="linkText"
                  title="tömning av dödsbo"
                >
                  Läs mer om processen
                </a>
                .
              </p>
            </div>
            <div>
              <img
                src={movingfurniture}
                className="imageContent"
                alt="Tömning och bortforsling"
              />
            </div>
          </section>
        </div>
        <section className="section">
          <div>
            <div className="roundNumber" id="stadning">
              <p>3</p>
            </div>
            <p className="textContent">
              <strong>Städning:</strong> Vi erbjuder även städning efter
              tömningen av dödsboet. Detta inkluderar grundlig rengöring och vid
              behov sanering, såsom luktsanering.
              <a
                href="/stadning-av-dodsbo"
                className="linkText"
                title="städning av dödsbo"
              >
                Läs mer om städningstjänsten
              </a>
              .
            </p>
          </div>
          <div>
            <img
              src={cleaningservices}
              className="imageContent"
              alt="Städning av dödsbo"
            />
          </div>
        </section>
        <div className="perentsSection">
          <section className="sectionReversed">
            <div id="betalning">
              <div className="roundNumber">
                <p>4</p>
              </div>
              <p className="textContent">
                <strong>Betalning:</strong> Om föremålen är värda mer än
                kostnaderna för arbetet betalar vi er för{" "}
                <a
                  href="/tomma-dodsbo"
                  className="linkText"
                  title="tömma dödsbo"
                >
                  tömningen av dödsboet
                </a>
                . Alternativt drar vi av summan från den totala betalningen.
              </p>
            </div>
            <div>
              <img
                src={paymenttransaction}
                className="imageContent"
                alt="Betalning efter tömning"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
