const loadFromLocalStorage = () => {
  const todoList = localStorage.getItem('todolist');
  if ( todoList ) return JSON.parse(todoList);
  return []
}

export const initialState = {
  sortValues: [{
      label: 'Date A-Z',
      value: 0
    },
    {
      label: 'Date Z-A',
      value: 1
    },
    {
      label: 'A-Z',
      value: 2
    },
    {
      label: 'Z-A',
      value: 3
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

  list: []
  // list: loadFromLocalStorage()
}