import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './Modal.module.css';


const modalContainer = document.getElementById("modal");

function Modal({visible, onClose, children, title=true}) {

  return ReactDOM.createPortal(
    (
      <ModalOverlay visible={visible} onClose={onClose}>
        <div className={style.modal}>
          <div className={style.titleBox}>
            <h2 className='text text_type_main-large'>
              {title ? 'Детали ингредиента' : ''}
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

export default Modal