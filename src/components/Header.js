import React from 'react';
import '../style/Header.css';

const Header = () => {
  return(
    <div className="Header row">
      <div className="col-md-12">
        <div className="col-md-4 logo">
          <h1>Book Store</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;