import React from 'react';
import { PanelElement, PanelElementField, PanelElementSearchField } from './styles';
import { FormField, Button } from '@ui';
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
          label='Поиск'
          placeholder='Введите заголовок задачи'
          value={searchValue}
          onChange={ e => dispatch(setSearchValue(e.target.value)) }
        />
      </PanelElementSearchField>

      <PanelElementField>
        <FormField 
          controlType='select'
          id='sort'
          label='Сначала'
          value={sortValue}
          options={sortValues}
          onChange={ e => dispatch(setSortValue( Number(e.target.value) )) }
        />
      </PanelElementField>

      <PanelElementField>
        <FormField 
          controlType='select'
          id='sortbytype'
          label='Тип'
          value={sortByTypeValue}
          options={sortByTypeValues}
          onChange={ e => dispatch(setSortByTypeValue( Number(e.target.value) )) }/>
      </PanelElementField>

      <PanelElementField>
        <Button
          title='Добавить новую задачу'
          aria-label='Добавить новую задачу'
          onClick={ () => dispatch(openModal()) }>&#10133;</Button>
      </PanelElementField>
      
    </PanelElement>
  );
}
