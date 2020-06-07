import React from 'react';
import { FormFieldElement } from './styles';
import { Input, Select, Label, Button } from '@ui';

export const FormField = (props) => {
  const {controlType, label = '', id = '', options = [], text = ''} = props;
  
  const selectControl = (controlType) => {
    switch (controlType) {
      case 'input':
        return <Input {...props}/>
      case 'select':
        return <Select {...props}>
                 {options.map( ({value, label}) => <option value={value} key={value}>{label}</option>)}
               </Select>
      case 'button': 
        return <Button {...props}>{text}</Button>
      default:
        return null
    }
  }

  return (
    <FormFieldElement>
      <Label htmlFor={id}>{ label }</Label>
      { selectControl(controlType) }
    </FormFieldElement>
  );
}
