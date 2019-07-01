import React from 'react';

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleLBtnClick = (e) => {
    console.log('Modal left button click!', e);
  }

  const handleRBtnClick = (e) => {
    console.log('Modal right button click!', e);
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modal-btn modal-btn-close" onClick={handleClose}>x</button>
        <button 
          className="modal-btn modal-btn-left"
          onClick = {handleLBtnClick}
          >{'<'}</button>
        <button 
          className="modal-btn modal-btn-right"
          onClick = {handleRBtnClick}
          >{'>'}</button>
      </section>
    </div>
  );
};