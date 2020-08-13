import React, { useState, FormEvent } from 'react';
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

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    console.log(name, avatar, whatsapp, cost, subject, bio);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse
formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              value={name}
              onChange={(text) => setName(text.target.value)}
              name="name"
              label="Nome Completo"
            />
            <Input
              value={avatar}
              onChange={(text) => setAvatar(text.target.value)}
              name="avatar"
              label="Avatar"
            />
            <Input
              value={whatsapp}
              onChange={(text) => setWhatsapp(text.target.value)}
              name="whatsapp"
              label="Whatsapp"
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              value={subject}
              onChange={(text) => setSubject(text.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Fisica', label: 'Educação Fisica' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Historia', label: 'Historia' },
              ]}
              name="subject"
              label="Matéria"
            />
            <Input
              value={cost}
              onChange={(text) => setCost(text.target.value)}
              name="cost"
              label="Custo da sua hora por aula"
            />
            <TextArea
              value={bio}
              onChange={(text) => setBio(text.target.value)}
              name="bio"
              label="Biografia"
            />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
