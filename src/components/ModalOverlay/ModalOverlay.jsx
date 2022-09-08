import React from 'react';
import style from './ModalOverlay.module.css';
import {escape} from '../../utils/constants';

function ModalOverlay(props) {
  const {visible, children, onClose} = props;

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

  return (
      <div className={visible ? `${style.modal} + ${style.modalActive}` : `${style.modal}`} onClick={handleOverlayClose}>
        {children}
      </div>
  );
}

export default ModalOverlay