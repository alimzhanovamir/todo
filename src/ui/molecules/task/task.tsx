import React from 'react';
import PropTypes from 'prop-types';
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
            ><span role="img" aria-label='Mark as failed'>&#128683;</span></Button>
            :
            <Button
              onClick={() => dispatch(completeTask(id))}
              aria-label='Mark as done'
              title='Mark as done'
            ><span role="img" aria-label='Mark as done'>✔</span></Button>
          }

          <Button
            onClick={() => {
              dispatch(openModal(id))
            }}
            aria-label='Edit task'
            title='Edit task'
          ><span role="img" aria-label='Edit task'>&#9998;</span></Button>

          <Button
            onClick={() => dispatch(removeTask(id))}
            aria-label='Remove task'
            title='Remove task'
          ><span role="img" aria-label='Remove task'>❌</span></Button>

        </TaskElementControls>
      </TaskElementTop>
      <TaskElementBottom>
        <TaskElementDate>{date}</TaskElementDate>
      </TaskElementBottom>
    </TaskElement>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired, 
  date: PropTypes.string.isRequired, 
  complete: PropTypes.bool.isRequired, 
  openModal: PropTypes.func.isRequired, 
  dispatch: PropTypes.func.isRequired, 
  completeTask: PropTypes.func.isRequired, 
  cancelTask: PropTypes.func.isRequired, 
  removeTask: PropTypes.func.isRequired
}