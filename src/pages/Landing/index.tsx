import React from "react";

import "./styles.css";

import logoimg from "../../assets/images/logo.svg";
import landingimg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHart from "../../assets/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoimg} alt="proffy" />
          <h2>sua plataforma de estudos</h2>
        </div>

        <img
          src={landingimg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="#teste" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="#teste" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões ja realizadas
          <img src={purpleHart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
