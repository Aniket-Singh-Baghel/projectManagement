import PropTypes from "prop-types";
import styles from './NewProject.module.css'
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      
    };
  });
  return createPortal(
    <dialog className={styles.modal} ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

Modal.propTypes = {
  children: PropTypes.node.isRequired, // PropTypes for children
  buttonCaption: PropTypes.string.isRequired,
};

export default Modal;


