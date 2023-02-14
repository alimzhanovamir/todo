import React from 'react';
import { FormFieldElement } from './styles';
import { Input, Select, Label, Button, Textarea } from '@ui';

export const FormField = (props) => {
  const {controlType, label = '', id = '', options = [], text = '', ariaLabel = ''} = props;
  
  const selectControl = (controlType) => {
    switch (controlType) {
      case 'input':
        return <Input {...props} aria-label={ariaLabel} />

      case 'select':
        return <Select {...props} aria-label={ariaLabel} >
                 {options.map( ({value, label}) => <option value={value} key={value}>{label}</option>)}
               </Select>

      case 'button': 
        return <Button {...props} aria-label={ariaLabel} >{text}</Button>

      case 'text': 
        return <Textarea {...props} aria-label={ariaLabel} /> 
        
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
