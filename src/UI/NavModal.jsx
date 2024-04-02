import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const NavModal = ({ children, open, className }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return ReactDOM.createPortal(
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"></div>
      )}
      <dialog
        ref={dialog}
        className={`rounded-md bg-white px-8 py-4 ${className}`} // Applying white background color
      >
        {children}
      </dialog>
    </>,
    document.getElementById("wishModal-root"),
  );
};

export default NavModal;
