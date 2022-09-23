import React from 'react';

import { Header, SearchForm, SearchFormButton, SearchFormInput, IconSearch } from "../ui/Searchbar";

export const Searchbar = () => {
  return (
    <Header>
      <SearchForm>
        <SearchFormButton type="submit">
         <IconSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;
