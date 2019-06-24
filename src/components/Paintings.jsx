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

export default class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this); 
    this.hideModal = this.hideModal.bind(this); 
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state);
    const paintingsArr = [
      P000,
      P001,
      P002,
      P003,
      P004,
      P005,
      P006,
      P007,
      P008
    ];

    let paintings = paintingsArr.map((painting, i) => {
    return (
      <img 
        src={painting} 
        alt="painting"
        onClick={this.showModal} 
        key={i} />
      );
    });
    
    return(
      <div className="paintings">
        {paintings}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </div>
    );
  };
}