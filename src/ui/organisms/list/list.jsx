import React from 'react';
import { Task } from '@ui/molecules/task';
import { ListElement, ListElementItem } from './styles';

export const List = ({list, dispatch, completeTask, cancelTask, removeTask}) => {

  console.log(list);
  

  return (
    <ListElement>
      {list.map( ({id, name, fulldate, complete}) => (
        <ListElementItem key={id}>
          <Task 
            id={id} 
            fulldate={fulldate} 
            name={name} 
            complete={complete}
            completeTask={completeTask}
            cancelTask={cancelTask}
            removeTask={removeTask} 
            dispatch={dispatch}/>
        </ListElementItem>
      ))}
    </ListElement>
  );
}
