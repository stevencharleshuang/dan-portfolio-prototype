import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"><li>dan schein</li></Link>
    </div>
  );
}