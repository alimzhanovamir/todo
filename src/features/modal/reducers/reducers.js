import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actions';

const initialState = {
  isOpen: false,
  edittableTaskId: null
}

export const modalReducer = (prevState = initialState, action) => {
  switch (action.type) {
    
    case OPEN_MODAL:
      return {
        isOpen: true,
        isEditMode: action.payload ? true : false,
        id: action.payload ? action.payload : null
      };

    case CLOSE_MODAL:
      return {
        isOpen: false,
        isEditMode: false,
        id: null
      };
  
    default:
      return prevState;
  }
}