const SORT_LIST = 'SORT_LIST',
      SORT_BY_TYPE = 'SORT_BY_TYPE',
      IMPORT_LIST_FROM_LOCALSTORAGE = 'IMPORT_LIST_FROM_LOCALSTORAGE',
      SET_SUMMARY_LIST = 'SET_SUMMARY_LIST',
      // TRANSFORM_SUMMARY_LIST = 'TRANSFORM_SUMMARY_LIST',
      ADD_TASK = 'ADD_TASK',
      EDIT_TASK = 'EDIT_TASK',
      SEARCH_TASKS = 'SEARCH_TASKS',
      REMOVE_TASK = 'REMOVE_TASK';

const sort = sortType => {
  type: SORT_LIST,
  sortType
};

const sortByType = sortType => {
  type: SORT_BY_TYPE,
  sortType
};

const importListFromLocalstorage = list => {
  type: IMPORT_LIST_FROM_LOCALSTORAGE,
  list
};

const setSummaryList = () => {
  type: SET_SUMMARY_LIST
};

const addTask = (id, text) => {
  type: ADD_TASK,
  text
};

const editTask = (id, text) => {
  type: EDIT_TASK,
  text
};

const searchTask = taskName => {
  type: SEARCH_TASKS,
  taskName
};

const removeTask = id => {
  type: REMOVE_TASK,
  id
};

export {
  SORT_LIST,
  SORT_BY_TYPE,
  IMPORT_LIST_FROM_LOCALSTORAGE,
  SET_SUMMARY_LIST,
  ADD_TASK,
  EDIT_TASK,
  SEARCH_TASKS,
  REMOVE_TASK,
  sort,
  sortByType,
  importListFromLocalstorage,
  setSummaryList,
  addTask,
  editTask,
  searchTask,
  removeTask
}