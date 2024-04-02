import React, { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaption = "Close" }, ref) => {
  const dialog = useRef(); // this will connect with the dialog element

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return ReactDOM.createPortal(
    //element should be render
    <dialog
      ref={dialog}
      className="rounded bg-[#f4c7c7] px-2 py-2 shadow-lg  backdrop:bg-stone-900/90"
    >
      {children}

      <form method="dialog" className="flex justify-end px-2">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    // Root where the modal should be render
    document.getElementById("modal-root"),
  );
});

export default Modal;
