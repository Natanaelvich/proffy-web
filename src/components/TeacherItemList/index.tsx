import React from 'react';

import whatsappicon from '../../assets/icons/whatsapp.svg';

import './styles.css';
import { api } from '../../services/api';

interface TeacherItemProps {
  teacher: {
    id: number;
    subject: string;
    cost: string;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
  };
}

const TeacherItemList: React.FC<TeacherItemProps> = ({
  teacher: { id, subject, cost, user_id, name, avatar, whatsapp, bio },
}) => {
  async function createNewConnection() {
    api.post('connections', {
      user_id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/52014318?s=460&u=421a07220feea86f1c77c2fe365573413d010302&v=4"
          alt={name}
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>

        <a
          target="_blanck"
          onClick={createNewConnection}
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsappicon} alt="Entrar em contato" />
          <span>Entrar em contato</span>
        </a>
      </footer>
    </article>
  );
};

export default TeacherItemList;
