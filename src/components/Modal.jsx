import React from 'react';

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modal-btn" onClick={handleClose}>x</button>
      </section>
    </div>
  );
};