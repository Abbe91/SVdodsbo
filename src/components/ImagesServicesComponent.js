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
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
    padding: "1rem",
    justifyItems: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  images: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  btn: {
    width: "100%",
    height: "2.5rem",
    backgroundColor: "#00a7ac",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    marginTop: "1rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#008b8f",
    },
  },
  link: {
    textDecoration: "none",
    width: "100%",
  },
});

const images = [
  { url: dodsbokopes, text: "Dödsbo köpes", path: "/dodsbo-kopes" },
  { url: varderadodsbo, text: "Värdera dödsbo", path: "/vardera-dodsbo" },
  {
    url: stadningavdodsbo,
    text: "Städning av dödsbo",
    path: "/stadning-av-dodsbo",
  },
  {
    url: tomningavdodsbo,
    text: "Tömning av dödsbo",
    path: "/tomning-av-dodsbo",
  },
  { url: dodsbosaljes, text: "Dödsbo säljes", path: "/salja-dodsbo" },
  { url: dodsboanmalan, text: "Dödsboanmälan", path: "/dodsboanmalan" },
  {
    url: foretagkoperbohag,
    text: "Företag köper bohag",
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
            height={"200px"}
            width={"200px"}
            className={classes.images}
          />
          <a href={image.path} className={classes.link} title={image.text}>
            <button className={classes.btn}>{image.text}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImagesServicesComponent;
