import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import Input from '../../components/Input';
import warningIcon from '../../assets/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [bio, setBio] = useState('');

  const [schedules, setSchedules] = useState<ScheduleItem[]>([
    {
      week_day: 0,
      from: '8:00 AM',
      to: '4:00',
    },
  ]);

  function addNewScheduleItem() {
    setSchedules([
      ...schedules,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

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
          <Input name="cost" label="Custo da sua hora por aula" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem} type="button">
              + Novo horário
            </button>
          </legend>

          {schedules.map((s) => (
            <div key={s.week_day} className="scheldule-item">
              <Select
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda' },
                  { value: '2', label: 'Terça' },
                  { value: '3', label: 'Quarta' },
                  { value: '4', label: 'Quinta' },
                  { value: '5', label: 'Sexta' },
                  { value: '6', label: 'Sabado' },
                ]}
                name="week-day"
                label="Dia da Semana"
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
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
