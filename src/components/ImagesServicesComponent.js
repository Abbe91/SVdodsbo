import React from "react";
import { makeStyles } from "@material-ui/core";
import dodsbokopes from "../utils/images/seoimages/ddsbo-kpes-01.jpg";
import dodsbosaljes from "../utils/images/seoimages/ddsbo-sljes.jpg";
import dodsboanmalan from "../utils/images/seoimages/ddsboanmlan.jpg";
import foretagkoperbohag from "../utils/images/seoimages/fretag-kper-bohag.jpg";
import stadningavdodsbo from "../utils/images/seoimages/stdning-av-ddsbo-01.jpg";
import tomningavdodsbo from "../utils/images/seoimages/tmning-av-ddsbo.jpg";
import varderadodsbo from "../utils/images/seoimages/appraisingantiques.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles({
  root: {
    background: "white",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Justerade minstorleken
    gap: "2rem", // Mer avstånd mellan boxarna
    padding: "2rem", // Mer padding för ett luftigare utseende
    justifyItems: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem", // Lite mer padding runt varje box
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)", // Större skugga för bättre kontrast
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)", // Lyft boxen mer vid hover
    },
  },
  images: {
    width: "100%",
    height: "220px", // Större bildhöjd
    objectFit: "cover",
    borderRadius: "8px",
  },
  btn: {
    width: "100%",
    height: "2.8rem", // Lätt ökad höjd
    backgroundColor: "#00a7ac",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    marginTop: "1.5rem", // Ökad marginal uppifrån
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#008b8f",
    },
  },
  pargraph: {
    textAlign: "center",
    color: "#333", // Mörkare textfärg för bättre kontrast
    marginTop: "1rem",
    fontSize: "1rem",
    lineHeight: "1.5", // Förbättrad läsbarhet
  },
  link: {
    textDecoration: "none",
    width: "100%",
  },
});

const images = [
  {
    url: dodsbokopes,
    text: "Dödsbo köpes",
    pargraph:
      "Vi köper dödsbo och erbjuder en helhetslösning där vi tar hand om värdering, tömning och bortforsling av bohag. Vi säkerställer att processen går smidigt och effektivt för alla inblandade.",
    path: "/dodsbo-kopes",
  },
  {
    url: varderadodsbo,
    text: "Värdera dödsbo",
    pargraph:
      "Behöver du en rättvis värdering av ett dödsbo? Vi hjälper dig med en professionell värdering av bohag och tillgångar, vilket underlättar inför eventuella försäljningar eller donationer.",
    path: "/vardera-dodsbo",
  },
  {
    url: stadningavdodsbo,
    text: "Städning av dödsbo",
    pargraph:
      "Vi erbjuder städtjänster för dödsbon där vi noggrant rengör bostaden efter tömning. Vi garanterar att allt lämnas i bästa skick för eventuellt försäljning eller överlämning.",
    path: "/stadning-av-dodsbo",
  },
  {
    url: tomningavdodsbo,
    text: "Tömning av dödsbo",
    pargraph:
      "Tömning av dödsbo kan vara en känslig process. Vi hjälper dig med att effektivt och varsamt tömma bostaden, oavsett om det är inför försäljning eller donation.",
    path: "/tomning-av-dodsbo",
  },
  {
    url: dodsbosaljes,
    text: "Dödsbo säljes",
    pargraph:
      "När du vill sälja ett dödsbo, ser vi till att processen är enkel och stressfri. Vi erbjuder värdering och köper upp bohag för att underlätta för dig.",
    path: "/salja-dodsbo",
  },
  {
    url: dodsboanmalan,
    text: "Dödsboanmälan",
    pargraph:
      "Vid dödsfall kan vi hjälpa till med dödsboanmälan och hanteringen av den avlidnes tillgångar och skulder. Vi ser till att allt går rätt till enligt gällande regler.",
    path: "/dodsboanmalan",
  },
  {
    url: foretagkoperbohag,
    text: "Företag köper bohag",
    pargraph:
      "Vårt företag köper bohag från dödsbon och andra hushåll. Vi erbjuder en smidig lösning där vi tar hand om allt från värdering till bortforsling.",
    path: "/foretag-som-koper-bohag",
  },
];

const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images?.map((image, i) => (
        <div key={i} className={classes.imageContainer}>
          <LazyLoadImage
            src={image.url}
            alt={image.text}
            height={"220px"} // Ökat bildhöjd
            className={classes.images}
          />
          <p className={classes.pargraph}>{image.pargraph}</p>
          <a href={image.path} className={classes.link} title={image.text}>
            <button className={classes.btn}>{image.text}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImagesServicesComponent;
