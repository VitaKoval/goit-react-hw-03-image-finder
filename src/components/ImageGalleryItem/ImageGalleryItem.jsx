import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from '../ui/ImageGalleryItem';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id} id={id} onClick={() => onOpenModal(largeImageURL)}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
onOpenModal: PropTypes.func,
}
