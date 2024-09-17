import React from "react";
import { makeStyles, Card } from "@material-ui/core";
import { Star } from "@material-ui/icons";
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
    maxWidth: "50%",
    textAlign: "center",
    marginBottom: "2rem",
  },
  reviews: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "1rem",
    width: "100%",
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 800px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  cardContainer: {
    background: "white",
    borderRadius: "5px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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

  return (
    <div className={classes.root}>
      <section className={classes.contentContainer}>
        <h2>Längst erfarenhet</h2>
        <p>
          Vi på Döddsbo Sv är det självklara valet för hantering av bohag och
          dödsbo med över 50 års erfarenhet tillsammans är vi helt övetygade om
          att vi kan erbjuda dig det bästa upplägget för ditt bohag, dödsbo och
          din plånbok. Vårt upptagningsområde sträcker sig över hela Västra
          Götaland.
        </p>
      </section>
      <section className={classes.reviews}>
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
      </section>
    </div>
  );
};

export default Recensioner;
