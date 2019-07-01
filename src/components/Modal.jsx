import React from 'react';

export default function Modal({ handleClose, show, gallery, title, src }) {
  let prev;
  console.log(gallery);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleLBtnClick = (e) => {
    console.log('Modal left button click! >>>', e.target);
    for (let i = 0; i < gallery.length; i += 1) {
      if (gallery[i].title === title) {

        prev = gallery[i - 1];
        console.log('>>>', gallery[i]);
        break;
      }
    }
    console.log({ gallery });
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <img src={prev} alt={title} />
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

  }

  const handleRBtnClick = (e) => {
    console.log('Modal right button click!', e);
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img src={src} alt={title} />
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