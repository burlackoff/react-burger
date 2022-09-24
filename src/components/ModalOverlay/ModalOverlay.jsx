import style from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay(props) {
  const {visible, children, onClose} = props;

  const handleOverlayClose = (e) => {
    if (e.currentTarget === e.target) {onClose()} 
  }

  return (
      <div className={visible ? `${style.modal} + ${style.modal_active}` : `${style.modal}`} onClick={handleOverlayClose}>
        {children}
      </div>
  );
}

ModalOverlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalOverlay