import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Overlay, ModalWindow } from '../ui/Modal';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // console.log('Загрузилась модалка');
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = evt => {
    if (evt.code === 'Escape') {
      // console.log('Нажали на ESC нужно акрыть модалку!');
      this.props.onCloseModal();
    }
  };

  hendleOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.hendleOverlayClick}>
        <ModalWindow>
          <img src={this.props.largeImage} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  largeImage: PropTypes.string.isRequired,
}

export default Modal;
