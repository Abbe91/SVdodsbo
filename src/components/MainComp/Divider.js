import React from "react";
import proffs from "../../utils/images/Expert help.png";
import "./Divider.css";
const Divider = () => {
  return (
    <div className="divider-container">
      <img
        className="divider-image"
        src={proffs}
        alt="tömma lägenheter"
        title="tömma lägenheter"
      />
      <section className="divider-text">
        <h2 className="divider-heading">Låt experterna hjälpa dig!</h2>
        <p className="divider-paragraph">
          Vårt kunniga och erfarna team arbetar snabbt och effektivt för att
          underlätta för våra kunder under svåra tider.
        </p>
      </section>
    </div>
  );
};

export default Divider;
