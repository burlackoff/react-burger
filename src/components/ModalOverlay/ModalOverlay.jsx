import { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './ModalOverlay.module.css'

const modal = document.getElementById("modal");

class ModalOverlay extends Component {
  static _body = document.querySelector('body')
  static _escape = 'Escape'

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  openModal() {
    ModalOverlay._body.style.overflow = 'hidden';

  }

  closeModal() {
    
  }

  render() {
    return ReactDOM.createPortal(
      (
        <>
            <div className={style.modal}>
            </div>
        </>
      ), 
      modal
    );
  }
}

export default ModalOverlay