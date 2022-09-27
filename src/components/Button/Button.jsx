import React from 'react';
import PropTypes from 'prop-types'

import { ButtonLoadMore } from '../ui/Button';

export const Button = ({ loadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={() => loadMore()}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
}
