import styled from 'styled-components';
import { FormFieldElement } from '@ui';

export const ModalElement = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.95);
  padding: 10px;
`;

export const ModalElementInner = styled.div`
  width: 340px;
  background-color: #2f2f2f;
  border-radius: 3px;
  padding: 20px;
`;

export const ModalElementHeader = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e1d1c;
  margin: 0 0 15px;
  padding-bottom: 10px;
`;

export const ModalElementForm = styled.form`
  > ${FormFieldElement} {
    margin-bottom: 10px;
  }
`

export const ModalElementFormBottom = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const ModalElementTitle = styled.span`
  font-size: 20px;
`;
