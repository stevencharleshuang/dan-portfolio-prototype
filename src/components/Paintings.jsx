import React from 'react';
import Modal from './Modal';
import P000 from '../img/paintings-000.jpg';
import P001 from '../img/paintings-001.jpg';
import P002 from '../img/paintings-002.jpg';
import P003 from '../img/paintings-003.jpg';
import P004 from '../img/paintings-004.jpg';
import P005 from '../img/paintings-005.jpg';
import P006 from '../img/paintings-006.jpg';
import P007 from '../img/paintings-007.jpg';
import P008 from '../img/paintings-008.jpg';

const paintingsArr = [
  {
    url: P000,
    title: 'TENNIS'
  },
  {
    url: P001,
    title: 'HORSE RIDER HOWARD SCHNEIDER'
  },
  {
    url: P002,
    title: 'FOOT SCRUB'
  },
  {
    url: P003,
    title: 'TOXIC STEW'
  },
  {
    url: P004,
    title: 'RED ROSES'
  },
  {
    url: P005,
    title: 'WITCHER'
  },
  {
    url: P006,
    title: 'THE SKEPTICISIM OF THE ANGRY MAN LANDED HIM IN A MIRE OF GLOOM AND DOOM'
  },
  {
    url: P007,
    title: 'BATH SCENE WITH STARVING ANIMAL'
  },
  {
    url: P008,
    title: 'IN AUTUMN I CUDDLE MY GUN AND TALK TO MY CAT'
  }
];

export default class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      show: false,
      selection: '',
      selectionTitle: '',
      src: '',
      target: ''
    };    
  };

  handleMouseEnter = (e) => {
    let src = e.target.dataset.src;
    let target = e.target.style;
    let nextElSib = e.target.nextElementSibling;
    this.setState({
      index: parseInt(e.target.dataset.index), 
      src,
      target: e.target
    });
    if (!!target) target.style = "z-index: -50;";
    if (!!nextElSib) nextElSib.style = "z-index: 10;";
  }
  
  handleMouseLeave = (e) => {
    let target = e.target.style;
    let nextElSib = this.state.target.nextElementSibling;
    if (!!target) target.style = "z-index: 50;";
    if (!!nextElSib) nextElSib.style = "z-index: -10;";
    this.setState({ 
      src: '',
      target: ''
    });
  }

  showModal = (e) => {
    let index = parseInt(this.state.index);
    this.setState({ 
      show: true,
      selection: this.state.src,
      selectionTitle: e.target.dataset.title,
    });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      selection: ''
    });
  };

  handleModalLBtnClick = () => {
    let index = parseInt(this.state.index) - 1;
    if (index < 0) index = paintingsArr.length - 1;
    this.setState({
      index,
    }); 
  }

  handleModalRBtnClick = () => {
    let index = parseInt(this.state.index) + 1;
    if (index > paintingsArr.length - 1) index = 0;
    this.setState({
      index,
    });
  }

  render() {
    const paintings = paintingsArr.map((painting, i) => {
      return (
        <div 
          className="painting noselect"
          data-src={painting.url}
          data-index={i}
          data-title={painting.title}
          onClick={this.showModal}
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}
          key={i} >
          <img 
            src={painting.url} 
            alt="painting"
            style={{ zIndex: "50" }}
            data-index={i}
            data-src={painting.url}
            data-title={painting.title}
            />
          <div 
            className="overlay noselect"
            style={{ zIndex: "-10" }}
            data-src={painting.url}
            data-title={painting.title}
            >
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
          handleClose={this.hideModal}
          gallery={paintingsArr}
          title={this.state.selectionTitle}
          src={paintingsArr[this.state.index].url}
          handleModalLBtnClick={this.handleModalLBtnClick}
          handleModalRBtnClick={this.handleModalRBtnClick}>
          <img src={this.state.selection} alt="painting" />
          {this.state.selectionTitle}
        </Modal>
      </div>
    );
  };
}