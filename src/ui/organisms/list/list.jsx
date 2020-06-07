import React from 'react';
import { Task } from '@ui';
import { ListElement, ListElementItem } from './styles';

export const List = ({list, dispatch, completeTask, editTask, openModal, cancelTask, removeTask}) => {
  return (
    <ListElement>
      {list.map( ({id, title, text, date, complete}) => {
        
        return <ListElementItem key={id}>
          <Task 
            id={id}  
            title={title} 
            text={text} 
            date={date}
            complete={complete}
            completeTask={completeTask}
            editTask={editTask} 
            openModal={openModal}
            cancelTask={cancelTask}
            removeTask={removeTask} 
            dispatch={dispatch}/>
        </ListElementItem>
      })}
    </ListElement>
  );
}
