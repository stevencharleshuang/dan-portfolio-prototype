import React from 'react';
import Modal from './Modal';
import { paintingsArr } from '../data/data';

export default class Paintings extends React.Component {
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
    if (index < 0) index = paintingsArr.length - 1;
    
    this.setState({
      index,
    }); 
  }

  handleModalRBtnClick = () => {
    let index = parseInt(this.state.index) + 1;
    // Logic for round robin navigation in Modal
    if (index > paintingsArr.length - 1) index = 0;

    this.setState({
      index,
    });
  }
  // ToDo: Implement Keystroke controls for modal image navigation
  handleKeyPress = () => {
    console.log('detected keystroke');
  }

  render() {
    const paintings = paintingsArr.map((painting, i) => {
      return (
        <div 
          className="painting noselect"
          data-index={i}
          data-title={painting.title}
          onClick={this.showModal}
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}
          key={i}>
          <img 
            src={painting.url} 
            alt="painting"
            style={{ zIndex: "50" }}
            data-index={i}
            data-title={painting.title} />
          <div 
            className="overlay noselect"
            style={{ zIndex: "-10" }}
            data-title={painting.title}
            data-index={i}>
            <span>
              {painting.title}
            </span>
          </div>
        </div>
      );
    });
    return(
      <div className="paintings">
        <div 
          className="paintings-gallery" >
          {paintings}
        </div>
        <Modal
          show={this.state.show}
          showInfo={this.state.showInfo} 
          src={paintingsArr[this.state.index].url}
          title={paintingsArr[this.state.index].title}
          date={paintingsArr[this.state.index].date}
          medium={paintingsArr[this.state.index].medium}
          dimensions={paintingsArr[this.state.index].dimensions}
          handleClose={this.hideModal}
          handleModalInfoMouseEnter={this.handleModalInfoMouseEnter}
          handleModalInfoMouseLeave={this.handleModalInfoMouseLeave}
          handleModalLBtnClick={this.handleModalLBtnClick}
          handleModalRBtnClick={this.handleModalRBtnClick}>
        </Modal>
      </div>
    );
  };
}