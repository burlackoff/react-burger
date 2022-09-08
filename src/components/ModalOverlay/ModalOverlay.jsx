import React from 'react';
import ReactDOM from 'react-dom';
import style from './ModalOverlay.module.css';
import {escape} from '../../utils/constants';

const modalContainer = document.getElementById("modal");

function ModalOverlay(props) {
  const {children, onClose} = props;

  const handleEscapeClose = (e) => {
    if (e.key === escape) {onClose()}
  }

  const handleOverlayClose = (e) => {
    if (e.currentTarget === e.target) {onClose()} 
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ReactDOM.createPortal(
    (
      <div className={style.modal} onClick={handleOverlayClose}>
        {children}
      </div>
    ), 
    modalContainer
  );
}

export default ModalOverlay