import React, { Component } from 'react';
import axios from 'axios';
import { Gallery, GaleryTitle } from '../ui/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '29605366-6e90110b2388a1c27ba35efcd',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

async function getImagePixabay(pageNamber, keyword) {
  try {
    const { data } = await axios.get(``, {
      params: {
        page: pageNamber,
        q: keyword,
      },
    });
    console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

class ImageGallery extends Component {
  state = { images: [], status: 'idle', pageNamber: 1, total: 0, };

  componentDidUpdate(prevProps, prevState) {
    // если предыдущее ключевое слово(из пропа) не равно текущему ключевому слову (из пропа)
    if (prevProps.keyword !== this.props.keyword) {
      console.log('делаем запросс на сервер!');
      this.setState({ status: 'pending' });

      getImagePixabay(this.state.pageNamber, this.props.keyword)
        .then(({ hits, total }) => {
          console.log(hits);
          if (total === 0) {
            return this.setState({ status: 'rejected' });
          }
          return this.setState({ images: hits, status: 'resolved', total });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    }
  }

  render() {
    if (this.state.status === 'idle') {
      return <GaleryTitle>Enter a keyword to search...</GaleryTitle>;
    }

    if (this.state.status === 'pending') {
      return <GaleryTitle>Search...</GaleryTitle>;
    }

    if (this.state.status === 'rejected') {
      return <GaleryTitle>Not found... Try another keyword</GaleryTitle>;
    }

    if (this.state.status === 'resolved') {
      return (
        <>
          <GaleryTitle> Found { this.state.total} images by keyword '{this.props.keyword}'</GaleryTitle>
          <Gallery>
            <ImageGalleryItem images={this.state.images} />
          </Gallery>
        </>
      );
    }
  }
}
export default ImageGallery;
