import React from 'react';

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modal-btn modal-btn-close" onClick={handleClose}>x</button>
        <button className="modal-btn modal-btn-right">{'>'}</button>
        <button className="modal-btn modal-btn-left">{'<'}</button>
      </section>
    </div>
  );
};