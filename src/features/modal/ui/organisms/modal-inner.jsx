import React, { useState } from 'react';
import { Button, Input, Textarea } from '@ui';
import {
  ModalElement,
  ModalElementInner,
  ModalElementHeader,
  ModalElementTitle,
  ModalElementForm,
  ModalElementFormBottom,
} from './styles';
import { FormField } from '@ui';

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
          <ModalElementTitle>{isEditMode ? 'Редактирование' : 'Создание новой'} задачи</ModalElementTitle>
          <Button
            title='Закрыть'
            aria-label='Закрыть'
            onClick={ () => {
              dispatch(closeModal())
              setInputValue('')
            }}
          >&#10062;</Button>
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
          <FormField
            controlType='input'
            label='Заголовок'
            autoFocus={true}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FormField
            controlType='text'
            label='Описание'
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <ModalElementFormBottom>
            <Button disabled={ inputValue ? false : true }>&#9989; { isEditMode ? 'Сохранить' : 'Добавить'}</Button>
          </ModalElementFormBottom>
        </ModalElementForm>
      </ModalElementInner>
    </ModalElement>
  )
}