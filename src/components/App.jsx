import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    // потом можно убрать и заменить на другую проверку!
    showModal: true,
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
        <Searchbar />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}

      </div>
    );
  }
}

export default App;
