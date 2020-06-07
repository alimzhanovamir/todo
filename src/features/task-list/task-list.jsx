import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NoTask, List } from '@ui';
import { completeTask, cancelTask, removeTask, editTask } from './actions/actions';
import { openModal } from '@features/modal'

const sortString = (a,b) => a.localeCompare(b);

export const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector( ({listReducer: { list, searchValue, sortByTypeValue, sortValue }}) => (
    list
      .filter( ({ title, complete }) => {
        const validValues = [];
        
        if (searchValue) {
          const match = title.toLowerCase().match(searchValue);
          validValues.push(match ? true : false);
        }
        else {
          validValues.push(true);
        }
        
        switch (sortByTypeValue) {
          case 1:
            validValues.push( complete === false);
            break;

          case 2:
            validValues.push( complete === true);
            break;
        
          default:
            validValues.push(true);
            break;
        }

        return validValues.every(val => val)

      })
      .sort( (currentTask, nextTask) => {
        switch (sortValue) {
          case 0:
            return nextTask.dateForSort - currentTask.dateForSort;
          case 1:
            return currentTask.dateForSort - nextTask.dateForSort;
          case 2:
            return sortString(currentTask.title, nextTask.title);
          case 3:
            return sortString(nextTask.title, currentTask.title);
          default:
            break;
        }

        return true
      })
  ));
  
  if ( taskList.length < 1 ) return (
    <NoTask>You have no scheduled tasks. Add?</NoTask>
  );

  return (
    <List 
      list={taskList} 
      dispatch={dispatch} 
      completeTask={completeTask}
      cancelTask={cancelTask} 
      openModal={openModal}
      editTask={editTask} 
      removeTask={removeTask}/>
  )
}
