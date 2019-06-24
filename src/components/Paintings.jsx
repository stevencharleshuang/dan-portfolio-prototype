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

let overlayStyles = {
  visibility: 'hidden'
};

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
      hovered: '',
      show: false,
      selection: '',
      src: ''
    };    
  };

  handleMouseEnter = (e) => {
    this.setState({ 
      hovered: true,
      src: e.target.src
    });
    overlayStyles = {
      visibility: 'visible'
    }
    console.log(e.target, this);
  }
  
  handleMouseLeave = (e) => {
    this.setState({ 
      hovered: false,
      src: ''

    });
    overlayStyles = {
      visibility: 'hidden'
    }
    console.log(e);
  }

  showModal = (e) => {
    console.log(e.target);
    this.setState({ 
      show: true,
      selection: this.state.src
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state);

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
            data-title={painting.title} />
          <div className="overlay" style={overlayStyles}>
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