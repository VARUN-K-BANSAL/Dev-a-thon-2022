import React from "react";
import { HashLink } from "react-router-hash-link";

import Iconbox from "../Icon/Iconbox";
import TextArrow from "../TextArrow/TextArrow";
import styles from "./Card.module.css";

function Card(props) {
  const {
    className = "",
    themeShadow,
    iconLink,
    learnMoreBtn = false
  } = props;
  const { id, icon = "fas fa-id-card", name, score } = props.card;

  return (
    <HashLink
      to={`/profile/${id}`}
      className={`${className !== "" ? className["card"] : ""} ${
        styles["card"]
      } ${themeShadow ? styles["theme-shadow-card"] : ""}`}
      data-aos="zoom-in"
    >
      <Iconbox className={className} icon={icon} />
      <div>
        <h4>{name}</h4>
        <p>Score : {Math.round(score * 1000) / 1000} / 10</p>
      </div>
      {iconLink}
      {learnMoreBtn && <TextArrow className={className} text="Learn More" />}
    </HashLink>
  );
}

export default Card;
