import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import style from './Modal.module.css';

const modalContainer = document.getElementById("modal");

function Modal({visible, onClose, data}) {

  return ReactDOM.createPortal(
    (
      <ModalOverlay visible={visible} onClose={onClose}>
        <div className={style.content}>
          {console.log(data)}
        </div>
      </ModalOverlay>
    ),
    modalContainer
  )
}

export default Modal