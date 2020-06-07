import React from 'react';
import { Task } from '@ui';
import { ListElement, ListElementItem } from './styles';

export const List = ({list, ...props}) => (
  <ListElement>
    {list.map( ({id, title, text, date, complete}) => {
      
      return <ListElementItem key={id}>
        <Task 
          id={id}  
          title={title} 
          text={text} 
          date={date}
          complete={complete}
          {...props}
          />
      </ListElementItem>
    })}
  </ListElement>
);
