import styled from 'styled-components';

export const PanelElement = styled.div`
  position: sticky;
  top: 15px;
  display: flex;
  align-items: flex-end;
  background-color: #2f2f2f;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 -15px 0 25px #1e1d1c;
`;

export const PanelElementField = styled.div`
  & + & {
    margin-left: 10px;
  }
`;

export const PanelElementSearchField = styled(PanelElementField)`
  flex-grow: 1;

  & + ${PanelElementField} {
    margin-left: 10px;
  }
`;