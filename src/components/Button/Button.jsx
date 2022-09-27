import React from 'react';
import { ButtonLoadMore } from '../ui/Button';

export const Button = ({ loadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={() => loadMore()}>
      Load more
    </ButtonLoadMore>
  );
};
