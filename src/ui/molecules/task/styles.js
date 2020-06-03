import styled from 'styled-components';

export const TaskElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f2f2f;
  border-radius: 3px;
  padding: 10px 10px 10px 20px;
  color: #fff;
`
export const TaskElementName = styled.div`
  flex-grow: 1;
  font-size: 16px;
  text-decoration: ${props => {
    console.log(props);
    
    return props.complete === true ? 'line-through' : 'none'
  }};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TaskElementControls =  styled.p`
  display: flex;
  margin: 0;
  font-size: 16px;

  > * + * {
    margin-left: 10px;
  }
`;