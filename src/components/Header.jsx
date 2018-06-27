import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`

      `}</style>
    <h1>Farmers Forever</h1>
      <Link to='/'>Home</Link> | <Link to='/schedule'>Schedule</Link> | <Link to='/produce'>Available Produce</Link>
    </div>
  );
}

export default Header;
