import React from "react";
import image2 from "../utils/images/seoimages/dödsboanmälan.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    background: "#00a7ac",
    justifyContent: "space-around",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      padding: "1rem",
    },
  },
  para: {
    margin: "1rem 0",
    letterSpacing: "1px",
    lineHeight: "1.6",
    maxWidth: "500px",
    fontSize: "1rem",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem",
    },
  },
  divider: {
    margin: "1rem auto",
    width: "50%",
    background: "#0369a1",
    height: "2px",
  },
  imageContainer: {
    margin: "1rem 0",
    borderRadius: "50%",
    overflow: "hidden",
  },
  image: {
    height: "auto",
    borderRadius: "50%",
  },
});

const Besok = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <h2>Kostnadsfri Värdering</h2>
        <div className={classes.divider}></div>
        <p className={classes.para}>
          Vi erbjuder en <strong>kostnadsfri</strong>{" "}
          <a
            href="/vardering-av-dodsbo"
            title="värdering av dödsbo"
            style={{ color: "white", textDecoration: "underline" }}
          >
            värdering av dödsbo
          </a>{" "}
          och bohag i områden som Göteborg, Kungälv, Ale, Stenungsund och Tjörn.
          Med våra egna butiker och säljkanaler ser vi till att allt hanteras på
          ett miljömedvetet sätt. Vi samarbetar också med hjälporganisationer
          för att bidra till återanvändning och samhällsnytta. För varje uppdrag
          donerar vi 100 kronor till välgörande ändamål.
          <br />
          Efter att vi{" "}
          <a
            href="/tomma-dodsbo"
            title="tömma dödsbo"
            style={{ color: "white", textDecoration: "underline" }}
          >
            tömt dödsboet
          </a>{" "}
          och förråd, erbjuder vi även{" "}
          <a
            href="/flyttstadning-av-bohag"
            title="flyttstädning av bohag"
            style={{ color: "white", textDecoration: "underline" }}
          >
            flyttstädning
          </a>
          . Letar du efter en uppköpare för dödsbon, kan du tryggt vända dig
          till oss.
        </p>
      </section>
      <section className={classes.imageContainer}>
        <img
          src={image2}
          className={classes.image}
          loading="lazy"
          alt="Kostnadsfri värdering"
        />
      </section>
    </div>
  );
};

export default Besok;
