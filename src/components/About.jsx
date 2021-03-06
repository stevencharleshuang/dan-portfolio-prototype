import React from 'react';
import ProfilePic from '../img/profile-pic.jpg';

export default function About() {
  return(
    <div className="about">
      <img src={ProfilePic} alt="profile pic" />
      <div className="content fade-in">
        <p>
          Lives and works in New York City
        </p> 
        <p>
          <span className="about-links">
            <a href="https://tomchristoffersen.dk/exhibitions/naked-pictures/" target="_blank" rel="noopener noreferrer">
              Galleri Tom Christoffersen<br />
              Copenhagen, Denmark
            </a>
          </span>
        </p>
        {/* <a href="https://www.instagram.com/dan__schein/" target="_blank" rel="noopener noreferrer">
          <img src={IG} alt="instagram" id="ig" />
        </a> */}
      </div>
    </div>
  );
}