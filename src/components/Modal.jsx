import React from 'react';

export default function Modal({ 
    handleClose, 
    show, 
    gallery, 
    title, 
    src, 
    handleModalLBtnClick, 
    handleModalRBtnClick, 
    prev,
    next 
  }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img 
          src={src} 
          alt={title} />
        <button className="modal-btn modal-btn-close" onClick={handleClose}>x</button>
        {!!prev ? 
          <button 
            className="modal-btn modal-btn-left"
            onClick = {handleModalLBtnClick}
            >{'<'}</button> :
            null}
        {!!next ?
          <button 
            className="modal-btn modal-btn-right"
            onClick = {handleModalRBtnClick}
            >{'>'}</button> :
            null}
      </section>
    </div>
  );
};