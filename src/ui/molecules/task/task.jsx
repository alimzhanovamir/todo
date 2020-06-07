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
              aria-label='Mark as failed'
              title='Mark as outstanding'
            >&#128683;</Button>
            :
            <Button
              onClick={() => dispatch(completeTask(id))}
              aria-label='Mark as done'
              title='Mark as done'
            >✔</Button>
          }

          <Button
            onClick={() => {
              dispatch(openModal(id))
            }}
            aria-label='Edit'
            title='Edit'
          >&#9998;</Button>

          <Button
            onClick={() => dispatch(removeTask(id))}
            aria-label='Delete'
            title='Delete'
          >❌</Button>

        </TaskElementControls>
      </TaskElementTop>
      <TaskElementBottom>
        <TaskElementDate>{date}</TaskElementDate>
      </TaskElementBottom>
    </TaskElement>
  );
}
