import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actions';

const initialState = {
  isOpen: false
}

export const modalReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true
      };

    case CLOSE_MODAL:
      return {
        isOpen: false
      };
  
    default:
      prevState;
  }
}