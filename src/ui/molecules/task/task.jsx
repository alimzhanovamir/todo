import React from 'react';
import { Button } from '@ui/atoms/button';
import { 
  TaskElement,
  TaskElementName,
  TaskElementControls
} from './styles';


export const Task = ({ id, title, text, complete, dispatch, completeTask, cancelTask, removeTask }) => {
  
  return (
   <TaskElement>

      <TaskElementName complete={complete}>
        <div>
          { title }
        </div>
        { text }
      </TaskElementName>

      <TaskElementControls>

        {complete ?
          <Button 
          onClick={ () => dispatch(cancelTask(id)) }
          aria-label='Отметить как невыполненное'
          title='Отметить как невыполненное'
          >&#128683;</Button>
          :
          <Button 
            onClick={ () => dispatch(completeTask(id)) }
            aria-label='Отметить как выполненный'
            title='Отметить как выполненный'
          >✔</Button>
        }

        <Button 
          onClick={ () => dispatch(openModal()) }
          aria-label='Edit'
          title='Edit'
        >&#9998;</Button>

        <Button 
          onClick={ () => dispatch(removeTask(id))}
          aria-label='Удалить'
          title='Удалить'
        >❌</Button>

      </TaskElementControls>
   </TaskElement>
  );
}
