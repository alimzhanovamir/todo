import styled from 'styled-components';

export const Select = styled.select`
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-width: 100px;
  height: 30px;
  background-color: #1e1d1c;
  border-radius: 3px;
  border: none;
  padding: 0 8px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1em;
  outline: none;
  cursor: pointer;

  transition: box-shadow .3s;

  &:focus {
    box-shadow: 0px 3px 10px 1px #3e3e3e;
  }
`;
