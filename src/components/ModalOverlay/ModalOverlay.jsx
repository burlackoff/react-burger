import ReactDOM from 'react-dom';
import style from './ModalOverlay.module.css'

const modalContainer = document.getElementById("modal");

function ModalOverlay(props) {
  const {children, header, onClose} = props;

  return ReactDOM.createPortal(
    (
      <div className={style.modal}>
        <button onClick={onClose}>{header}</button>
        {children}
      </div>
    ), 
    modalContainer
  );
}

export default ModalOverlay