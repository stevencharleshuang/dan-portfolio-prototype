import React from 'react';

export default function Modal({ 
    handleClose, 
    show, 
    title, 
    src, 
    handleModalLBtnClick, 
    handleModalRBtnClick
  }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img 
          src={src} 
          alt={title} />
        <button className="modal-btn modal-btn-close" onClick={handleClose}>x</button>
          <button 
            className="modal-btn modal-btn-left"
            onClick = {handleModalLBtnClick}
            >{'<'}</button>
          <button 
            className="modal-btn modal-btn-right"
            onClick = {handleModalRBtnClick}
            >{'>'}</button>
      </section>
    </div>
  );
};