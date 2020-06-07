import React from 'react';
import { Panel } from '@ui';
import { useSelector, useDispatch } from 'react-redux';

export const TaskBar = (props) => {
  const {
    sortValues, 
    sortValue, 
    sortByTypeValues, 
    sortByTypeValue, 
    searchValue
  } = useSelector( ({listReducer}) => listReducer );

  const dispatch = useDispatch();
  
  return (
    <Panel
      searchValue={searchValue}
      sortValues={sortValues}
      sortValue={sortValue}
      sortByTypeValues={sortByTypeValues}
      sortByTypeValue={sortByTypeValue}
      dispatch={dispatch}
    />
  );
}
