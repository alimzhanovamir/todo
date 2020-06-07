/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalInner } from './ui';
import { closeModal } from './actions/actions';
import { addTask, editTask } from '@features/task-list';

export const Modal = () => {
  
  const dispatch = useDispatch();
  const { isOpen, isEditMode, id } = useSelector( ({modalReducer}) => modalReducer );
  const { title, text } = useSelector( ({ listReducer: { list } }) => {
    if ( list.length > 0 && isEditMode ) {
      return list.find( task => task.id === id )
    }
    else {
      return {}
    }
  });

  if ( !isOpen ) return null;

  return <ModalInner 
      dispatch={dispatch} 
      addTask={addTask}
      editTask={editTask}
      closeModal={closeModal}
      isEditMode={isEditMode}
      id={id}
      title={title} 
      text={text}
    />;
}
