/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@ui/atoms/button';
import { Input } from '@ui/atoms/input';
import { Textarea } from '@ui/atoms/textarea';
import { closeModal } from './actions/actions';
import { addTask } from '@features/task-list';


const ModalElement = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.95); 
`;

const ModalElementInner = styled.div`
  width: 340px;
  background-color: #2f2f2f;
  border-radius: 3px;
  padding: 20px;
`;

const ModalElementHeader = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e1d1c;
  margin: 0 0 15px;
  padding-bottom: 10px;
`;

const ModalElementForm = styled.p`
  display: flex;
  margin: 0 0 15px;

  &:last-child {
    margin-bottom: 0;
  }

  ${Button} {
    margin-left: auto;
  }
`;

const ModalElementTitle = styled.span`
  font-size: 20px;
`;

export const Modal = (props) => {
  const {title, text} = useSelector( ({ listReducer }) => listReducer.list.find( task => task.id === id ) )
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const isOpen = useSelector( ({modalReducer: { isOpen }}) => isOpen );
  const editMode = useSelector( ({listReducer: { editMode }}) => editMode);
  const dispatch = useDispatch();
  
  if ( !isOpen ) return null;

  return (
    <ModalElement>
      <ModalElementInner>
        <ModalElementHeader>
          <ModalElementTitle>Add new task</ModalElementTitle>
          <Button onClick={ () => {
            dispatch(closeModal())
            setInputValue('')
          }}>&#10060;</Button>
        </ModalElementHeader>
        <ModalElementForm>
          <Input value={inputValue} onChange={ e => setInputValue(e.target.value) } autoFocus={true}/>
        </ModalElementForm>
        <ModalElementForm>
          <Textarea value={textareaValue} onChange={ e => setTextareaValue(e.target.value) }/>
        </ModalElementForm>
        <ModalElementForm>
          <Button 
            disabled={ inputValue && textareaValue ? false : true }
            onClick={ () => {
              dispatch(addTask({title: inputValue, text: textareaValue}));
              dispatch(closeModal());
              setInputValue('');
              setTextareaValue('');
            }}
          >&#9989; Add</Button>
        </ModalElementForm>
      </ModalElementInner>
    </ModalElement>
  );
}
