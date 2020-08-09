import React from "react";

import whatsappicon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

const TeacherItemList: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/52014318?s=460&u=421a07220feea86f1c77c2fe365573413d010302&v=4"
          alt="Natanael"
        />
        <div>
          <strong>Natanael lima</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button>
          <img src={whatsappicon} alt="Entrar em contato" />
          <span>Entrar em contato</span>
        </button>
      </footer>
    </article>
  );
};

export default TeacherItemList;
