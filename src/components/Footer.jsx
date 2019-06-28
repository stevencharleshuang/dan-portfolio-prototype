import React from 'react';
import IG from '../img/ig.jpg';

export default function Footer() {
  return (
    <footer>
      Dan Schein 2019
      <a 
        href="https://www.instagram.com/dan__schein/" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={IG} alt="instagram" />
      </a>
    </footer>
  );
}