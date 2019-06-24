import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo noselect">
      <Link to="/">
        <span>
          dan schein
        </span>
      </Link>
    </div>
  );
}