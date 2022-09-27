import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  IconSearch,
} from '../ui/Searchbar';
// import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    keyword: '',
  };

  handleKeywordChange = evt => {
    this.setState({ keyword: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.keyword.trim() === '') {
      alert('Enter keywor for search!');
      return;
    }

    this.props.onSubmit(this.state.keyword);
    this.setState({ keyword: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <IconSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.keyword}
            onChange={this.handleKeywordChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}

export default Searchbar;
