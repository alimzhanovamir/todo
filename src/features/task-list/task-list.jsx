import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { List } from '@ui/organisms/list';
import { completeTask, cancelTask, removeTask, editTask } from './actions/actions';

const sortString = (a,b) => a.localeCompare(b);

export const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector( ({listReducer: { list, searchValue, sortByTypeValue, sortValue }}) => (
    list
      .filter( ({ title, complete }) => {
        const validValues = [];
        
        if (searchValue) {
          const match = title.match(searchValue);
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
            return sortString(currentTask.title, nextTask.title);
          case 1:
            return sortString(nextTask.title, currentTask.title);
          default:
            break;
        }

        return true
      })
  ));
  
  return (
    <List 
      list={taskList} 
      dispatch={dispatch} 
      completeTask={completeTask}
      cancelTask={cancelTask} 
      editTask={editTask} 
      removeTask={removeTask}/>
  )
}
