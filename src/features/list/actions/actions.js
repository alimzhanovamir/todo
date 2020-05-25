const SET_SORT_LIST = 'SET_SORT_LIST',
      SET_SORT_BY_TYPE = 'SET_SORT_BY_TYPE',
      // SET_LIST_FROM_LOCALSTORAGE = 'SET_LIST_FROM_LOCALSTORAGE',
      // SET_LIST_TO_LOCALSTORAGE = 'SET_LIST_TO_LOCALSTORAGE',
      SET_SUMMARY_LIST = 'SET_SUMMARY_LIST',
      ADD_TASK = 'ADD_TASK',
      EDIT_TASK = 'EDIT_TASK',
      SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
      REMOVE_TASK = 'REMOVE_TASK';

const setSortValue = sortType => {
  type: SET_SORT_LIST,
  sortType
};

const setSortByTypeValue = sortType => {
  type: SET_SORT_BY_TYPE,
  sortType
};

// const setListFromLocalstorage = list => {
//   type: SET_LIST_FROM_LOCALSTORAGE,
//   list
// };

// const setListToLocalstorage = list => {
//   type: SET_LIST_TO_LOCALSTORAGE
// };

const setSummaryList = () => {
  type: SET_SUMMARY_LIST
};

const addTask = name => {
  type: ADD_TASK,
  name
};

const editTask = (id, name) => {
  type: EDIT_TASK,
  id,
  name
};

const setSearchValue = name => {
  type: SET_SEARCH_VALUE,
  name
};

const removeTask = id => {
  type: REMOVE_TASK,
  id
};

export {
  SET_SORT_LIST,
  SET_SORT_BY_TYPE,
  // SET_LIST_FROM_LOCALSTORAGE,
  // SET_LIST_TO_LOCALSTORAGE,
  SET_SEARCH_VALUE,
  SET_SUMMARY_LIST,
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  setSortValue,
  setSortByTypeValue,
  // setListFromLocalstorage,
  // setListToLocalstorage,
  setSearchValue,
  setSummaryList,
  addTask,
  editTask,
  removeTask
}