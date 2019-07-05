import React from 'react';

export default function Modal({ 
  show,
  showInfo, 
  src, 
  title,
  date,
  medium,
  dimensions, 
  handleClose,
  handleModalInfoMouseEnter, 
  handleModalInfoMouseLeave, 
  handleModalLBtnClick, 
  handleModalRBtnClick
}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main noselect">
        <img
          className="noselect" 
          src={src} 
          alt={title} 
          onClick={handleModalRBtnClick} />
        {!!showInfo ?
          <div className="modal-info" onMouseLeave={handleModalInfoMouseLeave}>
              <h1>{title}</h1>
              <p>  
                {date}<br />
                {medium}<br />
                {dimensions}<br />
              </p>
          </div> :
          <div className="modal-info-btn" onMouseEnter={handleModalInfoMouseEnter}>
            i
          </div>
        }
        <button 
          className="modal-btn modal-btn-close" 
          onClick={handleClose}>x</button>
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