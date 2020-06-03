import React from 'react';
import { PanelElement, PanelElementField, PanelElementSearchField } from './styles';
import { FormField } from '@ui/molecules/form-field';
import { setSearchValue, setSortValue, setSortByTypeValue } from '@features/task-list';
import { openModal } from '@features/modal';

export const Panel = ({ searchValue, sortValue, sortValues, sortByTypeValue, sortByTypeValues, dispatch }) => {
  return (
    <PanelElement>

      <PanelElementSearchField>
        <FormField 
          controlType='input'
          type='search'
          id='search'
          label='Search'
          placeholder='Search'
          value={searchValue}
          onChange={ e => dispatch(setSearchValue(e.target.value)) }
        />
      </PanelElementSearchField>

      <PanelElementField>
        <FormField 
          controlType='select'
          id='sort'
          label='Sort'
          value={sortValue}
          options={sortValues}
          onChange={ e => dispatch(setSortValue(e.target.value)) }
        />
      </PanelElementField>

      <PanelElementField>
        <FormField 
          controlType='select'
          id='sortbytype'
          label='Sort by type'
          value={sortByTypeValue}
          options={sortByTypeValues}
          onChange={ e => dispatch(setSortByTypeValue(e.target.value)) }/>
      </PanelElementField>

      <PanelElementField>
        <FormField 
          controlType='button'
          id='addtask'
          label='Add'
          aria-label='add new task'
          text='&#x1F4C4;'
          onClick={ () => dispatch(openModal()) }/>
      </PanelElementField>
      
    </PanelElement>
  );
}
