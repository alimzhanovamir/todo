import styled from 'styled-components';

export const ListElement = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListElementItem = styled.li`
  & + & {
    margin-top: 10px;
  }
`;