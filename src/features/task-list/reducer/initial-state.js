const loadFromLocalStorage = () => {
  const todoList = localStorage.getItem('todoList');
  if ( todoList ) return JSON.parse(todoList);
  return []
}

export const initialState = {
  sortValues: [
    {
      label: 'New',
      value: 0
    },
    {
      label: 'Old',
      value: 1
    },
    {
      label: 'A-Z',
      value: 2
    },
    {
      label: 'Z-A',
      value: 3
    },
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

  list: loadFromLocalStorage()
}