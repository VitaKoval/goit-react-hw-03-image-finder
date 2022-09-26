import React, { Component } from 'react';

// import { ToastContainer} from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    keyword: '',
    // потом можно убрать и заменить на другую проверку!
    showModal: true,
  };

  handleSearchFormSubmit = keyword => {
    // console.log(keyword);
    this.setState({ keyword });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery keyword={this.state.keyword} />
        {/* {this.state.showModal && <Modal onClose={this.toggleModal} />} */}
        {/* <ToastContainer/> */}
      </div>
    );
  }
}

export default App;
