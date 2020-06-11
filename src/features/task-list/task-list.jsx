import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NoTask, List } from '@ui';
import { completeTask, cancelTask, removeTask, editTask } from './actions/actions';
import { openModal } from '@features/modal'
import { filterTheList } from './filter/filter';


export const TaskList = () => {
  const dispatch = useDispatch();
  const {
    list, 
    searchValue, 
    sortByTypeValue, 
    sortValue
  } = useSelector( ({listReducer}) => listReducer );
  
  const taskList = useMemo(() => {
    return filterTheList(list, searchValue, sortByTypeValue, sortValue)
  }, [list, searchValue, sortByTypeValue, sortValue]);
  
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
