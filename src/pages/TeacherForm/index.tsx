import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import Input from '../../components/Input';
import warningIcon from '../../assets/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post('classes', {
        name,
        avatar,
        whatsapp,
        cost,
        subject,
        bio,
        schedule: schedules,
      });
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
    }
  }

  function setSchueduleItemVaule(
    position: number,
    field: string,
    value: string
  ) {
    const newArray = schedules.map((item, index) =>
      index === position ? { ...item, [field]: value } : item
    );

    setSchedules(newArray);
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

            {schedules.map((s, index) => (
              <div key={s.week_day + 1} className="scheldule-item">
                <Select
                  value={s.week_day}
                  onChange={(text) => {
                    setSchueduleItemVaule(index, 'week_day', text.target.value);
                  }}
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
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={s.from}
                  onChange={(text) => {
                    setSchueduleItemVaule(index, 'from', text.target.value);
                  }}
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={s.to}
                  onChange={(text) => {
                    setSchueduleItemVaule(index, 'to', text.target.value);
                  }}
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Acviso important" />
              Important! <br />
              Preencha todos os dados
            </p>
            <button disabled={loading} type="submit">
              {loading ? '...' : 'Salvar cadastro'}
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
