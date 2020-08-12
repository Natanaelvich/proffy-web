import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItemList from '../../components/TeacherItemList';
import Input from '../../components/Input';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week-day" label="Hora" />
          <Input name="time" type="time" label="Whatsapp" />
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
