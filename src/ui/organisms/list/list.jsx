import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '@ui';
import { ListElement, ListElementItem } from './styles';

export const List = ({list, ...props}) =>  (
  <ListElement>
    {list.map( ({id, title, text, date, complete}) => (      
      <ListElementItem key={id}>
        <Task 
          id={id}  
          title={title} 
          text={text} 
          date={date}
          complete={complete}
          {...props}
          />
      </ListElementItem>
    ))}
  </ListElement>);

List.propTypes = {
  list: PropTypes.array.isRequired
}