import React, { useState, useEffect } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHart from '../../assets/icons/purple-heart.svg';
import { api } from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadTotalConnections() {
      const response = await api.get('connections');

      setTotalConnections(response.data.total);
    }

    loadTotalConnections();
  }, []);

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
          <Link to="study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões ja realizadas
          <img src={purpleHart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
