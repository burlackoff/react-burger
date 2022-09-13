import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {escape} from '../../utils/constants';

const modalContainer = document.getElementById("modal");

function Modal({visible, onClose, children, title}) {


  React.useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.key === escape) {onClose()}
    }
    
    if (visible) {
      document.addEventListener('keydown', handleEscapeClose);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return ReactDOM.createPortal(
    (
      <ModalOverlay visible={visible} onClose={onClose} >
        <div className={style.modal}>
          <div className={style.titleBox}>
            <h2 className='text text_type_main-large'>
              {title}
            </h2>
            <CloseIcon type="primary" onClick={onClose}/>
          </div>
          <div className={style.content}>
            {children}
          </div>
        </div>
      </ModalOverlay>
    ),
    modalContainer
  )
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal