import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItemList from '../../components/TeacherItemList';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
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
          <Input name="time" type="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItemList />
        <TeacherItemList />
        <TeacherItemList />
        <TeacherItemList />
        <TeacherItemList />
      </main>
    </div>
  );
};

export default TeacherList;
