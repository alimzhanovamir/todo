import styled from 'styled-components';

export const Input = styled.input`
  display: inline-flex;
  align-items: center;
  width: 100%;
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
    box-shadow: 0px 1px 5px 0px #3e3e3e;
  }
`;