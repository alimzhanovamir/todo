import styled from 'styled-components';

export const TaskElement = styled.div`
  background-color: #2f2f2f;
  border-radius: 3px;
  padding: 10px 10px 10px 20px;
  color: #fff;
`;

export const TaskElementTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const TaskElementBottom = styled.div`
  border-top: 1px solid #1e1d1c;
  margin: 10px 0 0;
  padding-top: 5px;
`;

export const TaskElementData = styled.div`
  flex-grow: 1;
`;

export const TaskElementName = styled.p`
  margin: 0;
  font-size: 16px;
  text-decoration: ${ props => {
    return props.complete === true ? 'line-through' : 'none'
  }};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TaskElementDesc = styled.p`
  margin: 10px 0 0;
  font-size: 13px;
  text-decoration: ${ props => {
    return props.complete === true ? 'line-through' : 'none'
  }};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TaskElementDate = styled.p`
  margin: 0;
  color: #949494;
  font-size: 12px;
  text-align: right;
`;

export const TaskElementControls =  styled.p`
  display: flex;
  margin: 0;
  font-size: 16px;

  > * + * {
    margin-left: 10px;
  }
`;