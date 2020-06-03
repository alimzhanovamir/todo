import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { List } from '@ui/organisms/list';
import { completeTask, cancelTask, removeTask } from './actions/actions';

const sortString = (a,b) => a.localeCompare(b);

export const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector( ({listReducer: { list, searchValue, sortByTypeValue, sortValue }}) => (
    list
      .filter( ({ name, complete }) => {
        const validValues = [];

        if (searchValue) {
          const match = name.match(searchValue);
          validValues.push(match ? true : false);
        }
        else {
          validValues.push(true);
        }

        console.log(sortByTypeValue);
        
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

        console.log(validValues);

        return validValues.every(val => val)

      })
      .sort( (currentTask, nextTask) => {
        switch (sortValue) {
          case 0:
            return currentTask.date - nextTask.date;
          case 1:
            return nextTask.date - currentTask.date;
          case 2:
            return sortString(currentTask.name, nextTask.name);
          case 3:
            return sortString(nextTask.name, currentTask.name);
          default:
            break;
        }
      })
  ));
  
  return (
    <List 
      list={taskList} 
      dispatch={dispatch} 
      completeTask={completeTask}
      cancelTask={cancelTask}
      removeTask={removeTask}/>
  )
}
