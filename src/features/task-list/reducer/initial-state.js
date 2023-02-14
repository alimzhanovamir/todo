const loadFromLocalStorage = () => {
  const todoList = localStorage.getItem('todoList');
  if ( todoList ) return JSON.parse(todoList);
  return []
}

export const initialState = {
  sortValues: [
    {
      label: 'Новые',
      value: 0
    },
    {
      label: 'Старые',
      value: 1
    },
  ],

  sortValue: 0,

  sortByTypeValues: [
    {
      label: 'Все',
      value: 0
    },
    {
      label: 'Активные',
      value: 1
    },
    {
      label: 'Выполненные',
      value: 2
    }
  ],

  sortByTypeValue: 0,

  searchValue: '',

  list: loadFromLocalStorage()
}