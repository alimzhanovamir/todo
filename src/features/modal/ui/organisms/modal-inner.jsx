import React, { useState } from 'react';
import { Button, Input, Textarea } from '@ui';
import {
  ModalElement,
  ModalElementInner,
  ModalElementHeader,
  ModalElementTitle,
  ModalElementForm,
  ModalElementFormField,
} from './styles';

export const ModalInner = ({
  dispatch, 
  addTask,
  editTask,
  closeModal,
  isEditMode,
  id,
  title, 
  text
}) => {

  const [inputValue, setInputValue] = useState( isEditMode ? title : '' );
  const [textareaValue, setTextareaValue] = useState( isEditMode ? text : '' );

  return (
    <ModalElement>
      <ModalElementInner>
        <ModalElementHeader>
          <ModalElementTitle>{isEditMode ? 'Edit' : 'New'} task</ModalElementTitle>
          <Button onClick={ () => {
            dispatch(closeModal())
            setInputValue('')
          }}>&#10060;</Button>
        </ModalElementHeader>
        <ModalElementForm onSubmit={() => {
          if ( isEditMode ) {
            dispatch(editTask({id, title: inputValue, text: textareaValue}));
          }
          else {
            dispatch(addTask({title: inputValue, text: textareaValue}));
          }
          dispatch(closeModal());
        }}>
          <ModalElementFormField>
            <Input value={inputValue} onChange={ e => setInputValue(e.target.value) } autoFocus={true}/>
          </ModalElementFormField>
          <ModalElementFormField>
            <Textarea value={textareaValue} onChange={ e => setTextareaValue(e.target.value) }/>
          </ModalElementFormField>
          <ModalElementFormField>
          <Button disabled={ inputValue ? false : true }>&#9989; { isEditMode ? 'Save' : 'Add'}</Button>
        </ModalElementFormField>
        </ModalElementForm>
      </ModalElementInner>
    </ModalElement>
  )
}