import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItemList from '../../components/TeacherItemList';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { api } from '../../services/api';

interface TeacherItem {
  id: number;
  subject: string;
  cost: string;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

const TeacherList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [teachers, setTeachers] = useState<TeacherItem[]>([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.get('classes', {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      });

      setLoading(false);
      setTeachers(response.data);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            onChange={(text) => setSubject(text.target.value)}
            value={subject}
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
          <Select
            onChange={(text) => setWeekDay(text.target.value)}
            value={weekDay}
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
            onChange={(text) => setTime(text.target.value)}
            value={time}
            name="time"
            type="time"
            label="Hora"
          />
          <button type="submit">{loading ? '...' : 'Buscar'}</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((t) => (
          <TeacherItemList key={t.id} teacher={t} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
