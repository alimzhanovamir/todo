import { initialState } from './initial-state';
import { 
  SET_SORT_LIST,
  SET_SORT_BY_TYPE,
  SET_SEARCH_VALUE,
  ADD_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  CANCEL_TASK,
  REMOVE_TASK
} from '../actions/actions';

const createNewTask = name => {
  const date = Date.now();
  const fulldate = new Date();

  return {
    id: date,
    name,
    date,
    fulldate,
    complete: false
  }
}

export const listReducer = (prevState = initialState, action) => {
  switch (action.type) {

    case SET_SORT_LIST:
      return {
        ...prevState,
        sortValue: action.payload
      };

    case SET_SORT_BY_TYPE:
      return {
        ...prevState,
        sortByTypeValue: action.payload
      };

    case SET_SEARCH_VALUE:
      return {
        ...prevState,
        searchValue: action.payload
      };

    case ADD_TASK:
      return {
        ...prevState,
        list: [...prevState.list, createNewTask(action.payload)]
      };

    case EDIT_TASK:
      return {
        ...prevState,
        list: prevState.list.map( task => {
          if ( task.id === action.id ) task.name = action.payload;
          return task
        })
      };

    case COMPLETE_TASK:
      return {
        ...prevState,
        list: prevState.list.map( task => {
          if (task.id === action.payload) task.complete = true;
          return task
        })
      };

    case CANCEL_TASK:
      return {
        ...prevState,
        list: prevState.list.map( task => {
          if (task.id === action.payload) task.complete = false;
          return task
        })
      };

    case REMOVE_TASK:
      return {
        ...prevState,
        list: prevState.list.filter( ({ id }) => id !== action.payload )
      };
  
    default:
      return prevState;
  }
}