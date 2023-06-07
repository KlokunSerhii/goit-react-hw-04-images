import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRood = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onClose();
      }
    });

    return window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  const handlerBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handlerBackdropClick}>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>,
    modalRood
  );
};

Modal.protoType = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
