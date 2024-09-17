import React from "react";
import Slider from "react-slick";
import { Paper, Button, makeStyles } from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  carouselContainer: {
    width: "100%", // Full width container
    position: "relative",
  },
  carouselItem: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Vertically centers the content
    alignItems: "center", // Horizontally centers the content
    textAlign: "center",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#00a7ac",
  },
  title: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "1rem",
    textAlign: "center", // Make sure text aligns in the center
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#00a7ac",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#007d7e",
    },
  },
  slickDots: {
    display: "flex !important",
    justifyContent: "center", // Center the dots
    position: "relative !important", // Ensure the dots are positioned relative to their container
    bottom: "0px", // Adjust position if needed
    marginTop: "20px", // Add margin to separate dots from slides
    "& li button:before": {
      color: "#00a7ac", // Custom dot color
    },
  },
});

const services = [
  {
    title: "Tömma hus och lägenheter",
    path: "tomma-bohag",
    text: "Vi tömmer lägenheteter, hus, dödsbon, förråd och kontor. Döddsbo Sv tar hand om hela bohag, dödsbo och hushåll, även delar av hem om någon flyttat till ett serviceboende eller liknade.",
    icon: <HomeWorkIcon />,
  },
  {
    title: "Bortforsling av bohag och dödsbo",
    path: "bortforsling-dodsbo",
    text: "Vi erbjuder hjälp med bortforsling av möbler och skräp och vi kan oftast hjälpa dig redan samma dag. Du behöver bara visa oss det du vill forsla bort.",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Städning av dödsbo och Bohag",
    path: "/stadning-av-dodsbo",
    text: "Städning av dödsbo eller bohag som flyttstäd är krävande och tar tid. Vi erbjuder städgaranti på alla våra städtjänster.",
    icon: <DeleteIcon />,
  },
  {
    title: "Sanering av dödsbo och bohag",
    path: "sanera-dodsbo",
    icon: <WarningIcon />,
    text: "Har du rökt inomhus eller att huset har odör? Då kan vi hjälpa dig med luktsanering av ditt dödsbo eller bohag.",
  },
  {
    title: "Bohagsflyttar",
    path: "bohagsflytt",
    icon: <AllInboxIcon />,
    text: "Behöver du hjälp med flytt av ditt bohag? Vi utför dagligen privatflyttar i hela Västra Götaland med goda resultat.",
  },
  {
    title: "Uppköp av lösöre",
    path: "uppkop-av-dodsbo",
    icon: <MonetizationOnIcon />,
    text: "Har du lösöre som möbler, kläder, elektronik eller annat så kan vi hjälpa dig med att köpa upp. Vi erbjuder kostnadsfri värdering.",
  },
  {
    title: "Värdering av dödsbo",
    icon: <FindInPageIcon />,
    path: "vardera-dodsbo",
    text: "Vi erbjuder kostnadsfri värdering av dödsbo och bohag inom Göteborg, Kungälv, Ale, Stenungsund och Tjörn.",
  },
];

const SeoServiceComponent = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul className={classes.slickDots}> {dots} </ul>, // Custom position for dots
  };

  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className={classes.carouselItem}>
            <div className={classes.icon}>{service.icon}</div>
            <h2 className={classes.title}>{service.title}</h2>
            <p className={classes.text}>{service.text}</p>
            <Button
              href={service.path}
              variant="contained"
              className={classes.button}
            >
              Läs mer
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SeoServiceComponent;
