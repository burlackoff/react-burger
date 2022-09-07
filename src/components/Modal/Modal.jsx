import style from './Modal.module.css';

function Modal({visible, open}) {
  return (
    <div className={visible ? `${style.modal} + ${style.modalActive}` : ''} onClick = {() => open(false)}> 
      <div className={style.content}>
        
      </div>
    </div>
  )
}

export default Modal