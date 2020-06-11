import React from 'react';
import { Container } from './styles';
import { TaskBar } from '@features/task-bar';
import { TaskList } from '@features/task-list';
import { Modal } from '@features/modal';

export const MainPage = () => {
  return (
    <Container>
      <TaskBar/>
      <TaskList/>
      <Modal/>
    </Container>
  );
}
