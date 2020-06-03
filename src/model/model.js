import { createStore, combineReducers } from 'redux';
import { listReducer } from '@features/task-list';
import { modalReducer } from '@features/modal';

const reducers = combineReducers({listReducer, modalReducer})

export const model = createStore(reducers);
