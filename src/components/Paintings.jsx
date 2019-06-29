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
    var: P000,
    title: 'TENNIS'
  },
  {
    var: P001,
    title: 'HORSE RIDER HOWARD SCHNEIDER'
  },
  {
    var: P002,
    title: 'FOOT SCRUB'
  },
  {
    var: P003,
    title: 'TOXIC STEW'
  },
  {
    var: P004,
    title: 'RED ROSES'
  },
  {
    var: P005,
    title: 'WITCHER'
  },
  {
    var: P006,
    title: 'THE SKEPTICISIM OF THE ANGRY MAN LANDED HIM IN A MIRE OF GLOOM AND DOOM'
  },
  {
    var: P007,
    title: 'BATH SCENE WITH STARVING ANIMAL'
  },
  {
    var: P008,
    title: 'IN AUTUMN I CUDDLE MY GUN AND TALK TO MY CAT'
  }
];

export default class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selection: '',
      src: '',
      target: ''
    };    
  };

  handleMouseEnter = (e) => {
    let src = e.target.dataset.src;
    let target = e.target.style;
    let nextElSib = e.target.nextElementSibling;
    this.setState({ 
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
    this.setState({ 
      show: true,
      selection: this.state.src
    });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      selection: ''
    });
  };

  render() {
    const paintings = paintingsArr.map((painting, i) => {
      return (
        <div 
          className="painting"
          data-title={painting.title}
          onClick={this.showModal}
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}
          key={i}>
          <img 
            src={painting.var} 
            alt="painting"
            style={{ zIndex: "50" }}
            data-src={painting.var}
            data-title={painting.title} />
          <div 
            className="overlay"
            style={{ zIndex: "-10" }}
            data-src={painting.var}
            data-title={painting.title}>
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <img src={this.state.selection} alt="painting" />
        </Modal>
      </div>
    );
  };
}