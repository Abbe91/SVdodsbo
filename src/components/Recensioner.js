import React from "react";
import { makeStyles, Card } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import { customerReviews } from "../utils/data";
import googleIcon from "../utils/images/googlereview.png";

const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  contentContainer: {
    marginTop: "2rem",
    maxWidth: "50%",
    textAlign: "center",
    marginBottom: "2rem",
  },
  reviews: {
    width: "100%",
  },
  cardContainer: {
    background: "white",
    borderRadius: "5px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "0 0.5rem", // Add margin for spacing
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
  divider: {
    height: "1px",
    background: "#0369a1",
    width: "140px",
    margin: "0.5rem 0",
  },
  title: {
    marginBottom: "1rem",
  },
  description: {
    lineHeight: "26px",
    marginBottom: "1rem",
  },
});

const Recensioner = () => {
  const classes = useStyles();

  // Slick settings for the carousel behavior
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 1 slide at a time on mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Show 1 slide on screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900, // Show 2 slides on screens between 600px and 900px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Show 3 slides on screens between 900px and 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600, // Show 4 slides on screens larger than 1200px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <section className={classes.contentContainer}>
        <h2>Längst erfarenhet</h2>
        <p>
          Vi på Döddsbo Sv är det självklara valet för hantering av bohag och
          dödsbo med över 50 års erfarenhet tillsammans är vi helt övertygade om
          att vi kan erbjuda dig det bästa upplägget för ditt bohag, dödsbo och
          din plånbok. Vårt upptagningsområde sträcker sig över hela Västra
          Götaland.
        </p>
      </section>
      <Slider {...settings} className={classes.reviews}>
        {customerReviews.map((review) => (
          <div key={review.id} className={classes.cardContainer}>
            <Card className={classes.card}>
              <img
                src={googleIcon}
                alt="Google"
                className={classes.googleIcon}
              />
              <a
                href={review.path}
                style={{ color: "black", textDecoration: "none" }}
                title={review.service}
              >
                <h5>{review.service}</h5>
              </a>
              <p style={{ fontSize: "0.8rem", margin: "0.2rem 0" }}>
                {review.kund}
              </p>
              <div className={classes.divider}></div>
              <span
                style={{
                  fontSize: "0.75rem",
                  maxWidth: "260px",
                  lineHeight: "21px",
                  marginBottom: "0.5rem",
                }}
              >
                {review.comment}
              </span>
              <div style={{ color: "orange" }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recensioner;
