import React from "react";
import { makeStyles } from "@material-ui/core";

const services = [
  { title: "Värdera dödsbo", path: "/vardera-dodsbo" },
  { title: "Tömning", path: "/tommer-hushall" },
  { title: "Bortforsling", path: "/bortforsling" },
  { title: "Städning", path: "/flyttstadning" },
  { title: "Uppköp dödsbo", path: "uppkop-av-dodsbo" },
  { title: "Sälja dödsbo", path: "/salja-dodsbo/salja-dodsbo" },
  { title: "Sanera dödsbo", path: "/sanera-dodsbo" },
  { title: "Flytta", path: "/bohagsflytt" },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
    width: "100%",
    margin: "0 auto", // Center the container horizontally
  },
  textSection: {
    paddingRight: "2rem",
    maxWidth: "60%",
  },
  servicesSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "40%",
  },
  btn: {
    background: "#00a7ac",
    color: "white",
    border: "none",
    fontSize: "0.7rem",
    width: "6.5rem",
    height: "2rem",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    "&:hover": {
      opacity: 0.9,
    },
  },
  btnContainer: {
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem", // Adjusted for better readability
    fontWeight: "bold",
  },
  description: {
    marginBottom: "1rem",
    fontSize: "0.9rem", // Adjusted for better readability
    lineHeight: "1.5",
  },
});

const ServicesIconsComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <div className={classes.textSection}>
          <h2 className={classes.title}>Vad behöver du hjälp med?</h2>
          <p className={classes.description}>
            Vi förstår att det kan vara en känslomässigt svår och stressig tid
            när man behöver ta hand om ett dödsbo eller ett hushåll som behöver
            tömmas. Vår målsättning är att göra hela processen så smidig och
            stressfri som möjligt för dig. Vi har lång erfarenhet och är
            experter på att hantera alla slags situationer när det gäller
            dödsbon och hushåll.
          </p>
        </div>
        <div className={classes.servicesSection}>
          {services.map((service, i) => (
            <div key={i} className={classes.btnContainer}>
              <button className={classes.btn}>
                <a
                  href={service.path}
                  title={service.title}
                  className={classes.btn}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {service.title}
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesIconsComp;
