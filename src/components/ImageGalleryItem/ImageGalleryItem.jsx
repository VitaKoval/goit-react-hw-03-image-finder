import React from 'react';
import { GalleryItem, GalleryItemImage } from '../ui/ImageGalleryItem';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id} id={id} onClick={() => onOpenModal(largeImageURL)}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};
