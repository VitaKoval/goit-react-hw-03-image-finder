import React, { Component } from 'react';
import getImagePixabay from '../services/imagesAPI';
import Modal from '../Modal/Modal';
import { Gallery, GaleryTitle } from '../ui/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { LoaderSpiner } from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    showModal: false,
    images: [],
    status: 'idle',
    pageNumber: 1,
    total: 0,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.pageNumber);
    if (prevProps.keyword !== this.props.keyword) {
      this.setState({ pageNumber: 1 });
    }

    // если предыдущее ключевое слово(из пропа) не равно текущему ключевому слову (из пропа) или сравнить предыдущий pageNumber и текущий
    if (
      prevProps.keyword !== this.props.keyword ||
      prevState.pageNumber !== this.state.pageNumber
    ) {
      // console.log('делаем запросс на сервер!');
      this.setState({ status: 'pending' });

      getImagePixabay(this.state.pageNumber, this.props.keyword)
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

  

  //   toggleModal = () => {
  //   this.setState(prevState => ({ showModal: !prevState.showModal }));
  // };
  openModal = img => {
    this.setState({ showModal: true, largeImage: img });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  loadMore = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  calculateLoadPage = () => {
    const totalPage = Math.ceil(this.state.total / 12);

    return totalPage > this.state.pageNumber;
  };

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
      // console.log(this.calculateLoadPage());
      return (
        <>
          <GaleryTitle>
            Found {total} images by keyword '{keyword}'
          </GaleryTitle>
          <Gallery>
            <ImageGalleryItem images={images} onOpenModal={this.openModal} />
          </Gallery>
          {this.calculateLoadPage() && <Button loadMore={this.loadMore} />}
          {this.state.showModal && (
            <Modal
              onCloseModal={this.closeModal}
              largeImage={this.state.largeImage}
            />
          )}
        </>
      );
    }
  }
}
export default ImageGallery;
