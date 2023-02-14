import React from 'react';
import { Button } from '@ui';
import {
  TaskElement,
  TaskElementTop,
  TaskElementBottom,
  TaskElementData,
  TaskElementName,
  TaskElementDesc,
  TaskElementDate,
  TaskElementControls
} from './styles';


export const Task = ({ 
  id, 
  title, 
  text, 
  date, 
  complete, 
  openModal, 
  dispatch, 
  completeTask, 
  cancelTask, 
  removeTask }) => {

  return (
    <TaskElement>
      <TaskElementTop>
        <TaskElementData>
          <TaskElementName complete={complete}>{title}</TaskElementName>
          <TaskElementDesc complete={complete}>{text}</TaskElementDesc>
        </TaskElementData>
        <TaskElementControls>

          {complete ?
            <Button
              onClick={() => dispatch(cancelTask(id))}
              aria-label='Отметить как активное'
              title='Отметить как активное'
            >&#128683;</Button>
            :
            <Button
              onClick={() => dispatch(completeTask(id))}
              aria-label='Отметить как выполненное'
              title='Отметить как выполненное'
            >✔</Button>
          }

          <Button
            onClick={() => {
              dispatch(openModal(id))
            }}
            aria-label='Редактировать'
            title='Редактировать'
          >&#9998;</Button>

          <Button
            onClick={() => dispatch(removeTask(id))}
            aria-label='Удалить'
            title='Удалить'
          >&#10060;</Button>

        </TaskElementControls>
      </TaskElementTop>
      <TaskElementBottom>
        <TaskElementDate>{date}</TaskElementDate>
      </TaskElementBottom>
    </TaskElement>
  );
}
