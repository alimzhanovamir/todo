# Features struture:

## `Toolbar`
### Functional:
#### Components
- Search:
  - action: `SEARCH_TASKS`
  - default value: `''`  

- Add task button:
  - action: `OPEN_MODAL`  



## `List`
#### Components
- Sort:
  - action: `SORT_LIST`
  - values: `'New'`, `'Old'`
  - default value: `'New'`  

- Sort by type:
  - action: `SORT_BY_TYPE`
  - values: `all`, `active`, `completed`,
  - default value: `all`  

#### BLL
- Reducer:  
    initialState = {  
      list: `[]`,  
      sort: `''`,  
      sortByType: `''`,  
      search: `''`,  
      summaryList: `[]`  
    }  

- Actions:  
  `SORT_LIST`,  
  `SORT_BY_TYPE`,  
  `IMPORT_LIST_FROM_LOCALSTORAGE`,  
  `ADD_TASK`,  
  `SEARCH_TASKS`,  
  `SET_SUMMARY_LIST`,  
  `REMOVE_TASK`,  
  `EDIT_TASK`,  
  `TRANSFORM_SUMMARY_LIST`



## `Task`
#### Components
- Task name:
  - value: `task name` from state

- Edit task button:
  - action:  
    `OPEN_MODAL`

- Remove task button:
  - action:  
    `REMOVE_TASK`



## `Modal`
#### Components
- Input:
  - value: `''` or `task name` from state if it is editing

- Edit task button:
  - action:  
    `EDIT_TASK`

- Close modal:
  - action:  
    `OPEN_MODAL`

#### BLL
- Reducer: `modal`  
  initialState = {  
    isOpen: `false`  
  }  

- Actions:  
  `OPEN_MODAL`,  
  `CLOSE_MODAL`