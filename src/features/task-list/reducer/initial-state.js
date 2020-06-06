const loadFromLocalStorage = () => {
  const todoList = localStorage.getItem('todoList');
  if ( todoList ) return JSON.parse(todoList);
  return []
}

export const initialState = {
  sortValues: [
    {
      label: 'A-Z',
      value: 0
    },
    {
      label: 'Z-A',
      value: 1
    }
  ],

  sortValue: 0,

  sortByTypeValues: [
    {
      label: 'All',
      value: 0
    },
    {
      label: 'Active',
      value: 1
    },
    {
      label: 'Completed',
      value: 2
    }
  ],

  sortByTypeValue: 0,

  searchValue: '',

  editMode: false,

  list: loadFromLocalStorage()
}