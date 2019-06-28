import React from 'react';
import ProfilePic from '../img/profile-pic.jpg';
import IG from '../img/ig.jpg';

export default function About() {
  return(
    <div className="about">
      <img src={ProfilePic} alt="profile pic" />
      <div className="content">
        <p>
          Lives and works in New York City
        </p> 
        <p>
          <a href="https://tomchristoffersen.dk/exhibitions/naked-pictures/" target="_blank" rel="noopener noreferrer">
            Galleri Tom Christoffersen<br />
            Copenhagen, Denmark
          </a>
        </p>
        {/* <a href="https://www.instagram.com/dan__schein/" target="_blank" rel="noopener noreferrer">
          <img src={IG} alt="instagram" id="ig" />
        </a> */}
      </div>
    </div>
  );
}