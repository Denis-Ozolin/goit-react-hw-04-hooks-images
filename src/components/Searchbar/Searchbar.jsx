import { useState } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState(() => '');

  const onChangeValue = e => {
    const value = e.currentTarget.value;

    setInputValue(value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(inputValue);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <SearchInput
          onChange={onChangeValue}
          value={inputValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchContainer>
  );
}
