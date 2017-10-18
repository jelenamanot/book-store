import React from 'react';
import PropTypes from 'prop-types';
import '../style/Header.css';

const Header = (props) => {
  return(
    <div className="Header row">
      <div className="col-md-12">
        <div className="col-md-4 logo">
          <h1>{props.heading}</h1>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Header;