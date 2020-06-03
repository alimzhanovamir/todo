import React from 'react';
import { Button } from '@ui/atoms/button';
import { 
  TaskElement,
  TaskElementName,
  TaskElementControls
} from './styles';


export const Task = ({ id, name, fulldate, complete, dispatch, completeTask, cancelTask, removeTask }) => {
  const h = fulldate.getHours();
  const min = fulldate.getMinutes();
  const sec = fulldate.getSeconds();
  
  return (
   <TaskElement>

      <TaskElementName complete={complete}>
        <div>
          { name }
        </div>
        {h < 10 ? '0'+h : h}:{min < 10 ? '0'+min : min}:{sec < 10 ? '0'+sec : sec}
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
          onClick={ e => alert(e.target.textContent)}
          aria-label='Отметить как выполненный'
          title='Отметить как выполненный'
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
