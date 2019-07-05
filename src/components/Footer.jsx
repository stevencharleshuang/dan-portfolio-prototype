import React from 'react';
import Ig from '../img/ig.png';
import Email from '../img/email.png';
import Fb from '../img/fb.png';

export default function Footer() {
  return (
    <footer>
      <a 
        href="https://www.instagram.com/dan__schein/" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={Ig} alt="instagram" />
      </a>
      <a 
        href="https://www.facebook.com/dan.schein.5" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={Fb} alt="facebook" />
      </a>
      <a href="mailto:danschein1212@gmail.com">
        <img src={Email} alt="e-mail" />
      </a>
    </footer>
  );
}