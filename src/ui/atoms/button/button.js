import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #1e1d1c;
  border-radius: 3px;
  border: none;
  padding: 8px 10px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1em;
  outline: none;
  cursor: pointer;

  transition: background-color .3s, opacity .5s;

  &:hover, &:focus {
    background-color: #0e0e0d;
  }

  &:disabled {
    opacity: .3;
    pointer-events: none;
  }
`;

