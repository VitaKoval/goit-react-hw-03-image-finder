import React, { Component } from 'react';
import getImagePixabay from '../services/imagesAPI';
import { Gallery, GaleryTitle } from '../ui/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoaderSpiner } from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    pageNamber: 1,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    // если предыдущее ключевое слово(из пропа) не равно текущему ключевому слову (из пропа)
    if (prevProps.keyword !== this.props.keyword) {
      console.log('делаем запросс на сервер!');
      this.setState({ status: 'pending' });

      getImagePixabay(this.state.pageNamber, this.props.keyword)
        .then(({ hits, total }) => {
          // console.log(hits);
          if (total === 0) {
            return this.setState({ status: 'rejected' });
          }
          return this.setState({ images: hits, status: 'resolved', total });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    }
  }

  render() {
    const { images, status, total } = this.state;
    const { keyword } = this.props;

    if (status === 'idle') {
      return <GaleryTitle>Enter a keyword to search...</GaleryTitle>;
    }

    if (status === 'pending') {
      return (
        <GaleryTitle>
          <LoaderSpiner /> Search...
        </GaleryTitle>
      );
    }

    if (status === 'rejected') {
      return <GaleryTitle>Not found... Try another keyword</GaleryTitle>;
    }

    if (status === 'resolved') {
      return (
        <>
          <GaleryTitle>
            Found {total} images by keyword '{keyword}'
          </GaleryTitle>
          <Gallery>
            <ImageGalleryItem images={images} />
          </Gallery>
        </>
      );
    }
  }
}
export default ImageGallery;
