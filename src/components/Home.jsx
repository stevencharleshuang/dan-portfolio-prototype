import React from 'react';
import Hero from '../img/hero.jpg';

export default function Home() {
  return(
    <div className="home">
      <img src={Hero} alt="hero" />
    </div>
  );
}