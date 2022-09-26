import React from 'react';
import { GalleryItem, GalleryItemImage } from '../ui/ImageGalleryItem';

export const ImageGalleryItem = ({images}) => {
  console.log(images)
  return images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id} id={id}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};
