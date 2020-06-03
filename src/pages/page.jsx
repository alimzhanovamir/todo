import React from 'react';
import { Container } from './styles';
import { TaskBar } from '@features/task-bar';
import { TaskList } from '@features/task-list';
import { Modal } from '@features/modal';

export const MainPage = (props) => {
  return (
    <Container>
      <TaskBar/>
      <TaskList/>
      <Modal/>
    </Container>
  );
}
