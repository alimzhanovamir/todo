import React from 'react';
import { Task } from '@ui/molecules/task';
import { ListElement, ListElementItem } from './styles';

export const List = ({list, dispatch, completeTask, editTask, cancelTask, removeTask}) => {
  return (
    <ListElement>
      {list.map( ({id, title, text, complete}) => (
        <ListElementItem key={id}>
          <Task 
            id={id}  
            title={title} 
            text={text} 
            complete={complete}
            completeTask={completeTask}
            editTask={editTask} 
            cancelTask={cancelTask}
            removeTask={removeTask} 
            dispatch={dispatch}/>
        </ListElementItem>
      ))}
    </ListElement>
  );
}
