import { initialState } from './initial-state';
import { 
  SET_SORT_LIST,
  SET_SORT_BY_TYPE,
  // SET_LIST_FROM_LOCALSTORAGE,
  // SET_LIST_TO_LOCALSTORAGE,
  SET_SEARCH_VALUE,
  SET_SUMMARY_LIST,
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK
} from '../actions/actions';

const sortString = (a,b) => a.localeCompare(b);
const createNewTask = name => {
  const date = new Date.now();

  return {
    id: date,
    name,
    date
  }
}

export const listReducer = (prevState = initialState, action) => {
  switch (action.type) {

    case SET_SORT_LIST:
      return {
        ...prevState,
        sortValue: action.value
      };

    case SET_SORT_BY_TYPE:
      return {
        ...prevState,
        sortValue: action.value
      };

    case SET_SEARCH_VALUE:
      return {
        ...prevState,
        searchValue: action.value.toLowerCase()
      };

    case SET_SUMMARY_LIST:
      return {
        ...prevState,
        summaryList: prevState.list
          .filter( ({ name, active }) => {
            const { searchValue, sortByTypeValue, sortValue } = prevState;
            const validValues = [];

            if (searchValue) {
              const match = name.match(searchValue);
              validValues.push(match ? true : false);
            }
            else {
              validValues.push(true);
            }

            if ( sortValueByType ) {
              validValues.push( active === sortValueByType ? true : false);
            }
            else {
              validValues.push(true);
            }

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
      };

    case ADD_TASK:
      return {
        ...prevState,
        list: [...prevState.list, createNewTask(action.name)]
      };

    case EDIT_TASK:
      return {
        ...prevState,
        list: prevState.list.map( task => {
          if ( task.id === action.id ) task.name = action.name;
          return task
        })
      };

    case REMOVE_TASK:
      return {
        ...prevState,
        list: prevState.list.filter( ({ id }) => id != action.id )
      };
  
    default:
      prevState;
  }
}