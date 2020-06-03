import React from 'react';
import { FormFieldElement } from './styles';
import { Input } from '@ui/atoms/input';
import { Select } from '@ui/atoms/select';
import { Label } from '@ui/atoms/label';
import { Button } from '@ui/atoms/button';

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
    }
  }

  return (
    <FormFieldElement>
      <Label htmlFor={id}>{ label }</Label>
      { selectControl(controlType) }
    </FormFieldElement>
  );
}
