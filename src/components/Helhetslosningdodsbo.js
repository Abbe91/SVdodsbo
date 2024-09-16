import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Successfull from "../LottieAnimation/Successfull"; // Assuming you have this component
import successfull from "../utils/animation/successfull.json";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    background: "linear-gradient(to top, #00a7ac, #00a7ac)",
    fontFamily: "'Arial', sans-serif",
    color: "#2c3e50",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: "2rem",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    "@media screen and (max-width: 800px)": {
      fontSize: "1.8rem",
    },
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sec1: {
    flex: "1",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginRight: "1rem",
    "@media screen and (max-width: 800px)": {
      marginBottom: "1rem",
      marginRight: "0",
    },
  },
  lottieContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    lineHeight: "28px",
    fontSize: "0.9rem",
    margin: "0 auto",
    color: "#2c3e50",
    textAlign: "left",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem",
    },
  },
  link: {
    color: "#00a7ac",
    textDecoration: "none",
  },
});

const Helhetslosningdodsbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="helhet">
      <h2 className={classes.title}>Helhetslösning för dödsbo</h2>
      <div className={classes.contentContainer}>
        <section className={classes.sec1}>
          <p className={classes.paragraph}>
            Vår helhetslösning erbjuder professionell service för rensning,
            försäljning och avveckling av abonnemang samt juridisk rådgivning.
            Vi kan hjälpa till med allt som behövs för att göra processen smidig
            och enkel för dig. Kontakta oss idag för en kostnadsfri konsultation
            angående dödsbo och dödsbo tömning. Ett dödsbo är mer krävande än
            vad man tror. Idag ställs det ju många krav på sortering och avfall
            av dödsbon. Vi på Döddsbo Sv tar hela ansvaret från att sortera{" "}
            <a href="/dodsboet" className={classes.link} title="dödsboet">
              dödsboet
            </a>
            , bortforsling av dödsboet,{" "}
            <a
              href="/tomma-dodsbo"
              className={classes.link}
              title="tömma dödsbo"
            >
              tömning av dödsboet
            </a>{" "}
            och sedan städning av dödsboet. Vi gör även luktsaneringar av dödsbo
            eller röksanering av dödsbo. Behöver du hjälp med att tömma ett
            dödsbo?
          </p>
        </section>
        <section className={classes.lottieContainer}>
          <Successfull lotti={successfull} height={200} width={250} />
        </section>
      </div>
    </div>
  );
};

export default Helhetslosningdodsbo;
