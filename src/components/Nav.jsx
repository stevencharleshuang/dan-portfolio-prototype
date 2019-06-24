import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="noselect">
      <ul>
        <Link to="/paintings"><li>paintings</li></Link>
        <Link to="/drawings"><li>drawings</li></Link>
        <Link to="/cv"><li>cv</li></Link>
        <Link to="/about"><li>about</li></Link>
      </ul>
    </nav>
  );
}