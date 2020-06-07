export const SET_SORT_LIST    = 'SET_SORT_LIST';
export const SET_SORT_BY_TYPE = 'SET_SORT_BY_TYPE';
export const SET_SUMMARY_LIST = 'SET_SUMMARY_LIST';
export const ADD_TASK         = 'ADD_TASK';
export const EDIT_TASK        = 'EDIT_TASK';
export const COMPLETE_TASK    = 'COMPLETE_TASK';
export const CANCEL_TASK    = 'CANCEL_TASK';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const REMOVE_TASK      = 'REMOVE_TASK';

const createDate = d => {
  const getСorrectUnit = unit => unit < 10 ? '0'+unit : unit;
  const day = d.getDate();
  const m = d.getMonth();
  const y = d.getFullYear();
  const h = d.getHours();
  const min = d.getMinutes();

  return `${getСorrectUnit(day)}/${getСorrectUnit(m)}/${getСorrectUnit(y)} ${getСorrectUnit(h)}:${getСorrectUnit(min)}`
}

const addTaskCreationData = () => {
  const date = new Date();
  const dateForSort = Date.now();
  return {
    dateForSort,
    date: createDate(date),
    id: dateForSort,
    complete: false
  }
};

export const setSortValue = payload => ({
  type: SET_SORT_LIST,
  payload
});

export const setSortByTypeValue = payload => ({
  type: SET_SORT_BY_TYPE,
  payload
});

export const setSummaryList = () => ({
  type: SET_SUMMARY_LIST
});

export const addTask = payload => ({
  type: ADD_TASK,
  payload: {...payload, ...addTaskCreationData()}
});

export const editTask = payload => ({
  type: EDIT_TASK,
  payload
});

export const completeTask = payload => ({
  type: COMPLETE_TASK,
  payload
});

export const cancelTask = payload => ({
  type: CANCEL_TASK,
  payload
});

export const setSearchValue = payload => ({
  type: SET_SEARCH_VALUE,
  payload
});

export const removeTask = payload => ({
  type: REMOVE_TASK,
  payload
});