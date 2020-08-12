import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import Input from '../../components/Input';
import warningIcon from '../../assets/icons/warning.svg';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse
formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="const" label="Custo da sua hora por aula" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Acviso important" />
            Important! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
