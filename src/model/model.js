import { createStore, combineReducers } from 'redux';
import { listReducer } from '@features/task-list';
import { modalReducer } from '@features/modal';

const reducers = combineReducers({listReducer, modalReducer})

export const model = createStore(reducers);

let prevList = [];

const saveToLocalStorage = () => {
  const list = model.getState().listReducer.list;
  
  if ( prevList !== list ) {
    prevList = list
    localStorage.setItem('todoList', JSON.stringify(list));
  }
  
}

model.subscribe(saveToLocalStorage);