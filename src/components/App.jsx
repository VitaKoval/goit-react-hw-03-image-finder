import React, { Component } from 'react';
// import { ToastContainer} from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


class App extends Component {
  state = {
    keyword: '',
  };

  handleSearchFormSubmit = keyword => {
    // console.log(keyword);
    this.setState({ keyword });
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
        {/* <ToastContainer/> */}
      </div>
    );
  }
}



export default App;
