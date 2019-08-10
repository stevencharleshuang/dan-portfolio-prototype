import React from 'react';
import Modal from './Modal';
import { drawingsArr } from '../data/data';

export default class Drawings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      show: false,
      showInfo: false,
      target: ''
    };    
  };

  handleMouseEnter = (e) => {
    let target = e.target.style;
    let nextElSib = e.target.nextElementSibling;

    this.setState({
      index: parseInt(e.target.dataset.index), 
      target: e.target
    });
    // Show the title over the work
    if (!!target) target.style = "z-index: -50;";
    if (!!nextElSib) nextElSib.style = "z-index: 10;";
  }
  
  handleMouseLeave = (e) => {
    let target = e.target.style;
    let nextElSib = this.state.target.nextElementSibling;
    // Hide the title under the work
    if (!!target) target.style = "z-index: 50;";
    if (!!nextElSib) nextElSib.style = "z-index: -10;";

    this.setState({ 
      target: ''
    });
  }

  showModal = () => {
    this.setState({ 
      show: true,
    });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
    });
  };

  handleModalInfoMouseEnter = () => {
    this.setState({ showInfo: true });
  }
  
  handleModalInfoMouseLeave = () => {
    this.setState({ showInfo: false });
  }


  handleModalLBtnClick = () => {
    let index = parseInt(this.state.index) - 1;
    // Logic for round robin navigation in Modal
    if (index < 0) index = drawingsArr.length - 1;
    
    this.setState({
      index,
    }); 
  }

  handleModalRBtnClick = () => {
    let index = parseInt(this.state.index) + 1;
    // Logic for round robin navigation in Modal
    if (index > drawingsArr.length - 1) index = 0;

    this.setState({
      index,
    });
  }
  // ToDo: Implement Keystroke controls for modal image navigation
  handleKeyPress = () => {
    console.log('detected keystroke');
  }

  handleLoaded = (e) => {
    let container = this.refs[`drawing-${e.target.dataset.index}`];
    container.style = "visibility: visible;";
  }

  render() {
    const drawings = drawingsArr.map((drawing, i) => {
      return (
        <div 
          className="drawing noselect"
          data-index={i}
          data-title={drawing.title}
          onClick={this.showModal}
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}
          ref={`drawing-${i}`}
          style={{
            visibility: "hidden"
          }}
          key={i} >
          <img 
            src={drawing.url} 
            alt="drawing"
            style={{ zIndex: "50" }}
            onLoad={this.handleLoaded}
            data-index={i}
            data-title={drawing.title} />
          <div 
            className="overlay noselect"
            style={{ zIndex: "-10" }}
            data-title={drawing.title}
            data-index={i} >
            <span>
              {drawing.title}
            </span>
          </div>
        </div>
      );
    });

    return(
      <div className="drawings">
        <div 
          className="drawings-gallery" >
          {drawings}
        </div>
        <Modal
          show={this.state.show} 
          showInfo={this.state.showInfo} 
          title={drawingsArr[this.state.index].title}
          src={drawingsArr[this.state.index].url}
          date={drawingsArr[this.state.index].date}
          medium={drawingsArr[this.state.index].medium}
          dimensions={drawingsArr[this.state.index].dimensions}
          handleModalInfoMouseEnter={this.handleModalInfoMouseEnter}
          handleModalInfoMouseLeave={this.handleModalInfoMouseLeave}
          handleClose={this.hideModal}
          handleModalLBtnClick={this.handleModalLBtnClick}
          handleModalRBtnClick={this.handleModalRBtnClick}>
        </Modal>
      </div>
    );
  };
}